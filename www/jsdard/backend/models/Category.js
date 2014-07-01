(function() {
  var mongoose, schema;

  mongoose = require("mongoose");

  schema = mongoose.Schema({
    category: {
      type: String,
      required: true
    },
    subcategories: {
      type: Array,
      "default": [],
      required: true
    }
  });

  module.exports = mongoose.model("Category", schema);

}).call(this);
