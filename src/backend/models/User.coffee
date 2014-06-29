mongoose = require "mongoose"
bcrypt = require "bcrypt-nodejs"
JobModel = require "./Job"
MessageModel = require "./Message"
async = require "async"

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

	# createdJobs: [
	# 	type: mongoose.Schema.Types.ObjectId
	# 	ref: "Job"
	# 	default: []
	# ]

	# biddedJobs: [
	# 	type: mongoose.Schema.Types.ObjectId
	# 	ref: "Job"
	# 	default: []
	# ]
	
	rating:
		jobs: [
			job: 
				type: mongoose.Schema.Types.Mixed
				default: {}
			comment: 
				type: String
				default: ""
		]

		totalVotes: 
			type: Number
			default: 0
		
		avgRate: 
			type: Number
			default: 0
			min: 0
			max: 5

	# expertise: 
	# 	categories: [
	# 		category: 
	# 			type: String
	# 			subcategories: [
	# 				subcategory: 
	# 					type: String
	# 			]
	# 	]


	profilePic:
		type: String
		default: "img/default_user.jpg"
		
	# notif: [
	# 	type: mongoose.Schema.Types.ObjectId
	# 	ref: "Notification"
	# ]

	# inbox:
	# 	received: [
	# 		type: mongoose.Schema.Types.ObjectId
	# 		ref: "Message"
	# 	]
	
	# 	sent: [
	# 		type: mongoose.Schema.Types.ObjectId
	# 		ref: "Message"
	# 	]

schema.pre "save", (next) ->
	user = @
	if not user.isModified("password")
		return next()

	bcrypt.genSalt 10
		, (err, salt) ->
				return next err if err?
				bcrypt.hash user.password
					, salt
					, (-> return)
					, (err, hash) ->
						return next err if err?
						user.password = hash
						next()

schema.methods.comparePassword = (password, cb) ->
	bcrypt.compare(password, this.password, (err, isMatch) ->
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
			msg = new MessageModel(
				type: type
				msg: msg
				from: myself
			)
			receiver.inbox[type].push(msg)
			sender.inbox.sent.push(msg)

			async.series [
				receiver.save.bind receiver
				sender.save.bind sender
			], (err, res) ->
				callb(err, res)

# schema.methods.createNewJob = (job) ->
#   try
#       @createdJobs.push(JobModel.newJob(job))
#       @save()
#   catch e
#       throw new Error(e)

module.exports = UserModel

# cfixtures()
# login("cumoks")
# pickwinner("crgogs", "Job from cumoks")
# rate("Job from cumoks", 5, "Hi mark")
