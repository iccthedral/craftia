mongoose 				= require "mongoose"
CityModel 			= require "./City"
CategoryModel 	= require "./Category"
async 					= require "async"
fs 							= require "fs"
AuthLevels			= require "../config/AuthLevels"
crypto 					= require "crypto"
IMG_FOLDER = "#{process.cwd()}/www/img/"

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
		city:
			zip: 
				type: String
			name: 
				type: String

		line1: String
		line2: String
		lng: Number
		lat: Number

	category:
		type: String

	subcategory:
		type: String

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
		
	isRated:
		type: Boolean
		default: false
	
	rate:
		comment:
			type: String
			default: ""
		mark:
			type: Number
			default: 0
			max: 5

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

schema.pre "save", true, (next, done) ->
	next()
	cityName = @address.city.name
	CityModel
	.findOne name:cityName
	.exec (err, city) =>
		done new Error "Invalid city #{cityName}" if not city?
		@address.city = city
		done()

schema.pre "save", true, (next, done) ->
	next()
	CategoryModel
	.findOne category: @category
	.exec (err, cat) =>
		if not cat?
			done new Error "No such category #{@category}"
		exists = @subcategory in cat?.subcategories
		if not exists or err?
			done new Error "No subcategory #{@subcategory} in category #{@category}"
		done()

schema.pre "save", true, (next, done) ->
	next()
	savePhoto = (photo, clb) =>
		base64img = photo.src
		base64img = base64img.split(";base64,")[1]
		randPath = crypto.randomBytes(20).toString "hex"
		console.error "DONDE ESTA SANTA CLAUS?"
		console.error @author
		path = "#{@author}/#{randPath}"
		photo.src = path
		fs.writeFile "#{IMG_FOLDER}#{path}", base64img, {encoding: "base64"}, (err) ->
			clb err, photo

	@jobPhotos or= []

	photos = @jobPhotos.filter (photo) -> return photo if photo?.src?
	async.mapSeries photos, savePhoto, (err, photos) =>
		@jobPhotos = photos
		done()

JobModel = mongoose.model("Job", schema)
module.exports = JobModel