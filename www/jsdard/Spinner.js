(function() {
  define([], function() {
    var Spinner;
    angular.module("Common").factory("Spinner", ["Common", "Config"], Spinner);
    Spinner = (function() {
      function Spinner(common, config) {
        this.common = common;
        this.config = config;
        return this;
      }

      Spinner.prototype.hide = function() {
        return this.toggle(false);
      };

      Spinner.prototype.show = function() {
        return this.toggle(true);
      };

      Spinner.prototype.toggle = function(show) {
        return this.common.broadcast(this.config.Events.SpinnerToggle, {
          show: show
        });
      };

      return Spinner;

    })();
    return Spinner;
  });

}).call(this);
