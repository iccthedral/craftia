async       = require "async"
UserModel   = require "../models/User"
AuthLevel   = require "../config/AuthLevels"
JobCtrl    	= require "./Job" 

findCity 		= JobCtrl.findCity

module.exports.setup = (app) ->
	app.get "/", module.exports.showIndexPage
	app.get "/listcraftsmen", module.exports.listAllCraftsmen
	app.post "/register-craftsman", module.exports.registerCrafsman
	app.post "/register-customer", module.exports.registerCustomer 

module.exports.saveUser = (user, res) ->
	user.save (err) ->
		return res.status(422).send "Registering failed!" if err?
		res.status(200).send user: user, msg: "Registering succeeded!"

module.exports.showIndexPage = (req, res) ->
	res.render "main", user: req.user

module.exports.listAllCraftsmen = (req, res) ->
	UserModel
	.find(type: AuthLevel.CRAFTSMAN)
	.exec (err, out) ->
		return res.send(422, err.message) if err?
		res.send(out)

module.exports.registerCrafsman = (req, res) ->
	data        = req.body
	data.type   = AuthLevel.CRAFTSMAN
	user        = new UserModel(data)
	
	resolveCity = (clb) -> clb()
	if data.address?.city?
		resolveCity = findCity(data.address.city)

	resolveCity((err, city) ->
		data.address.zip = city.zip
		module.exports.saveUser(user, res)
	)

module.exports.registerCustomer = (req, res) ->
	data        = req.body
	data.type   = AuthLevel.CUSTOMER
	user        = new UserModel(data)

	resolveCity = (clb) -> clb()
	if data.address?.city?
		resolveCity = findCity(data.address.city)

	resolveCity((err, city) ->
		data.address.zip = city.zip
		module.exports.saveUser(user, res)
	)