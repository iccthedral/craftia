(function() {
  var AuthLevel, CategoryModel, CityModel, JobModel, UserModel, async, colors, fs, mongoose, passport, util,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

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

  AuthLevel = require("../../config/Passport").AUTH_LEVEL;

  module.exports = function(app) {
    app.post("/job/new", module.exports.createNewJob);
    app.post("/job/:id/delete", module.exports.deleteJob);
    app.post("job/:id/update", module.exports.updateJob);
    app.post("/job/:id/bid", module.exports.bidOnJob);
    app.post("/job/:id/:uid/cancelbid", module.exports.cancelBidOnJob);
    app.post("/job/:id/rate/:mark", module.exports.rateJob);
    return app.post("/job/:id/pickawinner/:winner", module.exports.pickWinnerBid);
  };

  module.exports.findCity = function(cityName) {
    return function(clb) {
      return CityModel.findOne({
        name: cityName
      }).exec(function(err, city) {
        if (city == null) {
          return clb(new Error("No city " + cityName + " in database!"), null);
        } else {
          return clb(err, city);
        }
      });
    };
  };

  module.exports.findCategory = function(jobdata) {
    return function(clb) {
      return CategoryModel.findOne({
        category: jobdata.category
      }).exec(function(err, cat) {
        var exists, _ref;
        if (cat == null) {
          return clb(new Error("No such category " + jobdata.category), null);
        }
        exists = (_ref = jobdata.subcategory, __indexOf.call(cat != null ? cat.subcategories : void 0, _ref) >= 0);
        if (!exists || (err != null)) {
          return clb(new Error("No subcategory " + jobdata.subcategory + " in category " + jobdata.category), null);
        }
        return clb(err, cat);
      });
    };
  };

  module.exports.saveJob = function(usr, jobData, res) {
    if (usr.type !== AuthLevel.CUSTOMER) {
      throw new Error("You don't have permissions to create a new job");
    }
    return async.series([module.exports.findCity(jobData.address.city), module.exports.findCategory(jobData)], function(err, results) {
      var job;
      console.log(err);
      if (err != null) {
        return res.status(422).send(err.message);
      }
      delete jobData._id;
      job = new JobModel(jobData);
      job.author = {
        id: usr._id,
        username: usr.username
      };
      job.status = "open";
      job.address.zip = results[0].zip;
      return job.save(function(err, job) {
        console.log(err);
        if (err != null) {
          return res.status(422).send(err.messsage);
        }
        usr.createdJobs.push(job._id);
        usr.save();
        return res.send(job);
      });
    });
  };

  module.exports.createNewJob = function(req, res) {
    var e, jobData, usr;
    jobData = req.body;
    usr = req.user;
    if (usr == null) {
      return res.send(422);
    }
    try {
      return module.exports.saveJob(usr, jobData, res);
    } catch (_error) {
      e = _error;
      console.log(e.message);
      return res.status(422).send(e.message);
    }
  };

  module.exports.deleteJob = function(req, res) {
    var usr;
    usr = req.user;
    if ((usr == null) || usr.type !== AuthLevel.CUSTOMER) {
      return res.send(422);
    }
    return JobModel.findOne({
      _id: req.params.id
    }).remove().exec(function(err, result) {
      return res.send(200);
    });
  };

  module.exports.updateJob = function(req, res) {
    var checkCity, findCat, jobData, usr, _ref, _ref1;
    usr = req.user;
    jobData = req.body;
    if ((usr == null) || usr.type !== AuthLevel.CUSTOMER) {
      return res.send(422);
    }
    if (((_ref = jobData.address) != null ? _ref.city : void 0) != null) {
      checkCity = module.exports.findCity(jobData.address.city);
    } else {
      checkCity = function(clb) {
        return clb(null, null);
      };
    }
    if (((_ref1 = jobData.category) != null ? _ref1.subcategory : void 0) != null) {
      findCat = findCategory(jobData);
    } else {
      findCat = function(clb) {
        return clb(null, null);
      };
    }
    return async.series([checkCity, findCat], function(err, results) {
      var id;
      id = req.params.id;
      return JobModel.findByIdAndUpdate(id, jobData).exec(function(err, results) {
        if ((err != null) || results < 1) {
          return res.send(422);
        }
        return JobModel.findById(id).exec(function(err, job) {
          if (err != null) {
            return res.status(422).send(err.message);
          }
          return res.send(job);
        });
      });
    });
  };

  module.exports.bidOnJob = function(req, res) {
    var usr;
    usr = req.user;
    if ((usr == null) || usr.type !== AuthLevel.CRAFTSMAN) {
      return res.send(422);
    }
    return JobModel.findOne({
      _id: req.params.id
    }).exec(function(err, job) {
      job.bidders.push({
        id: usr._id,
        username: usr.username,
        name: usr.name,
        surname: usr.surname,
        email: usr.email,
        rating: usr.rating.toObject()
      });
      return job.save(function(err) {
        if (err != null) {
          return res.status(422).send(err.message);
        }
        return res.send(job);
      });
    });
  };

  module.exports.cancelBidOnJob = function(req, res) {
    var usr;
    usr = req.user;
    if ((usr == null) || usr.type !== AuthLevel.CRAFTSMAN) {
      return res.send(422);
    }
    return JobModel.findOne({
      _id: req.params.id
    }).exec(function(err, job) {
      var bidder, ind;
      bidder = (job.bidders.filter((function(_this) {
        return function(el) {
          return el.id === req.params.uid;
        };
      })(this)))[0];
      ind = job.bidders.indexOf(bidder);
      job.bidders.splice(ind, 1);
      return job.save(function(err) {
        if (err != null) {
          return res.status(422).send(err.message);
        }
        return res.send(job);
      });
    });
  };

  module.exports.rateJob = function(req, res) {
    var user;
    user = req.user;
    if (user.type !== AuthLevel.CUSTOMER) {
      return res.status(422).send("You don't have permissions to rate");
    }
    return JobModel.findById(req.params.id).exec(function(err, job) {
      if (job.status !== "finished" || (job.winner == null) || (err != null)) {
        return res.send(422);
      }
      return UserModel.findById(job.winner).exec(function(err, winner) {
        if (err != null) {
          return res.send(422);
        }
        winner.rating.totalVotes++;
        winner.rating.avgRate += req.params.mark;
        winner.rating.avgRate /= winner.rating.totalVotes;
        return res.send(winner);
      });
    });
  };

  module.exports.pickWinnerBid = function(req, res) {
    var user, winnerId;
    user = req.user;
    winnerId = req.params.winner;
    if (user.type !== AuthLevel.CUSTOMER) {
      return res.status(422).send("You don't have permissions to pick winning bid");
    }
    return UserModel.findById(req.params.winner).exec(function(err, winner) {
      if (err != null) {
        return res.send(422);
      }
      return JobModel.findById(req.params.id).exec(function(err, job) {
        if (err != null) {
          return res.send(422);
        }
        job.winner = winner._id;
        job.status = "closed";
        return job.save(function(err, job) {
          return res.send(job);
        });
      });
    });
  };

}).call(this);
