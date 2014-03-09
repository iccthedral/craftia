(function() {
  var AddressModel, JobModel, UserModel, async;

  UserModel = require("../models/User");

  AddressModel = require("../models/Address");

  JobModel = require("../models/Job");

  async = require("async");

  module.exports = function(app) {
    var fetchJobs, populateAddress;
    app.get("/", function(req, res) {
      return res.render("main", {
        user: req.user
      });
    });
    app.get("/isAuthenticated", function(req, res) {
      var user;
      user = req.user;
      if (user != null) {
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
      } else {
        return res.send(403);
      }
    });
    populateAddress = function(j, callback) {
      return AddressModel.populate(j, {
        path: "address"
      }).then(function(job, address) {
        var o;
        o = j.toObject();
        return callback(null, o);
      });
    };
    fetchJobs = function(user, callback) {
      return async.map(user.createdJobs, populateAddress, function(err, results) {
        if (results == null) {
          results = [];
        }
        results = results.map(function(job) {
          var author;
          author = {
            id: user._id,
            name: user.name
          };
          job.author = author;
          return job;
        });
        return callback(null, results);
      });
    };
    return app.get("/listjobs", function(req, res) {
      return UserModel.find().populate("createdJobs").exec(function(err, results) {
        var out;
        out = [];
        return async.map(results, fetchJobs, function(err, results) {
          out = [];
          out = out.concat.apply(out, results);
          return res.send(out);
        });
      });
    });
  };

}).call(this);
