define(["./module"], function(module) {
  return module.controller("ForgotPassCtrl", [
    "$scope", "$http", "$state", "cAPI", "common", "logger", function($scope, $http, $state, cAPI, common, logger) {
      $scope.email = "";
      return $scope.reset = function() {
        return common.post(cAPI.forgotPassword, {
          email: $scope.email
        }).error(function(err) {
          return logger.error(err);
        }).success(function(data) {
          return logger.success(data);
        })["finally"](function() {
          return $state.go("anon");
        });
      };
    }
  ]);
});
