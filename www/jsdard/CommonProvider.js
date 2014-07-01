(function() {
  define(["Logger"], function() {
    var CommonModule, CommonProvider;
    CommonModule = angular.module("Common");
    CommonModule.provider("Config", function() {
      this.Events = {
        ControllerActivatedSuccess: "ControllerActivatedSuccess",
        SpinnerToggle: "SpinnerToggle"
      };
      return this.get = function() {
        return this;
      };
    });
    CommonModule.factory("Common", ["$q", "$rootScope", "Config", "Logger"], CommonProvider);
    CommonProvider = (function() {
      function CommonProvider(q, rootScope, config, logger) {
        this.q = q;
        this.rootScope = rootScope;
        this.config = config;
        this.logger = logger;
        return this;
      }

      CommonProvider.prototype.activateController = function(promises, controllerId) {
        return $q.all(promises).then(function(args) {
          var data;
          data = {
            controllerId: controllerId
          };
          return this.broadcast(this.config.Events.ControllerActivatedSuccess);
        });
      };

      CommonProvider.prototype.broadcast = function() {
        return this.rootScope.$broadcast.apply(this.rootScope, arguments);
      };

      return CommonProvider;

    })();
    return CommonModule;
  });

}).call(this);
