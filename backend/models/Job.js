(function() {
  var CategoryModel, CityModel, JobModel, mongoose, schema;

  mongoose = require("mongoose");

  CityModel = require("./City");

  CategoryModel = require("./Category");

  schema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      "default": ""
    },
    materialProvider: {
      type: String,
      required: true,
      "enum": ["Customer", "Craftsman"]
    },
    budget: {
      type: Number,
      required: true
    },
    address: {
      city: String,
      zip: String,
      line1: String,
      line2: String
    },
    category: {
      type: String,
      required: true
    },
    subcategory: {
      type: String,
      required: true
    },
    dateFrom: {
      type: Date,
      required: true
    },
    dateTo: {
      type: Date,
      required: true
    },
    bidders: {
      type: Array,
      "default": []
    }
  });

  JobModel = mongoose.model("Job", schema);

  module.exports = JobModel;

}).call(this);
