(function() {
  var JobModel, Message, UserModel, async, mongoose;

  mongoose = require("mongoose");

  UserModel = require("../models/User");

  Message = require("../models/Message");

  JobModel = require("../models/Job");

  async = require("async");

  module.exports.sendMessage = function(message, callback) {
    UserModel.find({
      username: {
        $in: [message.author, message.receiver]
      }
    }).exec(function(err, results) {
      var msg, out, receiver, sender;
      out = {};
      results.forEach(function(res) {
        return out[res.username] = res;
      });
      sender = out[message.sender];
      receiver = out[message.receiver];
      msg = new Message({
        author: {
          username: sender.username,
          id: sender.id
        },
        subject: message.subject,
        message: message.message,
        type: message.type,
        dateSent: Date.now(),
        isRead: false
      });
      return msg.save((function(_this) {
        return function(err, msg) {
          receiver.inbox.received.push(msg);
          sender.inbox.sent.push(msg);
          return async.series([receiver.save.bind(receiver), sender.save.bind(sender)], callback);
        };
      })(this));
    });
  };

  module.exports.sendJobMessage = function() {};

}).call(this);
