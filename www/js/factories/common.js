var __slice = [].slice;

define(["factories/module"], function(module) {
  return module.factory("common", [
    "$http", "$q", "$rootScope", "$timeout", "config", "logger", function($http, $q, $rootScope, $timeout, config, logger) {
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
      out.get = function(url) {
        var defer;
        out.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        defer = $http.get(url);
        defer["finally"](function() {
          return out.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
        return defer;
      };
      out.post = function(url, data) {
        var defer;
        out.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        defer = $http.post(url, data);
        defer["finally"](function() {
          return out.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
        return defer;
      };
      out.activateController = function(promises, controllerId) {
        out.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        logger.log("Activating " + controllerId + " controller");
        return $q.all(promises).then(function(args) {
          var data;
          data = {
            controllerId: controllerId
          };
          logger.success("Controller " + controllerId + " activated");
          return out.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      out.broadcast = function() {
        console.log(arguments);
        return $rootScope.$broadcast.apply($rootScope, arguments);
      };
      return out;
    }
  ]);
});
