define(["./module"], function(module) {
  return module.directive("ccNavigation", [
    "$state", "$rootScope", function($state, $rootScope) {
      return $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        return console.log("state changed", menu);
      });
    }
  ]);
});
