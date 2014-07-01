(function() {
  var AuthLevel, UserModel, async, findCity;

  async = require("async");

  UserModel = require("../models/User");

  AuthLevel = require("../../config/Passport").AUTH_LEVEL;

  findCity = require("./Job").findCity;

  module.exports = function(app) {
    app.get("/", module.exports.showIndexPage);
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
    var data, resolveCity, user, _ref;
    data = req.body;
    data.type = AuthLevel.CRAFTSMAN;
    user = new UserModel(data);
    resolveCity = function(clb) {
      return clb();
    };
    if (((_ref = data.address) != null ? _ref.city : void 0) != null) {
      resolveCity = findCity(data.address.city);
    }
    return resolveCity(function(err, city) {
      data.address.zip = city.zip;
      return module.exports.saveUser(user, res);
    });
  };

  module.exports.registerCustomer = function(req, res) {
    var data, resolveCity, user, _ref;
    data = req.body;
    data.type = AuthLevel.CUSTOMER;
    user = new UserModel(data);
    resolveCity = function(clb) {
      return clb();
    };
    if (((_ref = data.address) != null ? _ref.city : void 0) != null) {
      resolveCity = findCity(data.address.city);
    }
    return resolveCity(function(err, city) {
      data.address.zip = city.zip;
      return module.exports.saveUser(user, res);
    });
  };

}).call(this);
