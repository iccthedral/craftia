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
tScope, arguments);
      };
      return out;
    }
  ]);
  return module;
});
ctivatedSuccess, function(data) {
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
 showToast) {
          return logIt(message, data, source, showToast, "warning");
        },
        error: function(message, data, source, showToast) {
          return logIt(message, data, source, showToast, "error");
        },
        success: function(message, data, source, showToast) {
          return logIt(message, data, source, showToast, "success");
        }
      };
    }
  ]);
});
