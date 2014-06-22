(function() {
  var AuthLevel, CategoryModel, CityModel, JobModel, MessageModel, NotificationsModel, UserModel, async, colors, fs, getBiddedJobs, getCreatedJobs, getNotifications, getReceivedMessages, getSentMessages, isUserAuthenticated, logMeIn, logMeOut, mongoose, passport, populateUser, updateMe, uploadProfilePicture, util, _;

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

  _ = require("underscore");

  module.exports.setup = function(app) {
    app.get("/logout", logMeOut);
    app.post("/login", logMeIn);
    app.post("/user/update", updateMe);
    app.post("/user/uploadpicture", uploadProfilePicture);
    return app.get("/isAuthenticated", isUserAuthenticated);
  };

  module.exports.getBiddedJobs = getBiddedJobs = function(usr, clb) {
    return JobModel.find().elemMatch("bidders", {
      _id: usr._id
    }).exec(function(err, jobs) {
      return clb(err, jobs);
    });
  };

  module.exports.getCreatedJobs = getCreatedJobs = function(usr, clb) {
    return JobModel.find({
      "author._id": usr._id
    }, function(err, jobs) {
      return clb(err, jobs);
    });
  };

  module.exports.getSentMessages = getSentMessages = function(usr, clb) {
    return MessageModel.find({
      "author._id": usr._id
    }, function(err, messages) {
      return clb(err, messages);
    });
  };

  module.exports.getReceivedMessages = getReceivedMessages = function(usr, clb) {
    return MessageModel.find({
      "to._id": usr._id
    }, function(err, messages) {
      return clb(err, messages);
    });
  };

  module.exports.getNotifications = getNotifications = function(usr, clb) {
    return NotificationsModel.find({
      "to._id": usr._id
    }, function(err, notifications) {
      return clb(err, notifications);
    });
  };

  module.exports.populateUser = populateUser = function(usr, clb) {
    var out;
    out = new Object;
    return getBiddedJobs(usr, function(err, jobs) {
      if (err != null) {
        return clb(err);
      }
      out.biddedJobs = jobs;
      return getCreatedJobs(usr, function(err, jobs) {
        if (err != null) {
          return clb(err);
        }
        out.createdJobs = jobs;
        out.inbox = {};
        return getSentMessages(usr, function(err, sentMessagess) {
          if (err != null) {
            return clb(err);
          }
          out.inbox.sent = sentMessagess;
          return getReceivedMessages(usr, function(err, recvMessages) {
            if (err != null) {
              return clb(err);
            }
            out.inbox.received = recvMessages;
            return getNotifications(usr, function(err, notifications) {
              if (err != null) {
                return clb(err);
              }
              out.notifications = notifications;
              return clb(err, out);
            });
          });
        });
      });
    });
  };

  module.exports.isUserAuthenticated = isUserAuthenticated = function(req, res, next) {
    var user;
    user = req.user;
    if (user == null) {
      return res.send(403);
    }
    return populateUser(user, function(err, out) {
      if (err != null) {
        return next(err);
      }
      user = user.toObject();
      return res.send(_.extend(user, out));
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
        return populateUser(user, function(err, out) {
          if (err != null) {
            return next(err);
          }
          user = user.toObject();
          user = _.extend(user, out);
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
