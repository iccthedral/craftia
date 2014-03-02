(function() {
  var bcrypt, mongoose, schema;

  mongoose = require("mongoose");

  bcrypt = require("bcrypt-nodejs");

  schema = mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    accessToken: {
      type: String
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    authLevel: {
      type: String,
      required: true
    }
  });

  schema.pre("save", function(next) {
    var user;
    user = this;
    if (!user.isModified("password")) {
      return next();
    }
    return bcrypt.genSalt(10, function(err, salt) {
      if (err != null) {
        return next(err);
      }
      return bcrypt.hash(user.password, salt, function() {}, function(err, hash) {
        if (err != null) {
          return next(err);
        }
        user.password = hash;
        return next();
      });
    });
  });

  schema.methods.comparePassword = function(password, cb) {
    return bcrypt.compare(password, this.password, function(err, isMatch) {
      if (err != null) {
        return cb(err);
      }
      return cb(null, isMatch);
    });
  };

  schema.methods.generateRandomToken = function() {
    var chars, i, token, user, x, _i;
    user = this;
    chars = "_!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    token = new Date().getTime() + "_";
    for (x = _i = 0; _i < 16; x = ++_i) {
      i = Math.floor(Math.random() * 62);
      token += chars.charAt(i);
    }
    return token;
  };

  module.exports = mongoose.model("User", schema);

}).call(this);
