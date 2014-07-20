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
          logger.error("Please check whether you agree with the terms & conditions");
          return;
        }
        curState = $state.current.name;
        url = API.registerCraftsman;
        if (curState === "anon.register.customer") {
          url = API.registerCustomer;
        }
        common.post(url, $scope.userDetails).success((function(_this) {
          return function(data) {
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
      $("input").bind("keyup", function() {
        var $par, $t, match, min, pattern;
        console.log($scope.categories);
        $t = $(this);
        $par = $t.parent();
        min = $t.attr("data-valid-min");
        match = $t.attr("data-valid-match");
        pattern = $t.attr("pattern");
        if (typeof match !== "undefined") {
          if ($t.val() !== $('#' + match).val()) {
            $par.removeClass('has-success').addClass('has-error');
          } else {
            $par.removeClass('has-error').addClass('has-success');
          }
        } else if (!this.checkValidity()) {
          $par.removeClass('has-success').addClass('has-error');
        } else {
          $par.removeClass('has-error').addClass('has-success');
        }
        if ($par.hasClass("has-success")) {
          return $par.find('.form-control-feedback').removeClass('fade');
        } else {
          return $par.find('.form-control-feedback').addClass('fade');
        }
      });
      return (activate = function() {
        return common.activateController([], "RegisterCtrl");
      })();
    }
  ]);
});
