// Generated by CoffeeScript 1.7.1
(function() {
  var Local, Passport, UserCtrl, UserModel, strat;

  Passport = require("passport");

  Local = require("passport-local");

  UserModel = require("../models/User");

  UserCtrl = require("../controllers/User");

  Passport.serializeUser(function(user, done) {
    var createAccessToken;
    createAccessToken = function() {
      var token;
      token = user.generateRandomToken();
      return UserModel.findOne({
        accessToken: token
      }, function(err, existingUser) {
        if (err != null) {
          return done(err);
        }
        if (existingUser != null) {
          return createAccessToken();
        } else {
          user.set("accessToken", token);
          return user.save(function(err) {
            if (err != null) {
              return done(err);
            }
            return done(null, user.get("accessToken"));
          });
        }
      });
    };
    if (user._id != null) {
      return createAccessToken();
    }
  });

  Passport.deserializeUser(function(token, done) {
    return UserModel.findOne({
      accessToken: token
    }, function(err, user) {
      if (err != null) {
        return done(err);
      }
      return done(null, user);
    });
  });

  strat = new Local.Strategy({
    usernameField: "email"
  }, function(email, password, done) {
    return UserModel.findOne({
      email: email
    }, function(err, user) {
      if (err != null) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: "User doesn't exist"
        });
      }
      return user.comparePassword(password, function(err, isMatch) {
        if (err != null) {
          return done(err);
        }
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, {
          message: "Invalid password"
        });
      });
    });
  });

  Passport.use(strat);

  module.exports = Passport;

}).call(this);
