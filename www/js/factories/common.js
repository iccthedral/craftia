var __slice = [].slice;

define(["factories/module"], function(module) {
  module.factory("common", [
    "$q", "$rootScope", "$timeout", "config", "logger", function($q, $rootScope, $timeout, config, logger, spinner) {
      var out;
      out = {};
      out.logger = logger;
      out.format = out.f = function() {
        var args, i, s;
        s = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        i = args.length;
        while (i--) {
          s = s.replace(new RegExp("\\{" + i + "\\}", "gm"), args[i]);
        }
        return s;
      };
      out.activateController = function(promises, controllerId) {
        out.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $q.all(promises).then(function(args) {
          var data;
          data = {
            controllerId: controllerId
          };
          return out.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      out.broadcast = function() {
        return $rootScope.$broadcast.apply($rootScope, arguments);
      };
      return out;
    }
  ]);
  return module;
});
