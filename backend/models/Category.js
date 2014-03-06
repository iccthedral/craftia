(function() {
  var mongoose, schema;

  mongoose = require("mongoose");

  schema = mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true
    },
    subcategories: {
      type: Array,
      "default": []
    }
  });

}).call(this);
