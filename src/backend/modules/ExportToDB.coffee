wrench = require "wrench"
colors = require "colors"

CategoryModel = require "../models/Category"
CityModel = require "../models/City"
DB = require "../config/Database"

RESOURCES = "../resources/"
CITIES = require "#{RESOURCES}cities.json"
CATEGORIES = "#{RESOURCES}categories/"

module.exports = (clb) ->
	CategoryModel
	.find()
	.exec (err, res) ->
		return if res.length > 0
		data = wrench.readdirSyncRecursive(CATEGORIES)
		.filter (file) ->
			return file.lastIndexOf(".json") isnt -1 
		.map (util) ->
			jsonData = require(".#{CATEGORIES}#{util}")
			return jsonData
		
		# create categories
		CategoryModel
		.create data, (err, res1) ->
			console.log "Added", arguments.length - 1, "categories"
			# populate cities
			CityModel.create CITIES, (err, res2) ->
				console.log "Added", arguments.length - 1, "cities"
				clb?(err)