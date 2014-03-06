(function() {
  var AddressModel, AuthLevel, CategoryModel, CityModel, JobModel, UserModel, mongoose, passport;

  passport = require("passport");

  AuthLevel = require("../../config/Passport").AUTH_LEVEL;

  mongoose = require("mongoose");

  UserModel = require("../models/User");

  CityModel = require("../models/City");

  JobModel = require("../models/Job");

  AddressModel = require("../models/Address");

  CategoryModel = require("../models/Category");

  module.exports = function(app) {
    var address_, cities, saveJob, saveUser;
    cities = CityModel.find().exec(function(err, res) {
      return console.dir(res);
    });
    address_ = AddressModel.find().populate({
      path: "city",
      model: "City"
    }).exec(function(err, res) {
      console.dir(res);
      return console.debug();
    });
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
          user.populate({
            "path": "createdJobs"
          }).populate({
            "path": "createdJobs.address",
            "model": "Address"
          }).populate({
            "path": "createdJobs.address.city",
            "model": "City"
          });
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
      return saveUser(user.populate("createdJobs"), res);
    });
    app.post("/job/new", function(req, res, next) {
      var e, jobData, usr;
      jobData = req.body;
      usr = req.user;
      if (usr == null) {
        console.log("You're nog logged in");
        return res.send(422);
      } else {
        try {
          return saveJob(usr, jobData, res);
        } catch (_error) {
          e = _error;
          console.error(e.message.red);
          return res.status(422).send(e.message);
        }
      }
    });
    saveJob = function(usr, jobData, res) {
      var address, job;
      address = new AddressModel();
      job = new JobModel();
      address.newAddress(jobData.address).then(function() {
        return job.address = address._id;
      }).then(function() {});
      return CategoryModel.findOne({
        category: jobData.category
      }).exec(function(err, cat) {
        if ((cat != null ? cat.subcategories[jobData.subcategory] : void 0) != null) {
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
        usr.createdJobs.push(job._id);
        usr.save();
        job.populate("address");
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
