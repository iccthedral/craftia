define(["./module"], function(module) {
  return module.controller("FindJobsCtrl", [
    "$scope", "$http", "$state", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", function($scope, $http, $state, API, logger, common, config, categoryPictures, gmaps) {
      var getPage, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredJobs = [];
      $scope.totalJobs = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      getPage = function(pageIndex) {
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(API.getPagedOpenJobs.format("" + pageIndex)).success(function(data) {
          $scope.totalJobs = data.totalJobs;
          $scope.jobs = data.jobs;
          return $scope.filteredJobs = data.jobs.slice();
        }).then(function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.showMap = function(job, index) {
        ($($scope.mapContainer)).slideToggle();
        $scope.mapContainer = "#gmaps-div-" + index;
        ($($scope.mapContainer)).slideToggle();
        if ($scope.currentMap != null) {
          $($scope.currentMap.el).empty();
        }
        return $scope.currentMap = gmaps.showAddress({
          address: job.address.city,
          container: $scope.mapContainer,
          done: function() {
            $scope.currentMap.refresh();
            return console.log('iamdone');
          }
        });
      };
      $scope.search = function() {};
      return getPage(0);
    }
  ]);
});
