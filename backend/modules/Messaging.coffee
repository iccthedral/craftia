mongoose = require "mongoose"
UserModel = require "../models/User"
Message = require "../models/Message"
Notification = require "../models/Notification"
JobModel = require "../models/Job"
async = require "async"

module.exports.sendNotification = (notif, clb) ->
	clb or= ->

	UserModel
	.findOne username:notif.receiver
	.exec (err, receiver) ->
		out = {}

		msg = new Notification {
			type: "system"
			message: notif.body
			dateSent: Date.now()
			isRead: false
		}

		msg.save (err, msg) =>
			receiver.notif.push msg
			receiver.save clb

module.exports.sendMessage = (message, clb) ->
	clb or= ->
	
	UserModel
	.find username:$in:[message.sender, message.receiver]
	.exec (err, results) ->
		out = {}
		
		results.forEach (res) ->
			out[res.username] = res
			
		sender 		= out[message.sender]
		receiver 	= out[message.receiver]

		msg = new Message {
			author:
				username: sender.username
				id: sender._id
			to: 
				username: receiver.username
				id: receiver._id
			data: message.data
			subject: message.subject
			message: message.body
			dateSent: Date.now()
			isRead: false
		}

		msg.save (err, msg) =>
			receiver.inbox.received.push msg
			sender.inbox.sent.push msg
			async.series [
				receiver.save.bind receiver,
				sender.save.bind sender
			], clb

module.exports.sendJobMessage = ->
	throw "Not implemented"