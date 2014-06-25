define(["directives/module"], function(module) {
  return module.directive("crAuth", [
    "user", "$rootScope", function(user, $rootScope) {
      return {
        link: function($scope, element, attrs) {
          var expr;
          user = $rootScope.user;
          expr = user.isLoggedIn;
          if (expr) {
            $(element).show();
          }
          return $rootScope.$watch("user.isLoggedIn", function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            if (newVal) {
              return $(element).show();
            } else {
              return $(element).hide();
            }
          });
        },
        restrict: "A"
      };
    }
  ]);
});
