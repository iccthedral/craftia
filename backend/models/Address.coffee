mongoose = require "mongoose"
CityModel = require "./City"

schema = mongoose.Schema
	city:
		type: mongoose.Schema.Types.ObjectId
		ref: "City"

	addressLine1:
		type: String
		required: true

	addressLine2:
		type: String
		default: ""

schema.methods.newAddress = (address) ->
	CityModel
	.findOne(zip: address.zip)
	.exec (err, city) =>
		throw new Error(err) if err?
		@city = city._id
		@addressLine1 = address.line1
		@addressLine2 = address.line2
		@save()

module.exports = mongoose.model("Address", schema)

