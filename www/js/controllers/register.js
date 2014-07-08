define(["./module", "json!cities", "json!categories"], function(module, cities, categories) {
  return module.controller("RegisterCtrl", [
    "$scope", "$http", "$q", "$state", "cAPI", "common", "logger", function($scope, $http, $q, $state, API, common, logger) {
      var activate;
      $scope.userDetails = {};
      $scope.acceptedTOS = false;
      $scope.images = ["img/quality.jpg", "img/master.jpg", "img/approved.jpg"];
      $scope.select2Options = {
        'multiple': true,
        'simple_tags': true,
        'tags': []
      };
      $scope.categories = categories;
      $scope.multi = {
        multiple: true,
        query: function(query) {
          return query.callback({
            results: categories
          });
        }
      };
      $scope.allTags = $scope.select2Options.tags;
      ($scope.fetchTags = function() {
        var k, v;
        return $q.all((function() {
          var _ref, _results;
          _ref = $scope.categories;
          _results = [];
          for (k in _ref) {
            v = _ref[k];
            _results.push($http.get("shared/resources/categories/" + v + ".json"));
          }
          return _results;
        })()).then((function(_this) {
          return function(data) {
            return data.forEach(function(cat) {
              var catName, tags;
              catName = cat.data.category;
              tags = cat.data.subcategories.map(function(subcat) {
                return "" + catName + " > " + subcat;
              });
              return $scope.allTags = $scope.allTags.concat(tags);
            });
          };
        })(this));
      })();
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
        return common.post(url, $scope.userDetails).success((function(_this) {
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
      };
      $("input").bind("keyup change", function() {
        var $par, $t, match, min, pattern;
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
        return common.activateController([$scope.fetchTags()], "RegisterCtrl");
      })();
    }
  ]);
});
