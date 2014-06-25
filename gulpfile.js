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
	, readFile = fs.createReadStream
	, writeFile = fs.createWriteStream
	, fixtures = require("./createFixtures")
	, isWindows = !!process.platform.match(/^win/)
	, binCoffee = (isWindows) ? "coffee.cmd" : "coffee"
	, args = {
			mongo: [
				"--dbpath",
				"data/db"
			],
			supervisor: (!isWindows) ? [
				"-w",
				"./src/backend,./server.coffee",
				"server.coffee"
			] : [
				"-w",
				"./src/backend,./server.coffee",
				"-x",
				"coffee.cmd",
				"server.coffee"
			],
			jobupdate: [
				"./src/backend/modules/JobUpdate.coffee"
			]
		}
	, logs = {
		mongo: {out: "logs/mongo.out.log", err: "logs/mongo.err.log"},
		supervisor: {out: "logs/express.out.log", err: "logs/express.err.log"},
		jobupdate: {out: "logs/jobupdate.out.log", err: "logs/jobupdate.err.log"}
	}
	, DBDUMP_FILE = "dump.zip"
	,	log = console.log.bind(console)
	, inProduction = process.env.NODE_ENV === "production"
	;

process.on("uncaughtException", function(err) {
	util.log(err);
});

function pipeOut(thread, signature, color, consoleOut) {
	if (!consoleOut) consoleOut = false;

	if (consoleOut || inProduction) {
		thread.stdout.pipe(writeFile(consoleOut, {flags: "a"}));
	} else {
		thread.stdout.on("data", function(data) {
			util.log(("["+signature+"]")[color].bold)
			util.log(data.toString());
		});
	}
}

function pipeErr(thread, logFile) {
	if (!inProduction) {
		thread.stderr.pipe(process.stdout);
	} else {
		function pipe() {
			thread.stderr.pipe(writeFile(logFile, {flags: "a"}), logFile);
		}
		fs.exists(logFile, function(itDoes) {
			if (!itDoes) {
				fs.writeFile(logFile, "", function(err) {
					if (err) throw err;
					pipe();
				});
			} else {
				pipe();
			}
		});
	}
}

function touchDir(dir, clb) {
	fs.exists(dir, function (itDoes) {
		if (!itDoes) {
			mkdirp(dir, clb);
		} else {
			clb();
		}
	})
}

function linkDir(source, dest) {
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
				throw err;
			}
		});
	}
}

gulp.task("default", ["linkShared", "watch", "serve", "runJobProcess"], function() {
	
});

gulp.task("linkShared", function() {
	var cwd = process.cwd()
		, sharedPath = cwd + "/src/shared";
	linkDir(sharedPath, cwd + "/www/shared");
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
			if (err) throw err;
			fixtures.create(function(err, res) {
				if (err) throw err;
				util.log(("Created in total " + res.length + " fixtures!").yellow.bold);
				dbconnection.close();
				next();
			});
		});
	});
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
				util.log(err.toString().red);
				throw err;
			}
		});
	});

	archive.on("error", function(err) {
		util.log(err.toString().red);
		throw err;
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
		util.log(err.toString().red);
		throw err;
	});

	input.on("close", function() {
		spawn("mongorestore")
		.on("close", function() {
			rimraf("dump", function(err) {
				if (err) {
					util.log(err.toString().red);
					throw err;
				}
			});
			util.log("DB restore finished".yellow.bold);
		})
	});

	input.pipe(unzip.Extract({path: "."}));
});

/**
	Default dev tasks
*/
gulp.task("serve", function() {
	async.map(["./logs/", "./data/db/"], touchDir, function() {
		var supervisorCmd = (isWindows) ? "supervisor.cmd" : "supervisor"
			, mongo = spawn("mongod", args.mongo)
			, supervisor = spawn(supervisorCmd, args.supervisor)
			;

		pipeOut(mongo, "MONGO", "green", logs.mongo.out);
		pipeOut(supervisor, "EXPRESS", "red", logs.supervisor.out);

		pipeErr(supervisor, logs.supervisor.err);
		pipeErr(mongo, logs.mongo.err);
	})
});

/**
	Run job update thread
*/
gulp.task("runJobProcess", function() {
	var jobUpdateProcess = spawn(binCoffee, args.jobupdate);
	pipeOut(jobUpdateProcess, "JOBUPDATE-PROCESS", "yellow");
	pipeErr(jobUpdateProcess, logs.jobupdate.err);
});

/** 
	Watch and compile coffee 
*/
gulp.task("watch", function() {
	var src = {
		frontend: "src/frontend/",
		backend: "src/backend/"
	}
	, cwd = process.cwd()
	,	findFrontend = cwd.length + src.frontend.length
	, findBackend = cwd.length + src.backend.length
	;

	function compileFrontend(file) {
		var path = file.path
			, type = file.type
			, ind = isWindows ? path.lastIndexOf("\\") : path.lastIndexOf("/")
			, name = path.substring(findFrontend + 1, path.length - 7)
			;
		
		util.log(("Compiling " + name).yellow);

		if (type === "changed") {
			gulp.src(path)
			.pipe(coffee({bare: true}).on("error", util.log))
			.pipe(rename(name + ".js"))
			.pipe(gulp.dest("www/js/"));
		}
	}

	glob(src.frontend + "**/*.coffee", function(err, files) {
		if (err) {
			return util.log(err);
		}
		files.forEach(function(file) {
			if (isWindows) {
				file = cwd + "\\" + file.replace(/\//g, "\\");
			} else {
				file = cwd + "/" + file;
			}
			compileFrontend({
				path: file, 
				type: "changed"
			})
		});
		gulp.watch(src.frontend + "**/*.coffee", compileFrontend);
	});
	// .pipe(coffee())
	// .pipe(uglify())
	// .pipe(concat("craftia.min.js"))
	// .pipe(gulp.dest("www/js/"));
});