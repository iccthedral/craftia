(function() {
  var AddressModel, JobModel, UserModel, async;

  UserModel = require("../models/User");

  AddressModel = require("../models/Address");

  JobModel = require("../models/Job");

  async = require("async");

  module.exports = function(app) {
    var populateAddress;
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
    return app.get("/listjobs", function(req, res) {
      return UserModel.find().populate("createdJobs").exec(function(err, results) {
        var out, r, _i, _len, _results;
        out = [];
        _results = [];
        for (_i = 0, _len = results.length; _i < _len; _i++) {
          r = results[_i];
          _results.push(async.map(r.createdJobs, populateAddress, function(err, results) {
            results = results.map(function(job) {
              var author;
              author = {
                id: r._id,
                name: r.name
              };
              job.author = author;
              return job;
            });
            return res.send(results);
          }));
        }
        return _results;
      });
    });
  };

}).call(this);
