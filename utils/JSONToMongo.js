(function() {
  var CATEGORIES, CITIES, CategoryModel, CityModel, DB, RESOURCES, colors, wrench;

  wrench = require("wrench");

  DB = require("../config/Database");

  colors = require("colors");

  CategoryModel = require("../backend/models/Category");

  CityModel = require("../backend/models/City");

  RESOURCES = "./backend/resources/";

  CITIES = require("." + RESOURCES + "cities.json");

  CATEGORIES = "" + RESOURCES + "categories/";

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
        jsonData = require("." + CATEGORIES + util);
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
