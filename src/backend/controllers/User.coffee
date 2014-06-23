mongoose        		= require "mongoose"
passport        		= require "passport"
colors          		= require "colors"
util            		= require "util"
async           		= require "async"
fs              		= require "fs"
_ 									= require "underscore"

UserModel       		= require "../models/User"
CityModel       		= require "../models/City"
JobModel        		= require "../models/Job"
CategoryModel   		= require "../models/Category"
MessageModel 				= require "../models/Message"
NotificationsModel	= require "../models/Notification"

module.exports.setup = (app) ->
	# logout user
	app.get "/logout", logMeOut

	# login user
	app.post "/login", logMeIn

	# update user details
	app.post "/user/update", updateMe

	# uploads profile picture
	app.post "/user/uploadpicture", uploadProfilePicture

	# Is current session holder authenticated?
	app.get "/isAuthenticated", isUserAuthenticated

module.exports.getBiddedJobs = getBiddedJobs = (usr, clb) ->
	JobModel.find().elemMatch("bidders", _id:usr._id).exec (err, jobs) ->
		clb err, jobs

module.exports.getCreatedJobs = getCreatedJobs = (usr, clb) ->
	JobModel.find "author._id":usr._id, (err, jobs) ->
		clb err, jobs

module.exports.getSentMessages = getSentMessages = (usr, clb) ->
	MessageModel.find "author._id":usr._id, (err, messages) ->
		clb err, messages

module.exports.getReceivedMessages = getReceivedMessages = (usr, clb) ->
	MessageModel.find "to._id":usr._id, (err, messages) ->
		clb err, messages

module.exports.getNotifications = getNotifications = (usr, clb) ->
	NotificationsModel.find "to._id":usr._id, (err, notifications) ->
		clb err, notifications

module.exports.populateUser = populateUser = (usr, clb) ->
	out = new Object

	getBiddedJobs usr, (err, jobs) ->
		return clb err if err?
		out.biddedJobs = jobs
		getCreatedJobs usr, (err, jobs) ->
			return clb err if err?
			out.createdJobs = jobs
			out.inbox = {}
			getSentMessages usr, (err, sentMessagess) ->
				return clb err if err?
				out.inbox.sent = sentMessagess
				getReceivedMessages usr, (err, recvMessages) ->
					return clb err if err?
					out.inbox.received = recvMessages
					getNotifications usr, (err, notifications) ->
						return clb err if err?
						out.notifications = notifications
						clb err, out

module.exports.isUserAuthenticated = isUserAuthenticated = (req, res, next) ->
	user = req.user
	return res.send(403) if not user?
	populateUser user, (err, out) ->
		return next err if err?
		user = user.toObject()
		res.send _.extend user, out

logMeOut = (req, res) ->
	req.logout()
	res.redirect 200, "/"

logMeIn = (req, res, next) ->
	if req.body.rememberme
		req.session.cookie.maxAge = 30*24*60*60*1000
	else
		req.session.cookie.expires = false
	pass = passport.authenticate "local", (err, user, info) ->
		return next err if err?
		return res.status(401).send info.message if not user?
		req.logIn user, (err) ->
			populateUser user, (err, out) ->
				return next err if err?
				user = user.toObject()
				user = _.extend user, out
				res.send user
	pass req, res, next

updateMe = (req, res) ->
	usr = req.user
	console.log usr
	return res.status(422).send "You're not logged in" if not usr?
	data = req.body
	delete data._id
	UserModel
	.findByIdAndUpdate(usr._id, data)
	.exec (err, cnt) ->
		return res.status(422).send(err.message) if err?
		res.send(200)

uploadProfilePicture = (req, res) ->
	usr = req.user
	return res.status(422).send "You're not logged in" if not usr?
	UserModel
	.findById(req.user._id)
	.exec (err, user) ->
		console.log req.files
		file = req.files.file
		fs.readFile file.path, (err, data) ->
			imguri  = "img/#{usr.username}.png"
			newPath = "www/#{imguri}"
			fs.writeFile newPath, data, (err) =>
				return res.send(422) if err?
				user.profilePic = imguri
				user.save()
				res.send imguri