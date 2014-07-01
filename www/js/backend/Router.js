(function() {
  var wrench;

  wrench = require("wrench");

  module.exports = function(app, passport) {
    return wrench.readdirSyncRecursive("./backend/controllers").filter(function(cntrl) {
      return cntrl.endsWith(".js");
    }).forEach(function(cntl) {
      return require("../backend/controllers/" + cntl)(app);
    });
  };

}).call(this);
