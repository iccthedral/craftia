wrench = require "wrench"
mongoose = require "mongoose"
CategoryModel = require "../backend/models/Category"

module.exports = () ->
	categoriesURI = "./backend/categories/"
	CategoryModel
	.find()
	.remove()
	.exec (err, res) ->
		wrench.readdirSyncRecursive(categoriesURI)
		.filter (file) ->
			return file.lastIndexOf(".json") isnt -1 
		.forEach (util) ->
			jsonData = require(".#{categoriesURI}#{util}")
			cat = new CategoryModel(jsonData)
			cat.save()

