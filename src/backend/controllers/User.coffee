mongoose        		= require "mongoose"
passport        		= require "passport"
colors          		= require "colors"
util            		= require "util"
crypto							= require "crypto"
async           		= require "async"
fs              		= require "fs"
_ 									= require "underscore"
nodemailer					= require "nodemailer"

AuthLevels 					= require "../config/AuthLevels"
UserModel       		= require "../models/User"
CityModel       		= require "../models/City"
JobModel        		= require "../models/Job"
CategoryModel   		= require "../models/Category"
MessageModel 				= require "../models/Message"
NotificationsModel	= require "../models/Notification"
JobCtrl 						= require "../controllers/Job"

IMG_FOLDER = "#{process.cwd()}/www/img/"

module.exports.setup = (app) ->
	# logout user
	app.get "/logout", logOutHandler

	app.get "/user/getMyJobs/:page/:jobStatus", getMyJobsHandler

	app.get "/user/:page/getBiddedJobs/:jobStatus", getBiddedJobsHandler

	app.get "/user/craftsmen/:page", listCraftsmenHandler

	app.get "/user/getNotifications/:page" , notificationsHandler

	# is current session holder authenticated?
	app.get "/isAuthenticated", isUserAuthenticated

	# login user
	app.post "/login", logInHandler

	# update user details
	app.post "/user/update", updateProfileHandler

	# uploads profile picture
	app.post "/user/uploadpicture", uploadProfilePicHandler
	
	app.post "/user/registerCraftsman", registerCrafsmanHandler
	app.post "/user/registerCustomer", registerCustomerHandler
	app.post "/user/forgot", forgotPasswordHandler
	app.post "/user/reset", passwordUpdateHandler
	app.get "/user/activate/:token", activateAccountHandler
	app.get "/reset/:token", passwordResetHandler

module.exports.passwordUpdateHandler = passwordUpdateHandler = (req, res, next) ->
	async.waterfall [
		(done) ->
			UserModel.findOne {
				passwordResetToken: req.body.token
				passwordResetExpiry: $gt : Date.now()
			}, (err, user) ->
				console.error "STIGAO"
				console.error req.body.password
				user.password = req.body.password
				user.passwordResetToken = null
				user.passwordResetExpiry = null
				user.save (err) ->
					req.logIn user, (err) ->
						done err, user
		(user, done) ->
			smtpTransport = nodemailer.createTransport "SMTP", {
				service: "GMAIL",
				auth: {
					user: "aleksandar.milic@yquince.com",
					pass: "zaboravnisale"
				}
			}
			mailOptions = {
				to: user.email
				from: "mail-delivery@craftia.com"
				subject: "Your password has been changed"
				text: "Hello,\n\n" +
					"This is a confirmation that the password for your account #{user.email} has just been changed.\n"
			}
			smtpTransport.sendMail mailOptions, (err) ->
				if not err?
					return res.send "Success! Your password has been changed."
				done err
	], (err) ->
		return next err if err?
		res.redirect "/"

module.exports.activateAccountHandler = activateAccountHandler = (req, res, next) ->
	UserModel.findOne {
		activationToken: req.params.token
	}, (err, user) ->
		return next err if err?
		console.error user
		return res.status(422).send "Activation token is invalid or it has expired." if not user?
		user.isActive = true
		user.activationToken = null
		smtpTransport = nodemailer.createTransport "SMTP", {
			service: "GMAIL",
			auth: {
				user: "aleksandar.milic@yquince.com",
				pass: "zaboravnisale"
			}
		}
		mailOptions = {
			to: user.email
			from: "mail-delivery@craftia.com"
			subject: "Your Craftia account is activated!"
			text: "Hello, #{user.name}\n\n" +
				"This is a confirmation that your Craftia account assigned with #{user.email} has just been activated.\n"
		}
		smtpTransport.sendMail mailOptions, (err) ->
			return next err if err?
			user.save (err) ->
				return next err if err?
				req.logIn user, (err) ->
					return next err if err?
					res.redirect "/#/activated"

module.exports.passwordResetHandler = passwordResetHandler = (req, res, next) ->
	UserModel.findOne {
		passwordResetToken: req.params.token
		passwordResetExpiry: $gt : Date.now()
	}, (err, user) ->
		return next err if err?
		return res.status(422).send "Password reset token is invalid or has expired." if not user?
		res.redirect "/#/anon/reset/#{req.params.token}"

module.exports.forgotPasswordHandler = forgotPasswordHandler = (req, res, next) ->
	async.waterfall [
		(done) ->
			crypto.randomBytes 20, (err, buff) ->
				done err, buff.toString "hex"
		(token, done) ->
			UserModel.findOne email:req.body.email, (err, user) ->
				if not user?
					return res.status(422).send "An account with that email address does not exist."
				user.passwordResetToken = token
				user.passwordResetExpiry = Date.now() + 3600000
				user.save (err) ->
					done err, token, user
		(token, user, done) ->
			smtpTransport = nodemailer.createTransport "SMTP", {
				service: "GMAIL",
				auth: {
					user: "aleksandar.milic@yquince.com",
					pass: "zaboravnisale"
				}
			}
			mailOptions = {
				to: user.email
				from: "mail-delivery@craftia.com"
				subject: "Craftia - Password Reset"
				text: "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
					"Please click on the following link, or paste this into your browser to complete the process:\n\n" +
					"http://#{req.headers.host}/reset/#{token}\n\n" +
					"If you did not request this, please ignore this email and your password will remain unchanged.\n"
			}
			smtpTransport.sendMail mailOptions, (err) ->
				if not err?
					return res.send "An e-mail has been sent to #{user.email} with further instructions."
				done err
	], (err) ->
		return next err if err?

module.exports.saveUser = saveUser = (user, res, picture) ->
	saveMe = ->
		user.save (err, user) ->
			return res.status(422).send "Registering failed!" if err?
			fs.mkdir "#{IMG_FOLDER}#{user._id}", (err) ->
				return res.status(422).send "Registering failed!" if err?
				res.send {
					user: user
					msg: """
						Registering succeeded!
						Check your email for an activation link!
					"""
				}
	if picture? and picture[0]?.src?
		picture = picture[0].src.split(";base64,")[1]
		fs.writeFile "#{IMG_FOLDER}pic#{user._id}", picture, {encoding: "base64"}, (err) ->
			user.profilePic = "/www/img/#{user._id}"
			saveMe()
	else
		saveMe()
		
module.exports.notificationsHandler = notificationsHandler = (req, res) ->
	page = req.params.page or 0
	user = req.user
	perPage = 5
	out = {}
	queryParams = 
		to : user
	
	NotificationsModel
		.find queryParams
		.limit perPage
		.skip perPage * page
		.exec (err, notifications) ->
			out.notifications = notifications
			NotificationsModel.count queryParams, (err, cnt) ->
				return res.status(422).send err if err?
				out.totalNotifications = cnt
				res.send out

module.exports.getMyJobsHandler = getMyJobsHandler = (req, res) ->
	page = req.params.page or 0
	user = req.user
	jobStatus = req.params.jobStatus or "all"
	perPage = 5
	
	queryParams = 
		status: jobStatus
		author: mongoose.Types.ObjectId user._id

	if jobStatus is "all"
		delete queryParams.status
	
	JobModel
	.find queryParams
	.populate {
		path: "bidders"
		select: "-password"
		model: "User"
	}
	.limit perPage
	.skip perPage * page
	.exec (err, jobs) ->
		# console.error(jobs.length);
		return res.status(422).send err if err?
		out = {}
		out.jobs = jobs
		JobModel.count queryParams, (err, cnt) ->
			return res.status(422).send err if err?
			out.totalJobs = cnt
			res.send out

module.exports.getBiddedJobsHandler = getBiddedJobsHandler = (req, res) ->
	page = req.params.page or 0
	user = req.user
	jobStatus = req.params.jobStatus or "all"
	perPage = 5
	
	queryParams = 
		status: jobStatus

	if jobStatus is "all"
		delete queryParams.status
	
	JobModel
	.find queryParams
	.where("bidders").equals(user._id)
	.populate {
		path: "bidders"
		select: "-password"
		model: "User"
	}
	.limit perPage
	.skip perPage * page
	.exec (err, jobs) ->
		return res.send err if err?
		out = {}
		out.jobs = jobs
		JobModel.count queryParams, (err, cnt) ->
			return res.send err if err?
			out.totalJobs = cnt
			res.send out

module.exports.listCraftsmenHandler = listCraftsmenHandler = (req, res) ->
	page = req.params.page or 0
	perPage = 5
	UserModel
	.find type: AuthLevels.CRAFTSMAN
	.select "-password"
	.limit perPage
	.skip perPage * page
	.exec (err, craftsmen) ->
		return res.status(422).send err if err?
		out = {}
		out.craftsmen = craftsmen
		UserModel.count type: AuthLevels.CRAFTSMAN, (err, cnt) ->
			return res.status(422).send err if err?
			out.totalCraftsmen = cnt
			res.send out

module.exports.registerCrafsmanHandler = registerCrafsmanHandler = (req, res, next) ->
	data        = req.body
	data.type   = AuthLevels.CRAFTSMAN
	picture 		= data.picture

	user        = new UserModel(data)

	resolveCity = (clb) -> clb()
	if data.address?.city?
		resolveCity = JobCtrl.findCity(data.address.city)

	resolveCity (err, city) ->
		return next err if err?
		data.address.zip = city.zip
		saveUser(user, res, picture)

module.exports.registerCustomerHandler = registerCustomerHandler = (req, res) ->
	data        = req.body
	data.type   = AuthLevels.CUSTOMER
	user        = new UserModel(data)
	picture			= data.picture

	resolveCity = (clb) -> clb()
	if data.address?.city?
		resolveCity = JobCtrl.findCity(data.address.city)

	resolveCity (err, city) ->
		return next err if err?
		data.address.zip = city.zip
		saveUser(user, res, picture)

module.exports.getOwnFinishedJobs = getOwnFinishedJobs = (user, clb) ->
	
module.exports.getBiddedJobs = getBiddedJobs = (usr, clb) ->
	JobModel.find().elemMatch("bidders", _id:usr._id).exec (err, jobs) ->
		clb err, jobs

module.exports.getCreatedJobs = getCreatedJobs = (usr, clb) ->
	JobModel.find "author":usr, (err, jobs) ->
		clb err, jobs

module.exports.getSentMessages = getSentMessages = (usr, clb) ->
	MessageModel.find "author":usr, (err, messages) ->
		clb err, messages

module.exports.getReceivedMessages = getReceivedMessages = (usr, clb) ->
	MessageModel.find "to":usr, (err, messages) ->
		clb err, messages

module.exports.getNotifications = getNotifications = (usr, clb) ->
	NotificationsModel.find "to":usr, (err, notifications) ->
		clb err, notifications

module.exports.populateUser = populateUser = (usr, clb) ->
	out = {}
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
						user = usr.toObject()
						user = _.extend user, out
						clb err, user

module.exports.isUserAuthenticated = isUserAuthenticated = (req, res, next) ->
	user = req.user
	return res.send(403) if not user?
	populateUser user, (err, user) ->
		return next err if err?
		res.send user

logOutHandler = (req, res) ->
	req.logout()
	res.redirect 200, "/"
 
logInHandler = (req, res, next) ->
	if req.body.rememberme
		req.session.cookie.maxAge = 30*24*60*60*1000
	else
		req.session.cookie.expires = false
	pass = passport.authenticate "local", (err, user, info) ->
		return next err if err?
		return res.status(401).send info.message if not user
		req.logIn user, (err) ->
			populateUser user, (err, user) ->
				return next err if err?
				res.send user
	pass req, res, next

updateProfileHandler = (req, res) ->
	usr = req.user
	#console.log usr
	return res.status(422).send "You're not logged in" if not usr?
	data = req.body
	delete data._id
	UserModel
	.findByIdAndUpdate(usr._id, data)
	.exec (err, cnt) ->
		return res.status(422).send(err.message) if err?
		res.send 200

uploadProfilePicHandler = (req, res) ->
	usr = req.user
	return res.status(422).send "You're not logged in" if not usr?
	UserModel
	.findById req.user._id
	.exec (err, user) ->
		#console.log req.files
		file = req.files.file
		fs.readFile file.path, (err, data) ->
			imguri  = "img/#{usr._id}"
			newPath = "www/#{imguri}"
			fs.writeFile newPath, data, (err) =>
				return res.send(422) if err?
				user.profilePic = imguri
				user.save()
				res.send imguri