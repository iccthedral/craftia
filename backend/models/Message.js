(function() {
  var mongoose, schema;

  mongoose = require("mongoose");

  schema = mongoose.Schema({
    message: {
      type: String,
      required: true
    },
    subject: {
      type: String
    },
    type: {
      type: String,
      required: true,
      "enum": ["system", "job", "contact"]
    },
    author: {
      username: String,
      id: mongoose.Schema.Types.ObjectId
    },
    dateSent: {
      type: Date
    },
    isRead: {
      type: Boolean,
      "default": false
    }
  });

  module.exports = mongoose.model("Message", schema);

}).call(this);
