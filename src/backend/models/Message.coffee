mongoose = require "mongoose"

schema = mongoose.Schema

	message:
		type: String
		required: true
	
	subject:
		type: String

	to:
		type: mongoose.Schema.Types.ObjectId
		ref: "User"
		
	author:
		type: mongoose.Schema.Types.ObjectId
		ref: "User"
		
	dateSent:
		type: Date
	
	data:
		type: Object
	
	isRead:
		type: Boolean
		default: false

module.exports = mongoose.model("Message", schema)