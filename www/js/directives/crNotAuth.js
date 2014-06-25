define(["directives/module"], function(module) {
  return module.directive("crNotAuth", [
    "user", "$rootScope", function(user, $rootScope) {
      return {
        link: function($scope, element, attrs) {
          var expr;
          user = $rootScope.user;
          element = $(element);
          expr = user.isLoggedIn;
          if (expr) {
            element.hide();
          }
          return $rootScope.$watch("user.isLoggedIn", function(newVal, oldVal) {
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
