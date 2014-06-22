(function() {
  define(["providers/module"], function(module) {
    var CommonFactory;
    module.provider("config", function() {
      this.config = {
        events: {
          ActivateController: "ActivateController",
          ToggleSpinner: "ToggleSpinner"
        }
      };
      this.$get = function() {
        return this.config;
      };
      return this;
    });
    CommonFactory = (function() {
      function CommonFactory(q, rootScope, timeout, config, logger) {
        this.q = q;
        this.rootScope = rootScope;
        this.timeout = timeout;
        this.config = config;
        this.logger = logger;
        console.log(this);
        return this;
      }

      return CommonFactory;

    })();
    module.factory("common", [
      "$q", "$rootScope", "$timeout", "config", "logger", function($q, $rootScope, $timeout, config, logger) {
        var out;
        out = {};
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

}).call(this);
