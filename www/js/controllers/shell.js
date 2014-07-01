define(["controllers/module", "angular"], function(module, ng) {
  return module.controller("ShellCtrl", [
    "$scope", "$rootScope", "$http", "$state", "config", "appUser", function($scope, $rootScope, $http, $state, config, appUser) {
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
      $scope.$on("$viewContentLoaded", function() {
        return ng.element("[data-toggle=offcanvas]").on("click", function() {
          ng.element(".row-offcanvas").toggleClass("active");
          return ng.element(".showhide").toggle();
        });
      });
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
        console.log("TOGGLING SPINNER", data.show);
        return $scope.toggleSpinner(data.show);
      });
    }
  ]);
});
