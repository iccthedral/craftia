(function() {
  var AddressModel, AuthLevel, CategoryModel, CityModel, JobModel, UserModel, colors, mongoose, passport, util;

  passport = require("passport");

  AuthLevel = require("../../config/Passport").AUTH_LEVEL;

  mongoose = require("mongoose");

  colors = require("colors");

  UserModel = require("../models/User");

  CityModel = require("../models/City");

  JobModel = require("../models/Job");

  AddressModel = require("../models/Address");

  CategoryModel = require("../models/Category");

  util = require("util");

  module.exports = function(app) {
    var saveJob, saveUser;
    app.get("/logout", function(req, res) {
      req.logout();
      return res.redirect(200, "/");
    });
    app.post('/login', function(req, res, next) {
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
          return UserModel.find({
            _id: user._id
          }).populate("createdJobs").exec(function(err, result) {
            var usr;
            usr = result[0];
            return AddressModel.populate(usr.createdJobs, {
              path: "address"
            }).then(function(job, address) {
              job.address = address;
              return res.send(usr);
            });
          });
        });
      })(req, res, next);
    });
    app.post('/register-craftsman', function(req, res) {
      var data, user;
      data = req.body;
      data.type = AuthLevel.CRAFTSMAN;
      data.rating = 0;
      data.numVotes = 0;
      user = new UserModel(data);
      return saveUser(user, res);
    });
    app.post('/register-customer', function(req, res) {
      var data, user;
      data = req.body;
      data.type = AuthLevel.CUSTOMER;
      user = new UserModel(data);
      return saveUser(user.populate("createdJobs"), res);
    });
    app.post("/job/new", function(req, res) {
      var e, jobData, usr;
      jobData = req.body;
      usr = req.user;
      if (usr == null) {
        return res.send(422);
      } else {
        try {
          return saveJob(usr, jobData, res);
        } catch (_error) {
          e = _error;
          console.log(e.message);
          return res.status(422).send(e.message);
        }
      }
    });
    app.post("/job/:id/delete", function(req, res) {
      var usr;
      usr = req.user;
      if ((usr == null) || usr.type !== AuthLevel.CUSTOMER) {
        res.send(422);
        return;
      }
      return JobModel.findOne({
        _id: req.params.id
      }).remove().exec(function(err, result) {
        return res.send(200);
      });
    });
    app.post("/job/:id/update", function(req, res) {
      var usr;
      usr = req.user;
      if ((usr == null) || usr.type !== AuthLevel.CUSTOMER) {
        res.send(422);
        return;
      }
      return JobModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }).exec(function(err, job) {
        job.save(req.body);
        return res.send(200);
      });
    });
    app.post("/job/:id/bid", function(req, res) {
      var usr;
      usr = req.user;
      console.dir(usr);
      if ((usr == null) || usr.type !== AuthLevel.CRAFTSMAN) {
        res.send(422);
        return;
      }
      return JobModel.findOne({
        _id: req.params.id
      }).exec(function(err, job) {
        job.bidders.push({
          id: usr._id,
          username: usr.username,
          name: usr.name,
          surname: usr.surname,
          email: usr.email
        });
        job.save();
        return res.send(200);
      });
    });
    saveJob = function(usr, jobData, res) {
      var address, job;
      if (usr.type !== AuthLevel.CUSTOMER) {
        throw new Error("You don't have permissions to create a new job");
      }
      address = new AddressModel();
      job = new JobModel();
      address.newAddress(jobData.address).then(function() {
        return job.address = address._id;
      }).then(function() {});
      return CategoryModel.findOne({
        category: jobData.category
      }).exec(function(err, cat) {
        if (((cat != null ? cat.subcategories[jobData.subcategory] : void 0) != null) || (err != null)) {
          throw new Error("No such subcategory in category " + job.category);
        }
        job.category = jobData.category;
        job.subcategory = jobData.subcategory;
        job.budget = jobData.budget;
        job.dateFrom = jobData.dateFrom;
        job.dateTo = jobData.dateTo;
        job.materialProvider = jobData.materialProvider;
        job.title = jobData.title;
        job.description = jobData.description;
        job.save();
        job.populate("address");
        usr.createdJobs.push(job._id);
        usr.save();
        return res.send(job);
      });
    };
    return saveUser = function(user, res) {
      return user.save(function(err) {
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
