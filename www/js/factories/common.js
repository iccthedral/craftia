define(["factories/module"], function(module) {
  module.factory("common", [
    "$q", "$rootScope", "$timeout", "config", "logger", function($q, $rootScope, $timeout, config, logger) {
      var out;
      out = {};
      logger.success("Hi there");
      out.activateController = function(promises, controllerId) {
        return $q.all(promises).then(function(args) {
          var data;
          data = {
            controllerId: controllerId
          };
          return $broadcast(config.Events.ControllerActivatedSuccess);
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
