fs      = require "fs"
path    = require "path"
wrench  = require "wrench"
log     = console.log

config =
	cur_dir: process.cwd()
	pub_dir: "."
	js_dir: "www#{path.sep}js#{path.sep}"
	coffee_dir: "www#{path.sep}coffee#{path.sep}"
	backend_dir: "backend#{path.sep}"
	frontend_dir: "frontend#{path.sep}coffee#{path.sep}"
	utils_dir: "utils#{path.sep}"
	config_dir: "config#{path.sep}"
	lib_dir: "lib#{path.sep}"
	server_file: "server.coffee"

is_win         = !!process.platform.match(/^win/)
is_json        = /^.*\.[json]+$/

log "Is windows: #{is_win}".green
log "Platform #{process.platform}".green

module.exports = (grunt) ->
	###
		Meta information and settings
	###

	grunt.loadNpmTasks("grunt-contrib-coffee")
	grunt.loadNpmTasks("grunt-contrib-watch")

	grunt.initConfig
		pkg: grunt.file.readJSON("package.json")

		coffee:
			compile:
				expand: true
				cwd: "#{config.cur_dir}"
				src: ["**/*.coffee"]
				dest: "#{config.js_dir}"
				ext: ".js"

			glob_all:
				expand: true
				cwd: "#{config.frontend_dir}"
				src: ["**/*.coffee"]
				dest: "#{config.js_dir}"
				ext: ".js"

			all: 
				expand: true,
				flatten: false,
				cwd: "#{config.frontend_dir}",
				src: ['**/*.coffee'],
				dest: "#{config.js_dir}",
				ext: ".js"

			shared:
				expand: true,
				flatten: false,
				cwd: '.',
				src: ["#{config.utils_dir}**/*.coffee"],
				dest: '.',
				ext: '.js'

			server:
				expand: true,
				flatten: false,
				cwd: '.',
				src: [".#{path.sep}server.coffee"],
				dest: '.',
				ext: '.js'

			backend:
				expand: true,
				flatten: false,
				cwd: '.',
				src: ["#{config.backend_dir}**/*.coffee"],
				dest: '.',
				ext: '.js'

			configs:
				expand: true,
				flatten: false,
				cwd: '.',
				src: [".#{path.sep}config#{path.sep}**/*.coffee"],
				dest: '.',
				ext: '.js'

			lib:
				expand: true,
				flatten: false,
				cwd: '.',
				src: [".#{path.sep}lib#{path.sep}**/*.coffee"],
				dest: '.',
				ext: '.js'

		watch:
			coffee_frontend:
				files: ["#{config.frontend_dir}**/*.coffee"]
				tasks: ["coffee:glob_all"]
				options:
					nospawn: true
					livereload: false

			coffee_server:                 
				files: ["#{config.server_file}"]
				tasks: ['coffee:server']
				options:
					nospawn: true
					livereload: true

			coffee_backend:
				files: ["#{config.backend_dir}**/*.coffee"]
				tasks: ['coffee:backend']
				options:
					nospawn: true
					livereload: true

			coffee_configs:
				files: ["#{config.config_dir}**/*.coffee"]
				tasks: ['coffee:configs']
				options:
					nospawn: true
					livereload: true

			coffee_lib:
				files: ["#{config.lib_dir}**/*.coffee"]
				tasks: ['coffee:lib']
				options:
					nospawn: true
					livereload: true

			coffee_shared: 
				files: ["#{config.utils_dir}**/*.coffee"]
				tasks: ['coffee:shared']
				options:
					nospawn: true
					livereload: true

	grunt.event.on "watch", (action, filepath) ->
		filepath = filepath.replace grunt.config "coffee.glob_all.cwd", ""
		log filepath.yellow
		grunt.config("coffee.glob_all.src", [filepath])
	
	grunt.registerTask "serve", ["watch"]