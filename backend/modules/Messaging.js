(function() {
  var JobModel, Message, Notification, UserModel, async, mongoose;

  mongoose = require("mongoose");

  UserModel = require("../models/User");

  Message = require("../models/Message");

  Notification = require("../models/Notification");

  JobModel = require("../models/Job");

  async = require("async");

  module.exports.sendNotification = function(notif, clb) {
    clb || (clb = function() {});
    return UserModel.findOne({
      username: notif.receiver
    }).exec(function(err, receiver) {
      var msg, out;
      out = {};
      msg = new Notification({
        type: "system",
        message: notif.body,
        dateSent: Date.now(),
        isRead: false
      });
      return msg.save((function(_this) {
        return function(err, msg) {
          receiver.notif.push(msg);
          return receiver.save(clb);
        };
      })(this));
    });
  };

  module.exports.sendMessage = function(message, clb) {
    clb || (clb = function() {});
    return UserModel.find({
      username: {
        $in: [message.sender, message.receiver]
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
          id: sender._id
        },
        to: {
          username: receiver.username,
          id: receiver._id
        },
        data: message.data,
        subject: message.subject,
        message: message.body,
        dateSent: Date.now(),
        isRead: false
      });
      return msg.save((function(_this) {
        return function(err, msg) {
          receiver.inbox.received.push(msg);
          sender.inbox.sent.push(msg);
          return async.series([receiver.save.bind(receiver, sender.save.bind(sender))], clb);
        };
      })(this));
    });
  };

  module.exports.sendJobMessage = function() {
    throw "Not implemented";
  };

}).call(this);
