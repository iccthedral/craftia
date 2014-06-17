(function() {
  var AuthLevel, CategoryModel, CityModel, JobModel, UserModel, async, colors, fs, isUserAuthenticated, logMeIn, logMeOut, mongoose, passport, updateMe, uploadProfilePicture, util;

  mongoose = require("mongoose");

  passport = require("passport");

  colors = require("colors");

  util = require("util");

  async = require("async");

  fs = require("fs");

  AuthLevel = require("../../config/Passport").AUTH_LEVEL;

  UserModel = require("../models/User");

  CityModel = require("../models/City");

  JobModel = require("../models/Job");

  CategoryModel = require("../models/Category");

  module.exports = function(app) {
    app.get("/logout", logMeOut);
    app.post("/login", logMeIn);
    app.post("/user/update", updateMe);
    app.post("/user/uploadpicture", uploadProfilePicture);
    return app.get("/isAuthenticated", isUserAuthenticated);
  };

  isUserAuthenticated = function(req, res) {
    var user;
    user = req.user;
    if (user == null) {
      return res.send(403);
    }
    return UserModel.find({
      _id: user._id
    }).populate("createdJobs biddedJobs inbox.sent inbox.received").exec(function(err, result) {
      return res.send(result[0]);
    });
  };

  logMeOut = function(req, res) {
    req.logout();
    return res.redirect(200, "/");
  };

  logMeIn = function(req, res, next) {
    var pass;
    if (req.body.rememberme) {
      req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
    } else {
      req.session.cookie.expires = false;
    }
    pass = passport.authenticate("local", function(err, user, info) {
      if (err != null) {
        return next(err);
      }
      if (user == null) {
        return res.status(401).send(info.message);
      }
      return req.logIn(user, function(err) {
        if (err != null) {
          return next(err);
        }
        return UserModel.find({
          _id: user._id
        }).populate("createdJobs biddedJobs inbox.sent inbox.received").exec(function(err, result) {
          return res.send(result[0]);
        });
      });
    });
    return pass(req, res, next);
  };

  updateMe = function(req, res) {
    var data, usr;
    usr = req.user;
    console.log(usr);
    if (usr == null) {
      return res.status(422).send("You're not logged in");
    }
    data = req.body;
    delete data._id;
    return UserModel.findByIdAndUpdate(usr._id, data).exec(function(err, cnt) {
      console.log(err);
      if (err != null) {
        return res.status(422).send(err.message);
      }
      return res.send(200);
    });
  };

  uploadProfilePicture = function(req, res) {
    var usr;
    usr = req.user;
    if (usr == null) {
      return res.status(422).send("You're not logged in");
    }
    return UserModel.findById(req.user._id).exec(function(err, user) {
      var file;
      console.log(req.files);
      file = req.files.file;
      return fs.readFile(file.path, function(err, data) {
        var imguri, newPath;
        imguri = "img/" + usr.username + ".png";
        newPath = "www/" + imguri;
        return fs.writeFile(newPath, data, (function(_this) {
          return function(err) {
            if (err != null) {
              return res.send(422);
            }
            user.profilePic = imguri;
            user.save();
            return res.send(imguri);
          };
        })(this));
      });
    });
  };

}).call(this);
