(function() {
  var CategoryModel, CityModel, colors, mongoose, wrench;

  wrench = require("wrench");

  mongoose = require("mongoose");

  CategoryModel = require("../backend/models/Category");

  CityModel = require("../backend/models/City");

  colors = require("colors");

  module.exports = function() {

    /* Put categories in */
    var categoriesURI, resourcesURI;
    resourcesURI = "./backend/resources/";
    categoriesURI = "" + resourcesURI + "categories/";
    CategoryModel.find().remove().exec(function() {
      var data;
      data = wrench.readdirSyncRecursive(categoriesURI).filter(function(file) {
        return file.lastIndexOf(".json") !== -1;
      }).map(function(util) {
        var jsonData;
        jsonData = require("." + categoriesURI + util);
        return jsonData;
      });
      return CategoryModel.create(data);
    });
    return CityModel.find().remove().exec(function() {
      var city, e, jsonCities, _i, _len, _results;
      jsonCities = require("." + resourcesURI + "cities.json");
      _results = [];
      for (_i = 0, _len = jsonCities.length; _i < _len; _i++) {
        city = jsonCities[_i];
        try {
          _results.push((new CityModel(city)).save());
        } catch (_error) {
          e = _error;
          _results.push(console.error(e.message.red));
        }
      }
      return _results;
    });
  };

}).call(this);
