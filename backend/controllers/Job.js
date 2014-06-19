(function() {
  var AuthLevel, CategoryModel, CityModel, JobModel, Messaging, UserModel, async, bidOnJob, bidOnJobHandler, cancelBidOnJob, colors, createNewJob, deleteJob, findCategory, findCity, findJob, fs, mongoose, passport, pickWinner, pickWinnerHandler, rateJob, saveJob, updateJob, util,
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

  module.exports.saveJob = saveJob = function(usr, jobData, clb) {
    if (usr.type !== AuthLevel.CUSTOMER) {
      return clb("You don't have permissions to create a new job");
    }
    return async.series([findCity(jobData.address.city), findCategory(jobData)], function(err, results) {
      var job;
      if (err != null) {
        return clb(err);
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
          return clb(err);
        }
        return usr.save(function(err, cnt) {
          return clb(err, job, usr);
        });
      });
    });
  };

  module.exports.bidOnJob = bidOnJob = function(usr, jobId, clb) {
    return JobModel.findOne({
      _id: jobId
    }).exec(function(err, job) {
      job.bidders.push(usr);
      return job.save(function(err) {
        if (err != null) {
          return res.status(422).send(err.message);
        }
        return Messaging.sendNotification({
          receiver: job.author.username,
          subject: "Someone bidded on your offering",
          type: "job",
          body: "Craftsman " + usr.username + " just bidded on your job offering " + job.title + " under " + job.category + " category"
        }, function(err) {
          return clb(err, usr, jobId);
        });
      });
    });
  };

  module.exports.pickWinner = pickWinner = function(winner, jobId, clb) {
    winner = mongoose.Types.ObjectId(winner);
    return JobModel.findById(jobId).elemMatch("bidders", {
      _id: winner
    }).exec(function(err, job) {
      console.log(arguments);
      if (err != null) {
        return clb(err);
      }
      job.winner = winner._id;
      job.status = "closed";
      return job.save(function(err, job) {
        return clb(err, job);
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
      return saveJob(usr, jobData, function(err, usr, job) {
        if (err != null) {
          next(err);
        }
        return res.send(job);
      });
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

  bidOnJobHandler = function(req, res, next) {
    var usr;
    usr = req.user;
    return bidOnJob(usr, req.params.id, function(err) {
      if (err != null) {
        next(err);
      }
      if ((usr == null) || (usr.type !== AuthLevel.CRAFTSMAN)) {
        return res.send(422);
      }
      return res.send(job);
    });
  };

  pickWinnerHandler = function(req, res, next) {
    var jobId, user, winnerId;
    user = req.user;
    winnerId = req.params.winner;
    jobId = req.params.id;
    if (user.type !== AuthLevel.CUSTOMER) {
      return res.status(422).send("You don't have permissions to pick winning bid");
    }
    return pickwinner(winnerId, jobId, function(err, job) {
      if (err != null) {
        return next(err);
      }
      return res.send(job);
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
        return Messaging.sendNotification({
          receiver: job.author.username,
          type: "job",
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

  module.exports.setup = function(app) {
    app.post("/job/new", createNewJob);
    app.post("/job/:id/delete", deleteJob);
    app.post("job/:id/update", updateJob);
    app.post("/job/:id/bid", bidOnJobHandler);
    app.post("/job/:id/:uid/cancelbid", cancelBidOnJob);
    app.post("/job/:id/rate/:mark", rateJob);
    app.post("/job/:id/pickawinner/:winner", pickWinnerHandler);
    return app.post("/job/:id", findJob);
  };

}).call(this);
