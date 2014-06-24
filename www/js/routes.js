define(["app"], function(app) {
  return app.config([
    "$routeProvider", function(routeProvider) {
      routeProvider.when("/blabla", {
        templateUrl: "templates/layout/dljadlja.html",
        controller: "shellCtrl"
      });
      return routeProvider.when("/login", {
        templateUrl: "templates/layout/loginForm.html",
        controller: "LoginCtrl"
      });
    }
  ]);
});
