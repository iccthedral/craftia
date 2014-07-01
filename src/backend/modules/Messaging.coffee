mongoose = require "mongoose"
UserModel = require "../models/User"
Message = require "../models/Message"
Notification = require "../models/Notification"
JobModel = require "../models/Job"
async = require "async"

module.exports.sendNotification = (notif, clb = ->) ->
	UserModel
	.findById notif.receiver
	.exec (err, receiver) ->
		return clb? err if err?
		msg = new Notification {
			type: "system"
			message: notif.body
			dateSent: Date.now()
			isRead: false
			to: receiver
		}
		msg.save clb
			
module.exports.sendMessage = (message, clb = ->) ->
	UserModel
	.find username:$in:[message.sender, message.receiver]
	.exec (err, results) ->
		return clb? err if err?
		out = {}
		
		results.forEach (res) ->
			out[res.username] = res
			
		sender 		= out[message.sender]
		receiver 	= out[message.receiver]

		msg = new Message {
			author: sender
			to: receiver
			data: message.data
			subject: message.subject
			message: message.body
			dateSent: Date.now()
			isRead: false
		}
		
		msg.save clb

module.exports.sendJobMessage = ->
	throw "Not implemented"