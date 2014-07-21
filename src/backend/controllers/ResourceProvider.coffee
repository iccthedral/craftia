colors = require "colors"
CityModel = require "../models/City"
CategoryModel = require ("../models/Category")
util = require "util"

module.exports.setup = (app) ->
	app.get("/categories", (req, res, next) ->
		CategoryModel
		.find()
		.exec (err, result) ->
			if err?
				res.status(422).send(err.message)
			out = []
			for cat in result
				out.push({id: cat._id, name: cat.category})
			res.send(out)
	)

	app.get("/cities/:id", (req, res, next) ->
		id = req.params.id

		if /\d+/.test(id)
			findCriteria = { zip: new RegExp('.*'+id+'.*', 'ig') }
		else
			findCriteria = { name: new RegExp('.*'+id+'.*', 'ig') }
		
		# console.dir findCriteria

		CityModel
		.find(findCriteria)
		.exec (err, result) ->
			if err?
				res.status(422).send(err.message)
			res.send(result)
	)

	app.get("/category/:cat", (req, res, next) ->
		cat = req.params.cat
		CategoryModel
		.findOne(_id: cat)
		.exec (err, rescat) ->
			if err?
				res.status(422).send(err.message)
			subcats = rescat.subcategories.map (name) ->
				return name : name
			res.send(subcats)
	)