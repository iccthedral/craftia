(function() {
  var AuthLevel, CategoryModel, CityModel, JobModel, Messaging, UserModel, async, bidOnJob, cancelBidOnJob, colors, createNewJob, deleteJob, findCategory, findCity, findJob, fs, mongoose, passport, pickWinnerBid, rateJob, saveJob, updateJob, util,
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

  Messaging = require("../modules/Messaging");

  AuthLevel = require("../../config/Passport").AUTH_LEVEL;

  module.exports.saveJob = saveJob = function(usr, jobData, res) {
    if (usr.type !== AuthLevel.CUSTOMER) {
      throw "You don't have permissions to create a new job";
    }
    return async.series([findCity(jobData.address.city), findCategory(jobData)], function(err, results) {
      var job;
      if (err != null) {
        throw err;
      }
      delete jobData._id;
      job = new JobModel(jobData);
      job.status = "open";
      job.address.zip = results[0].zip;
      job.author = {
        id: usr._id,
        username: usr.username
      };
      return job.save(function(err, job) {
        if (err != null) {
          throw err;
        }
        usr.createdJobs.push(job._id);
        usr.save();
        return res.send(job);
      });
    });
  };

  module.exports.findJob = findJob = function(req, res, next) {
    return JobModel.findOne({
      _id: req.params.id
    }).exec(function(err, job) {
      if (err != null) {
        return next(err);
      }
      return res.send(job);
    });
  };

  module.exports.findCity = findCity = function(cityName) {
    return function(clb) {
      return CityModel.findOne({
        name: cityName
      }).exec(function(err, city) {
        if (city == null) {
          return clb(new Error("No city " + cityName + " in database!", null));
        } else {
          return clb(err, city);
        }
      });
    };
  };

  module.exports.findCategory = findCategory = function(jobdata) {
    return function(clb) {
      return CategoryModel.findOne({
        category: jobdata.category
      }).exec(function(err, cat) {
        var exists, _ref;
        if (cat == null) {
          return clb(new Error("No such category " + jobdata.category, null));
        }
        exists = (_ref = jobdata.subcategory, __indexOf.call(cat != null ? cat.subcategories : void 0, _ref) >= 0);
        if (!exists || (err != null)) {
          return clb(new Error("No subcategory " + jobdata.subcategory + " in category " + jobdata.category, null));
        }
        return clb(err, cat);
      });
    };
  };

  createNewJob = function(req, res, next) {
    var e, jobData, usr;
    jobData = req.body;
    usr = req.user;
    if (usr == null) {
      return next("User doesn't exist");
    }
    try {
      return saveJob(usr, jobData, res);
    } catch (_error) {
      e = _error;
      return next(e);
    }
  };

  deleteJob = function(req, res) {
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

  updateJob = function(req, res) {
    var checkCity, findCat, jobData, usr, _ref, _ref1;
    usr = req.user;
    jobData = req.body;
    if ((usr == null) || usr.type !== AuthLevel.CUSTOMER) {
      return res.send(422);
    }
    if (((_ref = jobData.address) != null ? _ref.city : void 0) != null) {
      checkCity = findCity(jobData.address.city);
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

  bidOnJob = function(req, res) {
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
        rating: usr.rating.toObject(),
        pic: usr.profilePic
      });
      return job.save(function(err) {
        if (err != null) {
          return res.status(422).send(err.message);
        }
        return Messaging.sendMessage({
          sender: usr.username,
          receiver: job.author.username,
          subject: "Someone bidded on your offering",
          type: "job",
          data: {
            jobid: job._id,
            subtype: "bid_for_job"
          },
          body: "Craftsman " + usr.username + " just bidded on your job offering " + job.title + " under " + job.category + " category"
        }, function() {
          return res.send(job);
        });
      });
    });
  };

  cancelBidOnJob = function(req, res) {
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
        return Messaging.sendMessage({
          sender: usr.username,
          receiver: job.author.username,
          subject: "Someone canceled on your offering",
          type: "job",
          data: {
            jobid: job._id,
            subtype: "cancel_job"
          },
          body: "Craftsman " + usr.username + " just canceled their bid on your job offering " + job.title + " under " + job.category + " category"
        }, function() {
          return res.send(job);
        });
      });
    });
  };

  rateJob = function(req, res) {
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

  pickWinnerBid = function(req, res) {
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

  module.exports = function(app) {
    app.post("/job/new", createNewJob);
    app.post("/job/:id/delete", deleteJob);
    app.post("job/:id/update", updateJob);
    app.post("/job/:id/bid", bidOnJob);
    app.post("/job/:id/:uid/cancelbid", cancelBidOnJob);
    app.post("/job/:id/rate/:mark", rateJob);
    app.post("/job/:id/pickawinner/:winner", pickWinnerBid);
    return app.post("/job/:id", findJob);
  };

}).call(this);
