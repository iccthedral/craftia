define(["directives/module"], function(module) {
  return module.directive("crAuth", [
    "appUser", "$rootScope", function(appUser, $rootScope) {
      return {
        link: function($scope, element, attrs) {
          var expr;
          expr = appUser.isLoggedIn;
          if (expr) {
            $(element).show();
          }
          return $rootScope.$watch("appUser.isLoggedIn", function(newVal, oldVal) {
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
