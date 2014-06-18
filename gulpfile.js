var spawn = require("child_process").spawn
	, gulp = require("gulp")
	, fs = require("fs")
	, mkdirp = require("mkdirp")
	, writeFile = fs.createWriteStream
	, colors = require("colors")
	, async = require("async")
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
			]
		}
	, logs = {
		mongo: {out: "logs/mongo.out.log", err: "logs/mongo.err.log"},
		supervisor: {out: "logs/express.out.log", err: "logs/express.err.log"},
		grunt: {out: "logs/grunt.out.log", err: "logs/grunt.err.log"}
	}
	,	log = console.log.bind(console)
	, inProduction = process.env.NODE_ENV === "production"
	;

function pipeOut(thread, signature, color, consoleOut) {
	if (!consoleOut) consoleOut = false;

	if (consoleOut || inProduction) {
		thread.stdout.pipe(writeFile(consoleOut, {flags: "a"}));
	} else {
		thread.stdout.on("data", function(data) {
			log(("["+signature+"]\n" + data.toString())[color]);
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

gulp.task("default", function() {
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
})