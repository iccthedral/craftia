define(["./module", "json!cities", "json!categories"], function(module, cities, categories) {
  return module.controller("RegisterCtrl", [
    "$scope", "$http", "$q", "common", "logger", function($scope, $http, $q, common, logger) {
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
      $scope.allTags = $scope.select2Options.tags;
      $scope.fetchTags = function() {
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
            console.log(data);
            data.forEach(function(cat) {
              var catName, tags;
              catName = cat.data.category;
              tags = cat.data.subcategories.map(function(subcat) {
                return "" + catName + " > " + subcat;
              });
              return $scope.allTags = $scope.allTags.concat(tags);
            });
            return console.log($scope.allTags);
          };
        })(this));
      };
      $scope.getCities = function(val) {
        return cities;
      };
      $scope.register = function() {
        var curState, url;
        if (!$scope.acceptedTOS) {
          $scope.log.error("Please check whether you agree with the terms & conditions");
          return;
        }
        curState = $scope.state.current.name;
        url = $scope.API.registerCraftsman;
        if (curState === "anon.register.customer") {
          url = $scope.API.registerCustomer;
        }
        return $scope.http.post(url, $scope.userDetails).success((function(_this) {
          return function() {
            $scope.log.success("You are now registered");
            return $scope.state.transitionTo("anon.login");
          };
        })(this)).error((function(_this) {
          return function(err) {
            return $scope.log.error(err);
          };
        })(this));
      };
      return (activate = function() {
        return common.activateController([$scope.fetchTags()], "RegisterCtrl");
      })();
    }
  ]);
});
