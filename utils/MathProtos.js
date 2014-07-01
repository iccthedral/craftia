(function() {
  module.exports = function() {
    return Number.prototype.clamp = function(min, max) {
      var inst, val;
      val = this.valueOf();
      inst = val;
      if (val < min) {
        inst = min;
      } else if (val > max) {
        inst = max;
      }
      return val;
    };
  };

}).call(this);
