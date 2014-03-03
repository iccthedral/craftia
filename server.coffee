PORT = process.env.PORT || 3000

express = require "express"
mongoose = require "mongoose"
passport = require "passport"
dbconfig = require "./config/Database"
handlebars = require "express3-handlebars"
helpers = require "./lib/HBHelpers"
flash = require "connect-flash"
wrench = require "wrench"
require("./config/Passport")(passport)

app = express()
log = console.log

#connect to database
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || dbconfig.url)
db = mongoose.connection
db.on "error", console.error.bind(console, "Connection error: ")
db.once "open", () ->
	console.log "Connected to DB"

#create and configure handlebars
hbs = handlebars.create({})
	# helpers: helpers
###	partialsDir: [
		 "views/hbpartials/"
	]###

#load utils and prototypes
wrench.readdirSyncRecursive("utils/")
.filter (file) ->
	return file.lastIndexOf(".js") isnt -1 
.forEach (util) ->
	require("./utils/#{util}")()

#configure app
app.configure () ->
	app.use express.logger("dev")
	app.use express.cookieParser()
	app.use express.bodyParser()
	app.engine("handlebars", hbs.engine)
	app.set("view engine", "handlebars")
	app.use(express.session(secret: "ve2r@y#!se3cret_so!wow1#@*)much(9awe19_hoi"))
	app.use(passport.initialize())
	app.use(passport.session())

	router = require("./backend/Router")
	router(app, passport)
	
app.use(express.static("www/"))
app.listen(PORT)

console.log("Running on: #{PORT}");
