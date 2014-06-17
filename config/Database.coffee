mongoose = require "mongoose"

localURL = "mongodb://localhost/craftia"
dbURL = process.env.MONGOLAB_URI or process.env.MONGOHQ_URL or localURL

log = console.log.bind console

#connect to database
mongoose.connect dbURL
db = mongoose.connection
db.on "error", console.error.bind console, "Connection error: "
db.once "open", ->
	log "Connected to DB"

module.exports = db