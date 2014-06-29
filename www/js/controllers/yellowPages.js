define(["./module"], function(module) {
  return module.controller("YellowPagesCtrl", [
    "$scope", "$http", "$state", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", function($scope, $http, $state, API, logger, common, config, categoryPictures, gmaps) {
      var activate, getPage, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredCraftsmen = [];
      $scope.totalCraftsmen = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      getPage = function(pageIndex) {
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(API.craftsmen.format("" + pageIndex)).success(function(data) {
          $scope.totalCraftsmen = data.totalCraftsmen;
          $scope.craftsmen = data.craftsmen;
          return $scope.filteredCraftsmen = data.craftsmen.slice();
        }).then(function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.showInfo = function(job, index) {
        console.log(job, index);
        ($($scope.infoContainer)).slideToggle();
        $scope.infoContainer = "#pics-div-" + index;
        ($($scope.infoContainer)).slideToggle();
      };
      $scope.search = function() {};
      getPage(0);
      return (activate = function() {
        var getCraftsmanPaged;
        getCraftsmanPaged = $http.get(API.craftsmen.format($scope.currentPage)).success(function(data) {
          $scope.filteredJobs = data;
          return $state.transitionTo("anon.yellowPages");
        }).error(function(err) {
          return logger.error(err);
        });
        return common.activateController([getCraftsmanPaged], "YellowPagesCtrl");
      })();
    }
  ]);
});
