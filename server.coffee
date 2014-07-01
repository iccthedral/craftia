cs = require "coffee-script/register"
express = require "express"
mongoose = require "mongoose"
handlebars = require "express3-handlebars"
flash = require "connect-flash"
wrench = require "wrench"

db = require "./src/backend/config/Database"
passport = require "./src/backend/config/Passport.coffee"
shims = require "./src/backend/Shims.coffee"

PORT = process.env.PORT || 3000

app = express()
log = console.log.bind console

#create and configure handlebars
hbs = handlebars.create {}

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

# process.on "close", ->
# 	console.error "PORT: #{PORT} is busy!"

# process.on "uncaughtException", (err) ->
# 	console.error err
# 	process.exit()
# 	server.close()

server = app.listen PORT

console.error "Running on: #{PORT}"
