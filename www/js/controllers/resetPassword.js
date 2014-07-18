define(["./module"], function(module) {
  return module.controller("ResetPasswordCtrl", [
    "$scope", "$http", "$state", "cAPI", "common", "logger", function($scope, $http, $state, cAPI, common, logger) {
      $scope.data = {
        password: "",
        confirm: ""
      };
      return $scope.updatePassword = function() {
        var data;
        $scope.data.token = $state.params.token;
        console.log($scope.data);
        data = $scope.data;
        return $http.post(cAPI.resetPassword, $scope.data).error(function(err) {
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
