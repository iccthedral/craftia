mongoose = require "mongoose"
bcrypt = require "bcrypt-nodejs"
crypto = require "crypto"
JobModel = require "./Job"
MessageModel = require "./Message"
async = require "async"
nodemailer = require "nodemailer"

schema = mongoose.Schema
	username:
		type: String
		required: true
		unique: true
		
	email:
		type: String
		required: true
		unique: true
		
	password: 
		type: String
		required: true

	accessToken:
		type: String

	name:
		type: String
		required: true

	surname: 
		type: String
		required: true

	address: {
		zip: String
		city: String
		line1: String
		line2: String
	}
	
	type:
		type: String
		enum: ["Admin", "Craftsman", "Customer"]
		required: true

	telephone:
		type: String
		required: true

	rating:
		jobs: [
			job:
				type: mongoose.Schema.Types.ObjectId
				ref: "Job"
			comment:
				type: String
				default: ""
			mark:
				type: Number
				default: 0
				max: 5
		]

		totalVotes: 
			type: Number
			default: 0
		
		avgRate: 
			type: Number
			default: 0
			max: 5

	categories: [
		type: String
	]

	passwordResetExpiry: Date
	passwordResetToken: String

	activationToken: String
	isActive:
		type: Boolean
		default: false

	profilePic:
		type: String
		default: "img/default_user.jpg"

schema.pre "save", (next) ->
	user = @

	finish = ->
		if not user.isModified "password"
			return next()

		bcrypt.genSalt 10, (err, salt) ->
			return next err if err?
			bcrypt.hash user.password
				, salt
				, (-> return)
				, (err, hash) ->
					return next err if err?
					user.password = hash
					next()
	
	if user.isNew?
		if user.isNew
			console.error user.isNew , "blas"
			crypto.randomBytes 20, (err, buff) ->
				next throw err if err?
				user.activationToken = buff.toString "hex"
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
					subject: "Craftia - Activate your account"
					text: """
						Click on the following link http://localhost:3000/user/activate/#{user.activationToken} to activate your account.
					"""
				}
				smtpTransport.sendMail mailOptions, (err) ->
					next throw err if err?
					finish()
		else finish()

	

schema.methods.comparePassword = (password, cb) ->
	bcrypt.compare(password, @password, (err, isMatch) ->
		if err?
			return cb(err)
		cb(null, isMatch)
	)

schema.methods.generateRandomToken = ->
	user = @
	chars = "_!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
	token = new Date().getTime() + "_"
	for x in [0...16]
		i = Math.floor(Math.random() * 62)
		token += chars.charAt(i)
	return token

UserModel = mongoose.model("User", schema)

schema.statics.sendMessage = (type, msg, fromId, toId, callb) ->
	UserModel.findById(fromId)
	.exec (err, sender) ->
		UserModel.findById(toId)
		.exec (err, receiver) ->
			msg = new MessageModel {
				type: type
				msg: msg
				from: myself
			}
			receiver.inbox[type].push(msg)
			sender.inbox.sent.push(msg)
			async.series [
				receiver.save.bind receiver
				sender.save.bind sender
			], (err, res) ->
				callb(err, res)

module.exports = UserModel