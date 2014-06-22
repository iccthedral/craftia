(function() {
  var CategoryModel, CityModel, colors, util;

  colors = require("colors");

  CityModel = require("../models/City");

  CategoryModel = require("../models/Category");

  util = require("util");

  module.exports = function(app) {
    app.get("/categories", function(req, res, next) {
      return CategoryModel.find().exec(function(err, result) {
        var cat, out, _i, _len;
        if (err != null) {
          res.status(422).send(err.message);
        }
        out = [];
        for (_i = 0, _len = result.length; _i < _len; _i++) {
          cat = result[_i];
          out.push({
            id: cat._id,
            name: cat.category
          });
        }
        return res.send(out);
      });
    });
    app.get("/cities/:id", function(req, res, next) {
      var findCriteria, id;
      id = req.params.id;
      if (/\d+/.test(id)) {
        findCriteria = {
          zip: new RegExp('.*' + id + '.*', 'ig')
        };
      } else {
        findCriteria = {
          name: new RegExp('.*' + id + '.*', 'ig')
        };
      }
      console.dir(findCriteria);
      return CityModel.find(findCriteria).exec(function(err, result) {
        if (err != null) {
          res.status(422).send(err.message);
        }
        return res.send(result);
      });
    });
    return app.get("/category/:cat", function(req, res, next) {
      var cat;
      cat = req.params.cat;
      return CategoryModel.findOne({
        _id: cat
      }).exec(function(err, rescat) {
        var subcats;
        if (err != null) {
          res.status(422).send(err.message);
        }
        subcats = rescat.subcategories.map(function(name) {
          return {
            name: name
          };
        });
        return res.send(subcats);
      });
    });
  };

}).call(this);
