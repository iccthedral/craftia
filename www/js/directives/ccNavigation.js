define(["./module"], function(module) {
  return module.directive("ccNavigation", [
    "$state", "$rootScope", function($state, $rootScope) {
      var directive;
      return directive = {
        restrict: "A",
        link: function(scope, element, attrs) {}
      };
    }
  ]);
});
