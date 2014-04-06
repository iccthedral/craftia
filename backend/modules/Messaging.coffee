mongoose = require "mongoose"
UserModel = require "../models/User"
Message = require "../models/Message"
JobModel = require "../models/Job"
async = require "async"

module.exports.sendMessage = (message, callback) ->
	UserModel
	.find(username:$in:[message.author, message.receiver])
	.exec (err, results) ->
		sender = results[0]
		receiver = results[1]
		msg = new Message({
			author: {
				username: sender.username
				id: sender.id
			}
			subject: message.subject
			message: message.message
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

