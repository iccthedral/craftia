(function() {
  var AuthLevel, CategoryModel, CityModel, JobModel, UserModel, async, colors, fs, mongoose, passport, util;

  passport = require("passport");

  AuthLevel = require("../../config/Passport").AUTH_LEVEL;

  mongoose = require("mongoose");

  colors = require("colors");

  UserModel = require("../models/User");

  CityModel = require("../models/City");

  JobModel = require("../models/Job");

  CategoryModel = require("../models/Category");

  util = require("util");

  async = require("async");

  fs = require("fs");

  module.exports = function(app) {
    var findCategory, findCity, saveJob, saveUser;
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
          console.log("what the fuck");
          return UserModel.find({
            _id: user._id
          }).populate("createdJobs").exec(function(err, result) {
            var usr;
            usr = result[0];
            return res.send(usr);
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
    app.get("/listcraftsmen", function(req, res) {
      return UserModel.find({
        type: AuthLevel.CRAFTSMAN
      }).exec(function(err, out) {
        if (err != null) {
          return res.send(422, err.message);
        }
        return res.send(out);
      });
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
      var checkCity, findCat, jobData, usr, _ref, _ref1;
      usr = req.user;
      jobData = req.body;
      if ((usr == null) || usr.type !== AuthLevel.CUSTOMER) {
        return res.send(422);
      }
      checkCity = ((_ref = jobData.address) != null ? _ref.city : void 0) != null ? findCity(jobData.address.city) : function(clb) {
        return clb(null, null);
      };
      findCat = ((_ref1 = jobData.category) != null ? _ref1.subcategory : void 0) != null ? findCategory(jobData) : function(clb) {
        return clb(null, null);
      };
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
    });
    app.post("/user/update", function(req, res) {
      var usr;
      usr = req.user;
      if (usr == null) {
        return res.status(422).send("You're not logged in");
      }
      return UserModel.findByIdAndUpdate(req.user._id, {
        $set: req.body
      }).exec(function(err, user) {
        user.save(req.body);
        return res.send(200);
      });
    });
    app.post("/user/uploadpicture", function(req, res) {
      var usr;
      usr = req.user;
      if (usr == null) {
        return res.status(422).send("You're not logged in");
      }
      return UserModel.findById(req.user._id).exec(function(err, user) {
        var file;
        file = req.files.file;
        return fs.readFile(file.path, function(err, data) {
          var imguri, newPath;
          imguri = "img/" + usr.username + ".png";
          newPath = "www/" + imguri;
          return fs.writeFile(newPath, data, (function(_this) {
            return function(err) {
              console.log(err);
              if (err != null) {
                return res.send(422);
              }
              user.profilePic = imguri;
              user.save();
              return res.send(imguri);
            };
          })(this));
        });
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
        return job.save(function(err) {
          if (err != null) {
            return res.status(422).send(err.message);
          }
          return res.send(job);
        });
      });
    });
    app.post("/job/:id/:uid/cancelbid", function(req, res) {
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
    });
    app.post("/job/:id/rate/:mark", function(req, res) {
      var user;
      user = req.user;
      if (user.type !== AuthLevel.CUSTOMER) {
        throw new Error("You don't have permissions to rate");
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
    });
    app.post("/job/:id/pickawinner/:winner", function(req, res) {
      var user, winnerId;
      user = req.user;
      winnerId = req.params.winner;
      if (user.type !== AuthLevel.CUSTOMER) {
        throw new Error("You don't have permissions to rate");
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
          return res.send(job);
        });
      });
    });
    saveJob = function(usr, jobData, res) {
      if (usr.type !== AuthLevel.CUSTOMER) {
        throw new Error("You don't have permissions to create a new job");
      }
      return async.series([findCity(jobData.address.city), findCategory(jobData)], function(err, results) {
        var job;
        delete jobData._id;
        job = new JobModel(jobData);
        job.author = usr;
        job.address.zip = results[0].zip;
        if (err != null) {
          return res.send(422, err.message);
        }
        return job.save(function(err, job) {
          if (err != null) {
            return res.status(422).send(err.messsage);
          }
          usr.createdJobs.push(mongoose.Types.ObjectId(job._id));
          usr.save();
          return res.send(job);
        });
      });
    };
    saveUser = function(user, res) {
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
    findCity = function(city) {
      return function(clb) {
        return CityModel.findOne({
          name: city
        }).exec(function(err, city) {
          return clb(err, city);
        });
      };
    };
    return findCategory = function(jobdata) {
      return function(clb) {
        return CategoryModel.findOne({
          category: jobdata.category
        }).exec(function(err, cat) {
          if (((cat != null ? cat.subcategories[jobdata.subcategory] : void 0) != null) || (err != null)) {
            clb(new Error("No such subcategory in category " + jobdata.category), null);
          }
          return clb(err, cat);
        });
      };
    };
  };

}).call(this);
