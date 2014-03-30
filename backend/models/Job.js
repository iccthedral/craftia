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
      required: true,
      min: 0
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
    status: {
      type: String,
      "default": "open",
      "enum": ["open", "closed", "finished"]
    },
    author: {
      id: mongoose.Schema.Types.ObjectId,
      username: String
    },
    winner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    bidders: {
      type: Array,
      "default": []
    }
  });

  JobModel = mongoose.model("Job", schema);

  module.exports = JobModel;

}).call(this);
