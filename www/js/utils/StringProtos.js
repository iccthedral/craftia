(function() {
  module.exports = function() {
    return String.prototype.endsWith = function(str) {
      return this.lastIndexOf(str) + str.length === this.length;
    };
  };

}).call(this);
