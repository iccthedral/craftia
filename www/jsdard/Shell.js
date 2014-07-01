(function() {
  define(["CommonProvider"], function() {
    var Shell;
    Shell = (function() {
      function Shell(rootScope, common, config) {
        this.rootScope = rootScope;
        this.common = common;
        this.config = config;
        this.id = "Shell";
        this.busyMessage = "Please wait...";
        this.isBusy = true;
        this.spinnerOptions = {
          radius: 40,
          lines: 7,
          length: 0,
          width: 30,
          speed: 1.7,
          corners: 1.0,
          trail: 100,
          color: '#F58A00'
        };
        this.activate();
        this.rootScope.$on("$routeChangeStart", function(event, next, curr) {
          return this.toggleSpinner(true);
        });
        this.rootScope.$on(this.config.Events.ControllerActivatedSuccess, function(data) {
          return this.toggleSpinner(false);
        });
        this.rootScope.$on(this.config.Events.SpinnerToggle, function(_, data) {
          return this.toggleSpinner(data.show);
        });
      }

      Shell.prototype.toggleSpinner = function(toggle) {
        return this.isBusy = toggle;
      };

      Shell.prototype.activate = function() {
        this.common.logger.success("Craftia loaded!", null, true);
        return this.common.activateController([], this.id);
      };

      return Shell;

    })();
    return Shell;
  });

}).call(this);
