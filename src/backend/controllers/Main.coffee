async       = require "async"
UserModel   = require "../models/User"
AuthLevel   = require "../config/AuthLevels"
JobCtrl    	= require "./Job" 

module.exports.setup = (app) ->
	app.get "/", module.exports.showIndexPage

module.exports.showIndexPage = (req, res) ->
	res.render "main", user: req.user