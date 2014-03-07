(function() {
  var CityModel, mongoose, schema;

  mongoose = require("mongoose");

  CityModel = require("./City");

  schema = mongoose.Schema({
    city: {
      type: Object,
      required: true
    },
    addressLine1: {
      type: String,
      required: true
    },
    addressLine2: {
      type: String,
      "default": ""
    }
  });

  schema.methods.newAddress = function(address) {
    return CityModel.findOne({
      name: address.name
    }).exec((function(_this) {
      return function(err, city) {
        if (err != null) {
          throw new Error(err);
        }
        console.dir("City", city);
        _this.city = city.toObject(address);
        _this.addressLine1 = address.line1;
        _this.addressLine2 = address.line2;
        return _this.save();
      };
    })(this));
  };

  module.exports = mongoose.model("Address", schema);

}).call(this);
