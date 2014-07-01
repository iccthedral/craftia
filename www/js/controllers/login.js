define(["./module"], function(module) {
  return module.controller("LoginCtrl", [
    "$scope", "$http", "$state", "cAPI", "appUser", "logger", function($scope, $http, $state, cAPI, appUser, logger) {
      $scope.loginDetails = {
        email: "",
        password: "",
        rememberme: false
      };
      return $scope.login = function() {
        return $http.post(cAPI.login, $scope.loginDetails).error((function(_this) {
          return function(err) {
            logger.error(err);
            return $state.transitionTo("anon");
          };
        })(this)).success((function(_this) {
          return function(data) {
            appUser.load(data);
            if (data.type === "Customer") {
              return $state.transitionTo("customer");
            } else if (data.type === "Craftsman") {
              return $state.transitionTo("craftsman");
            } else {
              return $state.transitionTo("anon");
            }
          };
        })(this));
      };
    }
  ]);
});
