Messaging = require "../modules/Messaging"

module.exports = (app) ->
	app.post "/sendmessage", module.exports.sendMessage
	return

module.exports.sendMessage = (req, res, next) ->
	msg = req.body
	Messaging.sendMessage(msg, () ->
		res.send("Message sent!")
	)
