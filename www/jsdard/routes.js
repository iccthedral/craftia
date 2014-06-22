(function() {
  define(["app"], function(app) {
    return app.config([
      "$routeProvider", function(routeProvider) {
        return routeProvider.when("/", {
          templateUrl: "app/layout/shell.html",
          controller: "shellCtrl"
        });
      }
    ]);
  });

}).call(this);
