(function() {
  var AuthLevel, UserModel, mongoose, passport;

  passport = require("passport");

  AuthLevel = require("../../config/Passport").AUTH_LEVEL;

  mongoose = require("mongoose");

  UserModel = mongoose.model("User");

  module.exports = function(app) {
    var saveUser;
    app.get("/logout", function(req, res, next) {
      req.logout();
      return res.redirect(200, "/");
    });
    app.post('/login', function(req, res, next) {
      console.dir(req.body);
      if (req.body.rememberme) {
        req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
      } else {
        req.session.cookie.expires = false;
      }
      return passport.authenticate("local", function(err, user, info) {
        if (err) {
          return next(err);
        }
        if (!user) {
          req.session.messages = [info.message];
          return res.status(401).send(info.message);
        }
        return req.logIn(user, function(err) {
          if (err) {
            return next(err);
          }
          return res.send(user);
        });
      })(req, res, next);
    });
    app.post('/register-craftsman', function(req, res, next) {
      var data, user;
      data = req.body;
      data.type = AuthLevel.CRAFTSMAN;
      user = new UserModel(data);
      return saveUser(user, res);
    });
    app.post('/register-customer', function(req, res, next) {
      var data, user;
      data = req.body;
      data.type = AuthLevel.CUSTOMER;
      user = new UserModel(data);
      return saveUser(user, res);
    });
    return saveUser = function(user, res) {
      return user.save(function(err) {
        console.log(err);
        if (err != null) {
          return res.status(422).send("Registering failed!");
        } else {
          return res.status(200).send({
            user: user,
            msg: "Registering succeeded!"
          });
        }
      });
    };
  };

}).call(this);
