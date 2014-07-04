define(["factories/module"], function(module) {
  return module.factory("logger", [
    "$log", "config", function($log, config) {
      var logIt, out;
      $.extend(toastr.options, config.toastr);
      logIt = function(message, data, source, showToast, toastType) {
        var write;
        if (showToast == null) {
          showToast = true;
        }
        write = toastType === 'error' ? $log.error : $log.log;
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
      return out = {
        getLogFn: function(moduleId, fnName) {
          var fname;
          fname = fnName.toLowerCase();
          return out[fname];
        },
        log: function(message, data, source, showToast) {
          return logIt(message, data, source, showToast, "info");
        },
        warning: function(message, data, source, showToast) {
          return logIt(message, data, source, showToast, "warning");
        },
        error: function(message, data, source, showToast) {
          if ((message.statusText != null) && (message.responseText != null)) {
            message = "" + message.statusText + " - " + message.responseText;
          }
          return logIt(message, data, source, showToast, "error");
        },
        success: function(message, data, source, showToast) {
          return logIt(message, data, source, showToast, "success");
        }
      };
    }
  ]);
});
