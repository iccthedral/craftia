mongoose = require "mongoose"

schema = mongoose.Schema
	zip: 
		type: String
		required: true
	
	name: 
		type: String
		required: true

module.exports = mongoose.model("City", schema)