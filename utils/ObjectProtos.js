(function() {
  module.exports = function() {
    return Object.defineProperty(Object.prototype, "stringify", {
      get: function() {
        return JSON.stringify(this);
      },
      enumerable: false
    });
  };

}).call(this);
