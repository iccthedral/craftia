(function() {
  var AuthLevel, UserModel, async;

  async = require("async");

  UserModel = require("../models/User");

  AuthLevel = require("../../config/Passport").AUTH_LEVEL;

  module.exports = function(app) {
    app.get("/", module.exports.showIndexPage);
    app.get("/isAuthenticated", module.exports.isUserAuthenticated);
    app.get("/listcraftsmen", module.exports.listAllCraftsmen);
    app.get("/listjobs", module.exports.listOpenJobs);
    app.post("/register-craftsman", module.exports.registerCrafsman);
    return app.post("/register-customer", module.exports.registerCustomer);
  };

  module.exports.fetchJobs = function(user, callback) {
    var jobs;
    jobs = user.createdJobs.filter(function(job) {
      return job.status === "open";
    });
    jobs.map(function(job) {
      job = job.toObject();
      job.author = {
        id: user._id,
        name: user.name
      };
      return job;
    });
    return callback(null, jobs);
  };

  module.exports.saveUser = function(user, res) {
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

  module.exports.showIndexPage = function(req, res) {
    return res.render("main", {
      user: req.user
    });
  };

  module.exports.isUserAuthenticated = function(req, res) {
    var user;
    user = req.user;
    if (user == null) {
      return res.send(403);
    }
    return UserModel.find({
      _id: user._id
    }).populate("createdJobs biddedJobs").exec(function(err, result) {
      return res.send(result[0]);
    });
  };

  module.exports.listAllCraftsmen = function(req, res) {
    return UserModel.find({
      type: AuthLevel.CRAFTSMAN
    }).exec(function(err, out) {
      if (err != null) {
        return res.send(422, err.message);
      }
      return res.send(out);
    });
  };

  module.exports.listOpenJobs = function(req, res) {
    return UserModel.find().populate("createdJobs").exec(function(err, results) {
      return async.map(results, module.exports.fetchJobs, function(err, results) {
        var out;
        out = [].concat.apply([], results);
        return res.send(out);
      });
    });
  };

  module.exports.registerCrafsman = function(req, res) {
    var data, user;
    data = req.body;
    data.type = AuthLevel.CRAFTSMAN;
    user = new UserModel(data);
    return module.exports.saveUser(user, res);
  };

  module.exports.registerCustomer = function(req, res) {
    var data, user;
    data = req.body;
    data.type = AuthLevel.CUSTOMER;
    user = new UserModel(data);
    return module.exports.saveUser(user, res);
  };

}).call(this);
