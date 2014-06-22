(function() {
  var LocalStrategy, UserCtrl, UserModel;

  LocalStrategy = require("passport-local").Strategy;

  UserModel = require("../backend/models/User");

  UserCtrl = require("../backend/controllers/User");

  module.exports = function(passport) {
    var strat;
    passport.serializeUser(function(user, done) {
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
    passport.deserializeUser(function(token, done) {
      return UserModel.findOne({
        accessToken: token
      }, function(err, user) {
        if (err != null) {
          return done(err);
        }
        return done(null, user);
      });
    });
    strat = new LocalStrategy({
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
    return passport.use(strat);
  };

  module.exports.AUTH_LEVEL = {
    ADMIN: "Admin",
    CRAFTSMAN: "Craftsman",
    CUSTOMER: "Customer"
  };

}).call(this);
