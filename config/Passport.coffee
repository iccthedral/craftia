
LocalStrategy = require("passport-local").Strategy
UserModel = require "../backend/models/User"

module.exports = (passport) ->
	passport.serializeUser (user, done) ->
		createAccessToken = () ->
			token = user.generateRandomToken()
			UserModel.findOne("accessToken" : token, (err, existingUser) ->
				if err?
					return done(err)
				if existingUser?
					createAccessToken()
				else
					user.set("accessToken", token)
					user.save (err) ->
						if err?
							return done(err)
						return done(null, user.get("accessToken"))
			)

		if user._id?
			createAccessToken()

	passport.deserializeUser (token, done) ->
		UserModel.findOne("accessToken": token, (err, user) ->
			done(err, user)
		)

	strat = new LocalStrategy(
		(username, password, done) ->
			UserModel.findOne "username": username, (err, user) ->
				return done(err) if err?		
				if not user
					return done(null, false, message: "User doesn't exist")
				user.comparePassword(password, (err, isMatch) ->
					if err?
						return done(err)
					if isMatch
						return done(null, user)
					else
						return done(null, false, message: "Invalid password")
				)
	)
	
	passport.use(strat)
