mongoose 		= require "mongoose"
CityModel 		= require "./City"
CategoryModel 	= require "./Category"

schema = mongoose.Schema
	title:
		type: String
		required: true
		
	description:
		type: String
		required: true
		default: ""

	materialProvider:
		type: String
		required: true
		enum: ["Customer", "Craftsman"]

	budget:
		type: Number
		required: true
		min: 0

	address: 
		city: String
		zip: String
		line1: String
		line2: String

	category:
		type: String
		required: true

	subcategory:
		type: String
		required: true

	dateFrom:
		type: Date
		required: true

	dateTo:
		type: Date
		required: true

	status:
		type: String
		default: "open"
		enum: ["open", "closed", "finished"]

	author:
		type: mongoose.Schema.Types.ObjectId
		ref: "User"
		
	rated:
		type: Boolean
		default: false
	
	winner:
		type: mongoose.Schema.Types.ObjectId
		ref: "User"

	bidders: [
		type: mongoose.Schema.Types.ObjectId
		ref: "User"
	]
	
	jobPhotos:
		type: Array
		default: []
		required: true

JobModel = mongoose.model("Job", schema)
module.exports = JobModel