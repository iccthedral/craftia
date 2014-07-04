async       = require "async"
UserModel   = require "../models/User"
AuthLevel   = require "../config/AuthLevels"
JobCtrl    	= require "./Job" 

isProduction = process.env.NODE_ENV is "production"

module.exports.setup = (app) ->
	app.get "/", module.exports.showIndexPage

module.exports.showIndexPage = (req, res) ->
	res.render "main", {user: req.user, production: isProduction}