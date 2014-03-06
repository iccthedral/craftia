(function() {
  var CategoryModel, mongoose, wrench;

  wrench = require("wrench");

  mongoose = require("mongoose");

  CategoryModel = require("../backend/models/Category");

  module.exports = function() {
    var categoriesURI;
    categoriesURI = "./backend/categories/";
    return CategoryModel.find().remove().exec(function(err, res) {
      return wrench.readdirSyncRecursive(categoriesURI).filter(function(file) {
        return file.lastIndexOf(".json") !== -1;
      }).forEach(function(util) {
        var cat, jsonData;
        jsonData = require("." + categoriesURI + util);
        cat = new CategoryModel(jsonData);
        return cat.save();
      });
    });
  };

}).call(this);
