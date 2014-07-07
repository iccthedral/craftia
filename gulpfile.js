var spawn = require("child_process").spawn
	, gulp = require("gulp")
	, coffee = require("gulp-coffee")
	, concat = require("gulp-concat")
	, uglify = require("gulp-uglify")
	, util = require("gulp-util")
	, rename = require("gulp-rename")
	, sourceMaps = require("gulp-sourcemaps")
	, git = require("gulp-git")
	, fs = require("fs")
	, glob = require("glob")
	, mongoose = require("mongoose")
	, mkdirp = require("mkdirp")
	, wrench = require("wrench")
	, colors = require("colors")
	, async = require("async")
	, unzip = require("unzip")
	, rimraf = require("rimraf")
	, archiver = require("archiver")
	, notification = require("node-notifier")
	, fixtures = require("./createFixtures")
	, Path = require("path")
	, readFile = fs.createReadStream
	, writeFile = fs.createWriteStream
	, isWindows = !!process.platform.match(/^win/)
	, binCoffee = (isWindows) ? "coffee.cmd" : "./node_modules/coffee-script/bin/coffee"
	, backendDir = "./src/backend/"
	, logsDir = "./logs/"
	, dbPathDir = "./data/db/"
	, jsDir = "./www/js/"
	, sharedDir = "./src/shared/"
	, frontendDir = "./src/frontend/"
	, serverFile = "server.coffee"
	, args = {
			mongo: [
				"--dbpath",
				dbPathDir,
				"--journal"
			],
			server: [
				serverFile
			],
			watch: [
				"-wc",
				backendDir,
				serverFile
			],
			jobupdate: [
				"./src/backend/modules/JobUpdate.coffee"
			]
		}
	, logFiles = {
		mongo: {
			out: "logs/mongo.out.log", 
			err: "logs/mongo.err.log"
		},
		server: {
			out: "logs/express.out.log", 
			err: "logs/express.err.log"
		},
		jobupdate: {
			out: "logs/jobupdate.out.log", 
			err: "logs/jobupdate.err.log"
		}
	}
	, inProduction = process.env.NODE_ENV === "production"
	, DBDUMP_FILE = "dump.zip"
	;

function pipeOut(thread, signature, color, consoleOut) {
	if (!consoleOut) {
		consoleOut = false;
	}

	if (consoleOut || inProduction) {
		function pipe() {
			thread.stdout.pipe(writeFile(consoleOut, {flags: "a"}), consoleOut);
		}
		fs.exists(consoleOut, function(itDoes) {
			if (!itDoes) {
				fs.writeFile(consoleOut, "", function(err) {
					if (err) {
						return throwError(err);
					}
					pipe()
				})
			} else {
				pipe()
			}
		})
	} else {
		thread.stdout.on("data", function(data) {
			util.log(("[" + signature + "]")[color].bold)
			util.log(data.toString());
		});
	}
};

function pipeErr(thread, logFile) {
	if (!inProduction) {
		thread.stderr.on("data", function(data) {
			throwError(new Error(data));
		});
	}

	function pipe() {
		thread.stderr.pipe(writeFile(logFile, {flags: "a"}), logFile);
	}
	fs.exists(logFile, function(itDoes) {
		if (!itDoes) {
			fs.writeFile(logFile, "", function(err) {
				if (err) {
					return throwError(err);
				}
				pipe();
			});
		} else {
			pipe();
		}
	});
}

function touchDir(dir, clb) {
	fs.exists(dir, function (itDoes) {
		if (!itDoes) {
			mkdirp(dir, clb);
		} else {
			clb(null, null);
		}
	})
};

function linkDir(source, dest, clb) {
	fs.exists(dest, function(exists) {
		if (exists) {
			rimraf(dest, function() {
				linkMe()
			})
		} else {
			linkMe();
		}
	});
	
	function linkMe() {
		fs.symlink(source, dest, "junction", function(err) {
			if (err) {
				return throwError(err);
			}
			clb();
		});
	}
};

function compileFrontend(file, next) {
	var path = file.path
		, type = file.type
		, name = util.replaceExtension(Path.relative(frontendDir, path), ".js")
		;
	util.log("Compiling", name)
	gulp
	.src(path)
	.pipe(coffee({bare: true}).on("error", throwError))
	.pipe(rename(name))
	.pipe(gulp.dest(jsDir))
	if (next) next()
};

function compileShared(file, next) {
	var path = file.path
		, type = file.type
		, name = util.replaceExtension(Path.relative(sharedDir, path), ".js")
		;
	util.log("Compiling", name)
	gulp
	.src(path)
	.pipe(coffee({bare: true}).on("error", throwError))
	.pipe(rename(name))
	.pipe(gulp.dest(jsDir))
	if(next) next();
};

function throwError(err) {
	util.log(err);
	notifier = new notification();
	notifier.notify({
			title: "ERROR",
			message: err.message
	});
}

util.log("In production:", inProduction);

if (inProduction) {
	// process.stderr.pipe(process.stdout);
	// process.stderr.on("data", function(data) {
	// 	util.log("ERROR", err);
	// });
}

gulp.task("minify-css", function() {
	minifyCss = require("gulp-minify-css");
	gulp.src(["./www/css/**/*.css", "!./www/css/**/*.min.css"])
	.pipe(minifyCss())
	.pipe(concat("bundle.min.css"))
	.pipe(gulp.dest("./www/css/"))
});

gulp.task("default", [
	"link-shared", 
	"create-logs", 
	"create-dbpath",
	"compile-shared",
	"compile-frontend",
	"serve-mongo",
	"serve-express",
	"watch-frontend",
	"watch-shared"
], function(next) {
	util.log("Up and running");
});

gulp.task("predeploy", [
	"compile-shared",
	"compile-frontend",
	"rjs",
	"minify-css",
	"create-logs"
], function() {

});

gulp.task("rjs", function() {
	var rjs = require("gulp-requirejs");
	var cfg = require("./www/js/config.js");
	
	cfg.baseUrl = "www/js";
	cfg.name = "bootstrap";
	cfg.out = "dist.js";
	cfg.insertRequire = ["jquery", "angular", "toastr", "bootstrap"]
	rjs(cfg)
	.pipe(gulp.dest("www/js/"));
});

gulp.task("start-craftia", [
	"link-shared"
	, "job-process"
	, "create-logs"
	, "serve-express"
	], function(next) {
	util.log("Craftia deployed".green);
});

gulp.task("link-shared", function(next) {
	var cwd = process.cwd();
	linkDir(cwd + "/src/shared", cwd + "/www/shared", function() {
		util.log("Shared folder linked".green);
		next();
	});
});

gulp.task("add", function() {
	util.log("git-add".yellow.bold);
	return gulp.src(".")
	.pipe(git.add());
});

gulp.task("commit", function() {
	util.log("git-commit".yellow.bold);
	return gulp.src(".")
	.pipe(git.commit(gulp.env.m || "gulp commited", {args: "-s"}));
});

gulp.task("push", function() {
	util.log("git-push".yellow.bold);
	return git.push("heroku", "master")
	.end();
});

gulp.task("reset", function() {
	/* git rev-parse HEAD || heroku/master */
	util.log("git-reset".yellow.bold);
	return git.reset("SHA");
});

gulp.task("pull", function() {
	util.log("git-pull".yellow.bold);
	return git.pull("heroku", "master");
});

/** Create test fixtures */
gulp.task("createFixtures", function(next) {
	var dbconnection = require("./src/backend/config/Database");
	dbconnection.on("open", function() {
		dbconnection.db.dropDatabase(function(err) {
			util.log("Dropped database!".red);
			if (err) {
				return throwError(err);
			}
			fixtures.create(function(err, res) {
				if (err) {
					return throwError(err);
				}
				util.log(("Created in total " + res.length + " fixtures!").yellow.bold);
				dbconnection.close();
				next();
			})
		})
	})
});

/**
	Dump database and commit
*/
gulp.task("dbDump", function() {
	var dumper = spawn("mongodump", [])
		, output = writeFile(DBDUMP_FILE)
		, archive = archiver("zip")
		;
	
	output.on("close", function() {
		util.log((DBDUMP_FILE + " created.").yellow, "Wrote", archive.pointer(), "bytes");
		
		/* add dump.zip */
		gulp.src(DBDUMP_FILE)
		.pipe(git.add())
		.on("end", function() {
			/* then commit and push */
			gulp.src(DBDUMP_FILE)
			.pipe(git.commit(DBDUMP_FILE + " updated", {args: "-a -s"}))
			.end(function() {
				gulp.start("pull", "push");
			});
		});

		rimraf("dump", function(err) {
			if (err) {
				return throwError(err);
			}
		});
	});

	archive.on("error", function(err) {
		return throwError(err);
	});

	archive.pipe(output);

	dumper.on("close", function() {
		archive.bulk([{ 
			expand: true,
			cwd: "dump", 
			src: ["**"], 
			dest: "dump"
		}]);
		archive.finalize();
	});
});

/**
	Restore from dump.zip
*/
gulp.task("dbRestore", function() {
	var input = readFile(DBDUMP_FILE);

	input.on("error", function(err) {
		return throwError(err);
	});

	input.on("close", function() {
		spawn("mongorestore")
		.on("close", function() {
			rimraf("dump", function(err) {
				if (err) {
					return throwError(err);
				}
			});
			util.log("DB restore finished".yellow.bold);
		})
	});

	input.pipe(unzip.Extract({path: "."}));
});

gulp.task("create-logs", function(next) {
	touchDir(logsDir, function() {
		util.log("Logs created".green);
		next();
	});
});

gulp.task("create-dbpath", function(next) {
	touchDir(dbPathDir, function() {
		util.log("DB directory created".green);
	});
});

/**
	Default dev tasks
*/
gulp.task("serve-express", function() {
	var serverInstance = null;
	var spawnServer = function() {
		serverInstance = spawn(binCoffee, args.server);
		pipeOut(serverInstance, "EXPRESS", "red", logFiles.server.out);
		pipeErr(serverInstance, logFiles.server.out);
		serverInstance.stdout.on("data", function(data) {
			util.log(data.toString());
		});
		serverInstance.stdout.once("data", function() {
			util.log("Express is up!".green.bold);
		});
		serverInstance.stderr.on("data", function(data) {
			util.log(data.toString());
		});
	};

	var restartServer = function() {
		if (serverInstance) {
			util.log("I watched u")
			serverInstance.kill();
		}
		spawnServer();
	};
	
	spawnServer();
	gulp.watch([backendDir + "**/*.coffee", serverFile], restartServer);
});

gulp.task("serve-mongo", function(next) {
	var mongoInstance = null;
	var spawnMongo = function() {
		mongoInstance = spawn("mongod", args.mongo);
		pipeOut(mongoInstance, "MONGO", "green", logFiles.mongo.out);
		pipeErr(mongoInstance, logFiles.mongo.err);
		mongoInstance.stdout.once("data", function() {
			util.log("Mongo is up!".green.bold);
			next();
		});
		mongoInstance.on("close", function() {
			util.log("Mongo exited".red);
		})
	};
	spawnMongo();
});

/**
	Run job update thread
*/
gulp.task("job-process", function() {
	var jobUpdateInstance = spawn(binCoffee, args.jobupdate);
	pipeOut(jobUpdateInstance, "JOBUPDATE-PROCESS", "yellow", logFiles.jobupdate.out);
	pipeErr(jobUpdateInstance, logFiles.jobupdate.err);
});

gulp.task("watch-frontend", function(next) {
	gulp.watch(frontendDir + "**/*.coffee", compileFrontend);
});

gulp.task("compile-frontend", function(next) {
	var cwd = process.cwd();
	glob(frontendDir + "**/*.coffee", function(err, files) {
		if (err) {
			return util.log(err);
		}
		var flen = files.length;
		files.forEach(function(file) {
			if (isWindows) {
				file = cwd + "\\" + file.replace(/\//g, "\\");
			} else {
				file = cwd + "/" + file;
			}
			compileFrontend({
				path: file, 
				type: "changed"
			}, function() {
				if ((flen -=1) <= 0) {
					util.log("Frontend folder compiled".green);
					next();
				}
			})
		})
	})
});

gulp.task("watch-shared", function(next) {
	gulp.watch(sharedDir + "**/*.coffee", compileShared);
});

gulp.task("compile-shared", function(next) {
	var cwd = process.cwd();
	glob(sharedDir + "**/*.coffee", function(err, files) {
		if (err) {
			return util.log(err);
		}
		var flen = files.length;
		files.forEach(function(file) {
			if (isWindows) {
				file = cwd + "\\" + file.replace(/\//g, "\\");
			} else {
				file = cwd + "/" + file;
			}
			compileShared({
				path: file, 
				type: "changed"
			}, function() {
				if ((flen -=1) <= 0) {
					util.log("Shared folder compiled".green);
					next();
				}
			})
		})
	})
});