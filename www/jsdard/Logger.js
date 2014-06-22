(function() {
  define(["CommonProvider"], function() {
    var Logger;
    angular.module("Common").factory("Logger", ["$log", Logger]);
    Logger = (function() {
      function Logger(log) {
        this.log = log;
        return this;
      }

      Logger.prototype.getLogFn = function(moduleId, fnName) {
        var fname;
        fname = fnName.toLowerCase();
        return this[fname];
      };

      Logger.prototype.logIt = function(message, data, source, showToast, toastType) {
        var write;
        write = toastType === 'error' ? this.log.error : this.log.log;
        source = source ? '[' + source + '] ' : '';
        write(source, message, data);
        if (showToast) {
          if (toastType === 'error') {
            return toastr.error(message);
          } else if (toastType === 'warning') {
            return toastr.warning(message);
          } else if (toastType === 'success') {
            return toastr.success(message);
          } else {
            return toastr.info(message);
          }
        }
      };

      Logger.prototype.log = function(message, data, source, showToast) {
        return logIt(message, data, source, showToast, "info");
      };

      Logger.prototype.warning = function(message, data, source, showToast) {
        return logIt(message, data, source, showToast, "warning");
      };

      Logger.prototype.error = function(message, data, source, showToast) {
        return logIt(message, data, source, showToast, "error");
      };

      Logger.prototype.success = function(message, data, source, showToast) {
        return logIt(message, data, source, showToast, "success");
      };

      return Logger;

    })();
    return Logger;
  });

}).call(this);
