(function() {
  var JobModel, MessageModel, UserModel, async, bcrypt, mongoose, schema;

  mongoose = require("mongoose");

  bcrypt = require("bcrypt-nodejs");

  JobModel = require("./Job");

  MessageModel = require("./Message");

  async = require("async");

  schema = mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    accessToken: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    address: {
      zip: String,
      city: String,
      line1: String,
      line2: String
    },
    type: {
      type: String,
      "enum": ["Admin", "Craftsman", "Customer"],
      required: true
    },
    telephone: {
      type: String,
      required: true
    },
    createdJobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        "default": []
      }
    ],
    biddedJobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        "default": []
      }
    ],
    rating: {
      comments: [
        {
          jobId: mongoose.Schema.Types.ObjectId,
          message: String
        }
      ],
      totalVotes: {
        type: Number,
        "default": 0
      },
      avgRate: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5
      }
    },
    profilePic: {
      type: String,
      "default": "img/default_user.jpg"
    },
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notification"
      }
    ],
    inbox: {
      received: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Message"
        }
      ],
      sent: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Message"
        }
      ]
    }
  });

  schema.pre("save", function(next) {
    var user;
    user = this;
    if (!user.isModified("password")) {
      return next();
    }
    return bcrypt.genSalt(10, function(err, salt) {
      if (err != null) {
        return next(err);
      }
      return bcrypt.hash(user.password, salt, (function() {}), function(err, hash) {
        if (err != null) {
          return next(err);
        }
        user.password = hash;
        return next();
      });
    });
  });

  schema.methods.comparePassword = function(password, cb) {
    return bcrypt.compare(password, this.password, function(err, isMatch) {
      if (err != null) {
        return cb(err);
      }
      return cb(null, isMatch);
    });
  };

  schema.methods.generateRandomToken = function() {
    var chars, i, token, user, x, _i;
    user = this;
    chars = "_!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    token = new Date().getTime() + "_";
    for (x = _i = 0; _i < 16; x = ++_i) {
      i = Math.floor(Math.random() * 62);
      token += chars.charAt(i);
    }
    return token;
  };

  UserModel = mongoose.model("User", schema);

  schema.statics.sendMessage = function(type, msg, fromId, toId, callb) {
    return UserModel.findById(fromId).exec(function(err, sender) {
      return UserModel.findById(toId).exec(function(err, receiver) {
        msg = new MessageModel({
          type: type,
          msg: msg,
          from: myself
        });
        receiver.inbox[type].push(msg);
        sender.inbox.sent.push(msg);
        return async.series([receiver.save().exec, sender.save().exec], function(err, res) {
          return callb(err, res);
        });
      });
    });
  };

  module.exports = UserModel;

}).call(this);
