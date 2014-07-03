cs = require "coffee-script/register"
express = require "express"
mongoose = require "mongoose"
handlebars = require "express3-handlebars"
flash = require "connect-flash"
wrench = require "wrench"
fs = require "fs"
rimraf = require "rimraf"
db = require "./src/backend/config/Database"
passport = require "./src/backend/config/Passport.coffee"
shims = require "./src/backend/Shims.coffee"

PORT = process.env.PORT || 3000

app = express()
log = console.log.bind console

#create and configure handlebars
hbs = handlebars.create {}

linkDir = (source, dest, clb) ->
	fs.exists dest, (exists) ->
		return linkMe() if not exists
		rimraf dest, ->
			linkMe()

	linkMe = ->
		fs.symlink source, dest, "junction", (err) ->
			return if err?
			clb()

cwd = process.cwd()

#configure app
app.configure ->
	app.use express.logger "dev"
	app.use express.cookieParser()
	app.use express.bodyParser()
	app.engine "hbs", hbs.engine
	app.set "view engine", "hbs"
	app.use express.session secret:"ve2r@y#!se3cret_so!wow1#@*)much(9awe19_hoi"
	app.use passport.initialize()
	app.use passport.session()
	
	router = require "./src/backend/Router"
	router app, passport

app.use (err, req, res, next) ->
	console.error err, err.message, typeof err
	res.send err

app.use express.static "www/"

linkDir cwd + "/src/shared", cwd + "/www/shared", ->
	server = app.listen PORT
	console.log "Running on: #{PORT}"
