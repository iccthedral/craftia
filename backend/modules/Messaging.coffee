mongoose = require "mongoose"
UserModel = require "../models/User"
Message = require "../models/Message"
JobModel = require "../models/Job"
async = require "async"

module.exports.sendMessage = (message, callback) ->

	UserModel
	.find(username:$in:[message.sender, message.receiver])
	.exec (err, results) ->
		out = {}
		
		results.forEach (res) ->
			out[res.username] = res

		sender 		= out[message.sender]
		receiver 	= out[message.receiver]

		msg = new Message({
			author: {
				username: sender.username
				id: sender._id
			}
			data: message.data
			subject: message.subject
			message: message.body
			type: message.type
			dateSent: Date.now()
			isRead: false
		})

		msg.save (err, msg) =>
			receiver.inbox.received.push(msg)
			sender.inbox.sent.push(msg)
			async.series([
				receiver.save.bind(receiver),
				sender.save.bind(sender)
			], callback)
	return

module.exports.sendJobMessage = () ->
	return

