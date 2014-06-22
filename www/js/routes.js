define(["app"], function(app) {
  return app.config([
    "$routeProvider", function(routeProvider) {
      return routeProvider.when("/", {
        templateUrl: "templates/layout/shell.html",
        controller: "shellCtrl"
      });
    }
  ]);
});
