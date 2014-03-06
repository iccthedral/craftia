(function() {
  var CityModel, mongoose, schema;

  mongoose = require("mongoose");

  CityModel = require("City");

  schema = mongoose.Schema({
    city: {
      type: mongoose.Schema.ObjectId,
      ref: CityModel
    },
    addressLine1: {
      type: String,
      required: true
    },
    addressLine2: {
      type: String,
      required: true
    }
  });

  module.exports = mongoose.model("Address", schema);

}).call(this);
