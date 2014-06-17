Messaging = require "../modules/Messaging"

module.exports = (app) ->
	app.post "/sendmessage", sendMessage
	return

sendMessage = (req, res, next) ->
	msg = req.body
	Messaging.sendMessage msg, ->
		res.send "Message sent!"
