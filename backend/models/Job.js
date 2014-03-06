(function() {
  var AddressModel, CategoryModel, mongoose, schema;

  mongoose = require("mongoose");

  AddressModel = require("Address");

  CategoryModel = require("Category");

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
      required: true
    },
    budget: {
      type: Number,
      required: true
    },
    address: {
      type: mongoose.Schema.ObjectId,
      ref: AddressModel
    },
    category: {
      type: CategoryModel,
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
    }
  });

}).call(this);
