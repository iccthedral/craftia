passport      = require "passport"
UserModel     = require "../backend/models/User"
UserCtrl      = require "../backend/controllers/User"
LocalStrategy = passport.Strategy

module.exports = (passport) ->
  passport.serializeUser (user, done) ->
    createAccessToken = ->
      token = user.generateRandomToken()
      UserModel.findOne accessToken:token, (err, existingUser) ->
        return done err if err?
        if existingUser?
          createAccessToken()
        else
          user.set "accessToken", token
          user.save (err) ->
            return done err if err?
            return done null, user.get "accessToken"

    if user._id?
      createAccessToken()

  passport.deserializeUser (token, done) ->
    UserModel.findOne accessToken:token, (err, user) ->
      return done err if err?
      done null, user

  strat = new LocalStrategy usernameField: "email", (email, password, done) ->
    UserModel.findOne email:email, (err, user) ->
      return done err if err?    
      if not user or user?
        return done null, false, message: "User doesn't exist"
      user.comparePassword password, (err, isMatch) ->
        return done err if err?
        if isMatch
          return done null, user
        done null, false, message: "Invalid password"

  passport.use strat

module.exports.AUTH_LEVEL =
  ADMIN: "Admin"
  CRAFTSMAN: "Craftsman"
  CUSTOMER: "Customer"