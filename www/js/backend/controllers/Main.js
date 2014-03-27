(function() {
  var JobModel, UserModel, async;

  UserModel = require("../models/User");

  JobModel = require("../models/Job");

  async = require("async");

  module.exports = function(app) {
    var fetchJobs;
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
          return res.send(usr);
        });
      } else {
        return res.send(403);
      }
    });
    fetchJobs = function(user, callback) {
      var jobs;
      jobs = user.createdJobs.map(function(job) {
        var author;
        author = {
          id: user._id,
          name: user.name
        };
        return job.author = author;
      });
      return callback(null, jobs);
    };
    return app.get("/listjobs", function(req, res) {
      return UserModel.find({
        status: "open"
      }).populate("createdJobs").exec(function(err, results) {
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