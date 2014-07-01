// Generated by CoffeeScript 1.7.1
(function() {
  var AuthLevels, CategoryModel, CityModel, JobCtrl, JobModel, MessageModel, NotificationsModel, UserModel, async, colors, fs, getBiddedJobs, getCreatedJobs, getNotifications, getOwnFinishedJobs, getReceivedMessages, getSentMessages, isUserAuthenticated, listCraftsmenHandler, logInHandler, logOutHandler, mongoose, passport, populateUser, registerCrafsmanHandler, registerCustomerHandler, saveUser, updateProfileHandler, uploadProfilePicHandler, util, _;

  mongoose = require("mongoose");

  passport = require("passport");

  colors = require("colors");

  util = require("util");

  async = require("async");

  fs = require("fs");

  _ = require("underscore");

  AuthLevels = require("../config/AuthLevels");

  UserModel = require("../models/User");

  CityModel = require("../models/City");

  JobModel = require("../models/Job");

  CategoryModel = require("../models/Category");

  MessageModel = require("../models/Message");

  NotificationsModel = require("../models/Notification");

  JobCtrl = require("../controllers/Job");

  module.exports.setup = function(app) {
    app.get("/logout", logOutHandler);
    app.get("/user/craftsmen/:page", listCraftsmenHandler);
    app.get("/isAuthenticated", isUserAuthenticated);
    app.post("/login", logInHandler);
    app.post("/user/update", updateProfileHandler);
    app.post("/user/uploadpicture", uploadProfilePicHandler);
    app.post("/user/registerCraftsman", registerCrafsmanHandler);
    return app.post("/user/registerCustomer", registerCustomerHandler);
  };

  module.exports.saveUser = saveUser = function(user, res) {
    return user.save(function(err) {
      if (err != null) {
        return res.status(422).send("Registering failed!");
      }
      return res.status(200).send({
        user: user,
        msg: "Registering succeeded!"
      });
    });
  };

  module.exports.listCraftsmenHandler = listCraftsmenHandler = function(req, res) {
    var page, perPage;
    page = req.params.page || 0;
    perPage = 5;
    return UserModel.find({
      type: AuthLevels.CRAFTSMAN
    }).select("-password").limit(perPage).skip(perPage * page).exec(function(err, craftsmen) {
      var out;
      if (err != null) {
        return res.status(422).send(err);
      }
      out = {};
      out.craftsmen = craftsmen;
      return UserModel.count({
        type: AuthLevels.CRAFTSMAN
      }, function(err, cnt) {
        if (err != null) {
          return res.status(422).send(err);
        }
        out.totalCraftsmen = cnt;
        return res.send(out);
      });
    });
  };

  module.exports.registerCrafsmanHandler = registerCrafsmanHandler = function(req, res, next) {
    var data, resolveCity, user, _ref;
    data = req.body;
    data.type = AuthLevels.CRAFTSMAN;
    user = new UserModel(data);
    resolveCity = function(clb) {
      return clb();
    };
    if (((_ref = data.address) != null ? _ref.city : void 0) != null) {
      resolveCity = JobCtrl.findCity(data.address.city);
    }
    return resolveCity(function(err, city) {
      if (err != null) {
        return next(err);
      }
      data.address.zip = city.zip;
      return saveUser(user, res);
    });
  };

  module.exports.registerCustomerHandler = registerCustomerHandler = function(req, res) {
    var data, resolveCity, user, _ref;
    data = req.body;
    data.type = AuthLevels.CUSTOMER;
    user = new UserModel(data);
    resolveCity = function(clb) {
      return clb();
    };
    if (((_ref = data.address) != null ? _ref.city : void 0) != null) {
      resolveCity = JobCtrl.findCity(data.address.city);
    }
    return resolveCity(function(err, city) {
      if (err != null) {
        return next(err);
      }
      data.address.zip = city.zip;
      return saveUser(user, res);
    });
  };

  module.exports.getOwnFinishedJobs = getOwnFinishedJobs = function(user, clb) {};

  module.exports.getBiddedJobs = getBiddedJobs = function(usr, clb) {
    return JobModel.find().elemMatch("bidders", {
      _id: usr._id
    }).exec(function(err, jobs) {
      return clb(err, jobs);
    });
  };

  module.exports.getCreatedJobs = getCreatedJobs = function(usr, clb) {
    return JobModel.find({
      "author": usr
    }, function(err, jobs) {
      return clb(err, jobs);
    });
  };

  module.exports.getSentMessages = getSentMessages = function(usr, clb) {
    return MessageModel.find({
      "author": usr
    }, function(err, messages) {
      return clb(err, messages);
    });
  };

  module.exports.getReceivedMessages = getReceivedMessages = function(usr, clb) {
    return MessageModel.find({
      "to": usr
    }, function(err, messages) {
      return clb(err, messages);
    });
  };

  module.exports.getNotifications = getNotifications = function(usr, clb) {
    return NotificationsModel.find({
      "to": usr
    }, function(err, notifications) {
      return clb(err, notifications);
    });
  };

  module.exports.populateUser = populateUser = function(usr, clb) {
    var out;
    out = {};
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
              var user;
              if (err != null) {
                return clb(err);
              }
              out.notifications = notifications;
              user = usr.toObject();
              user = _.extend(user, out);
              return clb(err, user);
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
    return populateUser(user, function(err, user) {
      if (err != null) {
        return next(err);
      }
      return res.send(user);
    });
  };

  logOutHandler = function(req, res) {
    req.logout();
    return res.redirect(200, "/");
  };

  logInHandler = function(req, res, next) {
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
      if (!user) {
        return res.status(401).send(info.message);
      }
      return req.logIn(user, function(err) {
        return populateUser(user, function(err, user) {
          if (err != null) {
            return next(err);
          }
          return res.send(user);
        });
      });
    });
    return pass(req, res, next);
  };

  updateProfileHandler = function(req, res) {
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

  uploadProfilePicHandler = function(req, res) {
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