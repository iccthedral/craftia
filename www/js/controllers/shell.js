define(["controllers/module", "angular"], function(module, angular) {
  return module.controller("ShellCtrl", [
    "$scope", "$rootScope", "$http", "$state", "config", "user", function($scope, $rootScope, $http, $state, config, user) {
      $scope.busyMessage = "Loading...";
      $scope.isBusy = false;
      $scope.spinnerOptions = {
        radius: 40,
        lines: 7,
        length: 0,
        width: 30,
        speed: 1.7,
        corners: 1.0,
        trail: 100,
        color: "#F58A00"
      };
      $scope.toggleSpinner = function(val) {
        return $scope.isBusy = val;
      };
      $rootScope.$on("$locationChangeStart", function(event, next, curr) {
        return $scope.toggleSpinner(true);
      });
      $rootScope.$on("$locationChangeSuccess", function(event, next, curr) {
        return $scope.toggleSpinner(false);
      });
      return $rootScope.$on(config.events.ToggleSpinner, function(_, data) {
        return $scope.toggleSpinner(data.show);
      });
    }
  ]);
});
