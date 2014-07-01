// Generated by CoffeeScript 1.7.1
(function() {
  var CATEGORIES, CITIES, CategoryModel, CityModel, DB, RESOURCES, colors, wrench;

  wrench = require("wrench");

  colors = require("colors");

  CategoryModel = require("../models/Category");

  CityModel = require("../models/City");

  DB = require("../config/Database");

  RESOURCES = "../../shared/resources/";

  CITIES = require("" + RESOURCES + "cities.json");

  CATEGORIES = "./src/shared/resources/categories/";

  module.exports = function(clb) {
    return CategoryModel.find().exec(function(err, res) {
      var data;
      if (res.length > 0) {
        return;
      }
      data = wrench.readdirSyncRecursive(CATEGORIES).filter(function(file) {
        return file.lastIndexOf(".json") !== -1;
      }).map(function(util) {
        var jsonData;
        jsonData = require("" + RESOURCES + "categories/" + util);
        return jsonData;
      });
      return CategoryModel.create(data, function(err, res1) {
        console.log("Added", arguments.length - 1, "categories");
        return CityModel.create(CITIES, function(err, res2) {
          console.log("Added", arguments.length - 1, "cities");
          return typeof clb === "function" ? clb(err) : void 0;
        });
      });
    });
  };

}).call(this);