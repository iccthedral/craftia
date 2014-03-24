(function() {
  var JobModel, Message, UserModel, mongoose;

  mongoose = require("mongoose");

  UserModel = require("../models/User");

  Message = require("../models/Message");

  JobModel = require("../models/Job");

  module.exports.sendSystemMessage = function() {};

  module.exports.sendJobMessage = function() {};

}).call(this);
