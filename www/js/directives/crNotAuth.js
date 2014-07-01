define(["directives/module"], function(module) {
  return module.directive("crNotAuth", [
    "appUser", "$rootScope", function(appUser, $rootScope) {
      return {
        link: function($scope, element, attrs) {
          var expr;
          element = $(element);
          expr = appUser.isLoggedIn;
          if (expr) {
            element.hide();
          }
          return $rootScope.$watch("appUser.isLoggedIn", function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            if (newVal) {
              return element.hide();
            } else {
              return element.show();
            }
          });
        },
        restrict: "A"
      };
    }
  ]);
});
