(function() {
  var CityModel, mongoose, schema;

  mongoose = require("mongoose");

  CityModel = require("./City");

  schema = mongoose.Schema({
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City"
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
      zip: address.zip
    }).exec((function(_this) {
      return function(err, city) {
        if (err != null) {
          throw new Error(err);
        }
        _this.city = city._id;
        _this.addressLine1 = address.line1;
        _this.addressLine2 = address.line2;
        return _this.save();
      };
    })(this));
  };

  module.exports = mongoose.model("Address", schema);

}).call(this);
