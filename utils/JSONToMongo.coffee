wrench = require "wrench"
mongoose = require "mongoose"
CategoryModel = require "../backend/models/Category"
CityModel = require "../backend/models/City"
colors = require "colors"

module.exports = () ->
	### Put categories in ###
	resourcesURI = "./backend/resources/"
	categoriesURI = "#{resourcesURI}categories/"
	CategoryModel
	.find()
	.remove()
	.exec () ->
		data = wrench.readdirSyncRecursive(categoriesURI)
		.filter (file) ->
			return file.lastIndexOf(".json") isnt -1 
		.map (util) ->
			jsonData = require(".#{categoriesURI}#{util}")
			return jsonData

		CategoryModel.create(data)

	CityModel
	.find()
	.remove()
	.exec () ->
		jsonCities = require(".#{resourcesURI}cities.json")
		for city in jsonCities
			try
				(new CityModel(city)).save()
			catch e
				console.error(e.message.red)