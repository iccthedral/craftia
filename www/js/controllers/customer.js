define(["./module"], function(module) {
  return module.controller("CustomerCtrl", [
    "$scope", "user", function($scope, user) {
      $scope.createdJobsPaged = function() {};
      return $scope.deleteJob = function(index) {
        return console.log(index);
      };
    }
  ]);
});
