passport = require "../../config/Passport"

module.exports = (app) ->
	app.post('/login', (req, res, next) ->
		if req.body.rememberme?
			req.session.cookie.maxAge = 30*24*60*60*1000
		else
			req.session.cookie.expires = false

		passport.authenticate("local",
			(err, user, info) ->
				if err
					return next(err)
				if not user
					req.session.messages = [info.message]
					return res.send(JSON.stringify(info))
				req.logIn(user, (err) ->
					if err
						return next(err)
					return res.send(JSON.stringify(info))
				)
		)(req, res, next)
	)

	app.post('/register-craftsman
		', (req, res, next) ->
		body = req.body
		user = new UserModel(
			username: body.username
			firstName: body.firstname
			lastName: body.familyname
			email: body.email
			password: body.password
			authLevel: passport.AUTH_LEVEL.CRAFTSMAN
		)
		
		user.save (err) ->
			if err?
				res
				.status(422)
				.send("Registering failed")
			else
				res
				.status(200)
				.send("Successfuly registered")
	)
