(function() {
  define(["controllers/module"], function(module) {
    return module.controller("testCtrl", [
      "$scope", function($scope) {
        return $scope.busyMessage = "hi";
      }
    ]);
  });

}).call(this);
