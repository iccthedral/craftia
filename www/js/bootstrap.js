define(["require", "angular", "app", "capi", "toastr", "ngRoutes", "ngSanitize", "ngUiRouter", "routes"], function(require, ng, app) {
  app.config([
    "$provide", function($provide) {
      return $provide.decorator("$exceptionHandler", [
        "$delegate", "config", "logger", function($delegate, config, logger) {
          var prefix;
          prefix = config.errorPrefix;
          return function(exception, cause) {
            var err, msg;
            $delegate(exception, cause);
            if ((prefix != null) && exception.message.indexOf(prefix) === 0) {
              return;
            }
            err = {
              exception: exception,
              cause: cause
            };
            msg = "" + prefix + " - " + exception.message;
            return logger.error(msg, err, true);
          };
        }
      ]);
    }
  ]);
  return require(["domReady!"], function(document) {
    return ng.bootstrap(document, ["app"]);
  });
});
