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
        $in: [message.sender, message.receiver]
      }
    }).exec(function(err, results) {
      var msg, receiver, sender;
      sender = results[0];
      receiver = results[1];
      msg = new Message({
        author: {
          username: sender.username,
          id: sender.id
        },
        subject: message.subject,
        message: message.body,
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
