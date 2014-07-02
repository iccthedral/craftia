mongoose = require "mongoose"

localURL = "mongodb://localhost/craftia"
dbURL = process.env.MONGOLAB_URI or localURL

log = console.log.bind console

#connect to database
mongoose.connect dbURL, {
	auto_reconnect: true
	autoReconnect: true
	server:
		auto_reconnect: true
		autoReconnect: true
}

db = mongoose.connection
db.on "error", console.error.bind console, "Connection error: "
db.on "open", -> log "Connected to DB"

module.exports = db