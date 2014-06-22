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
  to: {
    username: String,
    id: mongoose.Schema.Types.ObjectId
  },
  author: {
    username: String,
    id: mongoose.Schema.Types.ObjectId
  },
  dateSent: {
    type: Date
  },
  data: {
    type: Object
  },
  isRead: {
    type: Boolean,
    "default": false
  }
});

module.exports = mongoose.model("Message", schema);
