define(["./module", "ngSpinner"], function(module, Spinner) {
  return module.directive("ccSpinner", [
    "$window", function($window) {
      var directive;
      return directive = {
        restrict: "A",
        link: function(scope, element, attrs) {
          scope.spinner = null;
          return scope.$watch(attrs.ccSpinner, function(opts) {
            if (scope.spinner != null) {
              scope.spinner.stop();
            }
            scope.spinner = new Spinner(opts);
            return scope.spinner.spin(element[0]);
          }, true);
        }
      };
    }
  ]);
});
