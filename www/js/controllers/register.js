define(["./module", "json!cities", "json!categories", "select2"], function(module, cities, categories, select2) {
  return module.controller("RegisterCtrl", [
    "$scope", "$http", "$q", "$state", "cAPI", "common", "logger", function($scope, $http, $q, $state, API, common, logger) {
      var activate, findCategory;
      $scope.userDetails = {};
      $scope.acceptedTOS = false;
      $scope.images = ["img/quality.jpg", "img/master.jpg", "img/approved.jpg"];
      $scope.selection = "aa";
      $scope.availableCategories = Object.keys(categories);
      findCategory = function(value) {
        var cat, _i, _len, _ref;
        if ($scope.categories != null) {
          _ref = $scope.categories;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            cat = _ref[_i];
            if (cat === value) {
              return value;
            }
          }
        }
      };
      $scope.getCities = function(val) {
        return cities;
      };
      $scope.register = function() {
        var curState, url;
        if (!$scope.acceptedTOS) {
          return;
        }
        curState = $state.current.name;
        url = API.registerCraftsman;
        if (curState === "anon.register.customer") {
          url = API.registerCustomer;
        }
        common.post(url, $scope.userDetails).success((function(_this) {
          return function(data) {
            $scope.reppass = "";
            logger.success("You are now registered");
            logger.log(data.msg);
            return $state.transitionTo("anon.login");
          };
        })(this)).error((function(_this) {
          return function(err) {
            return logger.error(err);
          };
        })(this));
        $scope.placeholders = {
          placeholders: "Select a category"
        };
        return $scope.selectedCategory = "";
      };
      return (activate = function() {
        return common.activateController([], "RegisterCtrl");
      })();
    }
  ]);
});
