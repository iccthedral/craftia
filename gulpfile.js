var spawn = require("child_process").spawn
	, gulp = require("gulp")
	, git = require("gulp-git")
	, fs = require("fs")
	, mkdirp = require("mkdirp")
	, colors = require("colors")
	, async = require("async")
	, unzip = require("unzip")
	, rimraf = require("rimraf")
	, archiver = require("archiver")
	, readFile = fs.createReadStream
	, writeFile = fs.createWriteStream
	, isWindows = !!process.platform.match(/^win/)
	, args = {
			mongo: [
				"--dbpath",
				"data/db"
			],
			grunt: [
				"serve"
			],
			supervisor: [
				"-w",
				"backend,utils,lib,config,server",
				"-e",
				"coffee,js",
				"server.js"
			],
			jobupdate: [
				"./backend/modules/JobUpdate.js"
			]
		}
	, logs = {
		mongo: {out: "logs/mongo.out.log", err: "logs/mongo.err.log"},
		supervisor: {out: "logs/express.out.log", err: "logs/express.err.log"},
		grunt: {out: "logs/grunt.out.log", err: "logs/grunt.err.log"},
		jobupdate: {out: "logs/jobupdate.out.log", err: "logs/jobupdate.err.log"}
	}
	, DBDUMP_FILE = "dump.zip"
	,	log = console.log.bind(console)
	, inProduction = process.env.NODE_ENV === "production"
	;

function pipeOut(thread, signature, color, consoleOut) {
	if (!consoleOut) consoleOut = false;

	if (consoleOut || inProduction) {
		thread.stdout.pipe(writeFile(consoleOut, {flags: "a"}));
	} else {
		thread.stdout.on("data", function(data) {
			log(("["+signature+"]")[color].bold)
			log(data.toString());
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

gulp.task("default", ["runDevStack", "runJobProcess"], function() {

});

gulp.task("add", function() {
	log("git-add".yellow.bold);
  return gulp.src(".")
  .pipe(git.add());
});

gulp.task("commit", function() {
	log(gulp.env);
	log("git-commit".yellow.bold);
	return gulp.src(".")
  .pipe(git.commit("gulp commited", {args: "-s"}));
});

gulp.task("push", function() {
	log("git-push".yellow.bold);
  return git.push("heroku", "master")
  .end();
});

gulp.task("reset", function() {
	/* git rev-parse HEAD || heroku/master */
	log("git-reset".yellow.bold);
  return git.reset("SHA");
});

gulp.task("pull", function() {
	log("git-pull".yellow.bold);
  return git.pull("heroku", "master");
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
		log((DBDUMP_FILE + " created.").yellow, "Wrote", archive.pointer(), "bytes");
	  
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
				log(err.toString().red);
				throw err;
			}
		});
	});

	archive.on("error", function(err) {
		log(err.toString().red);
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
		log(err.toString().red);
		throw err;
	});

	input.on("close", function() {
		spawn("mongorestore")
		.on("close", function() {
			rimraf("dump", function(err) {
				if (err) {
					log(err.toString().red);
					throw err;
				}
			});
			log("DB restore finished".yellow.bold);
		})
	});

	input.pipe(unzip.Extract({path: "."}));
});

/**
	Default dev tasks
*/
gulp.task("runDevStack", function() {
	async.map(["./logs/", "./data/db/"], touchDir, function() {
		var supervisorCmd = (isWindows) ? "supervisor.cmd" : "supervisor"
			, gruntCmd = (isWindows) ? "grunt.cmd" : "grunt"
			, mongo = spawn("mongod", args.mongo)
			, supervisor = spawn(supervisorCmd, args.supervisor)
			, grunt = null
			;

		if (!inProduction) {
			grunt = spawn(gruntCmd, args.grunt);
			pipeOut(grunt, "GRUNT", "cyan");
			pipeErr(grunt, logs.grunt.err);
		}
		
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
	var jobUpdateProcess = spawn("node", args.jobupdate);
	pipeOut(jobUpdateProcess, "JOBUPDATE-PROCESS", "yellow");
	pipeErr(jobUpdateProcess, logs.jobupdate.err);
});
