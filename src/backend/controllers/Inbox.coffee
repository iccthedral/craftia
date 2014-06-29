Messaging = require "../modules/Messaging"
MessageModel = require "../models/Message"

module.exports.setup = (app) ->
	app.post "/inbox/sendMessage", sendMessage
	app.get "/inbox/received/:page", getReceivedMessages
	app.get "/inbox/sent/:page", getSentMessages
	return

getReceivedMessages = (req, res, next) ->
	user = req.user

	return res.send(403) if not user?
	
	perPage = 5
  
	page = req.params.page
	page or= 0
	
	MessageModel
	.find to:user
	.populate {
		path: "to"
		select: "-password"
		model: "User"
	}
	.limit perPage
	.skip perPage * page
	.exec (err, messages) ->
		return res.status(422).send err if err?
		res.send messages

getSentMessages = (req, res, next) ->
	user = req.user

	return res.send(403) if not user?
	
	perPage = 5
  
	page = req.params.page
	page or= 0

	MessageModel
	.find author:user
	.populate {
		path: "to"
		select: "-password"
		model: "User"
	}
	.limit perPage
	.skip perPage * page
	.exec (err, messages) ->
		return res.status(422).send err if err?
		res.send messages

sendMessage = (req, res, next) ->
	msg = req.body
	Messaging.sendMessage msg, ->
		res.send "Message sent!"