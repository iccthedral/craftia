(function() {
  var AuthLevel, CategoryModel, CityModel, JobModel, MessageModel, NotificationsModel, UserModel, async, colors, fs, getBiddedJobs, getCreatedJobs, getNotifications, getReceivedMessages, getSentMessages, isUserAuthenticated, logMeIn, logMeOut, mongoose, passport, populateUser, updateMe, uploadProfilePicture, util;

  mongoose = require("mongoose");

  passport = require("passport");

  colors = require("colors");

  util = require("util");

  async = require("async");

  fs = require("fs");

  UserModel = require("../models/User");

  CityModel = require("../models/City");

  JobModel = require("../models/Job");

  CategoryModel = require("../models/Category");

  MessageModel = require("../models/Message");

  NotificationsModel = require("../models/Notification");

  AuthLevel = require("../../config/Passport").AUTH_LEVEL;

  module.exports.setup = function(app) {
    app.get("/logout", logMeOut);
    app.post("/login", logMeIn);
    app.post("/user/update", updateMe);
    app.post("/user/uploadpicture", uploadProfilePicture);
    return app.get("/isAuthenticated", isUserAuthenticated);
  };

  getBiddedJobs = function(usr, clb) {
    return JobModel.find({
      "bidders.id": usr.id
    }, function(err, jobs) {
      return clb(err, jobs);
    });
  };

  getCreatedJobs = function(usr, clb) {
    return JobModel.find({
      "author.id": usr.id
    }, function(err, jobs) {
      return clb(err, jobs);
    });
  };

  getSentMessages = function(usr, clb) {
    return MessageModel.find({
      "author.id": usr.id
    }, function(err, messages) {
      return clb(err, messages);
    });
  };

  getReceivedMessages = function(usr, clb) {
    return MessageModel.find({
      "to.id": usr.id
    }, function(err, messages) {
      return clb(err, messages);
    });
  };

  getNotifications = function(usr, clb) {
    return NotificationsModel.find({}, function(err, notifications) {
      return clb(err, notifications);
    });
  };

  populateUser = function(usr, clb) {
    return getBiddedJobs(usr, function(err, jobs) {
      if (err != null) {
        return clb(err);
      }
      usr.biddedJobs = jobs;
      return getCreatedJobs(usr, function(err, jobs) {
        if (err != null) {
          return clb(err);
        }
        usr.createdJobs = jobs;
        usr.inbox = {};
        return getSentMessages(usr, function(err, sentMessagess) {
          if (err != null) {
            return clb(err);
          }
          usr.inbox.sent = sentMessagess;
          return getReceivedMessages(usr, function(err, recvMessages) {
            if (err != null) {
              return clb(err);
            }
            usr.inbox.received = recvMessages;
            return getNotifications(usr, function(err, notifications) {
              if (err != null) {
                return clb(err);
              }
              usr.notifications = notifications;
              return clb(err, usr);
            });
          });
        });
      });
    });
  };

  isUserAuthenticated = function(req, res, next) {
    var user;
    user = req.user;
    if (user == null) {
      return res.send(403);
    }
    return populateUser(user, function(err, user) {
      if (err != null) {
        next(err);
      }
      return res.send(user);
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
        return populateUser(user, function(err, user) {
          return res.send(user);
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
