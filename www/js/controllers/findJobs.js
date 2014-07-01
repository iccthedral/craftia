define(["./module"], function(module) {
  return module.controller("FindJobsCtrl", [
    "$scope", "$http", "$state", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", function($scope, $http, $state, API, logger, common, config, categoryPictures, gmaps) {
      var activate, getPage, state;
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
          var job, _i, _len, _ref;
          _ref = data.jobs;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            job.jobPhotos = job.jobPhotos.filter(function(img) {
              return img.img != null;
            });
          }
          $scope.totalJobs = data.totalJobs;
          $scope.jobs = data.jobs;
          return $scope.filteredJobs = data.jobs.slice();
        })["finally"](function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.showMap = function(job, index) {
        ($($scope.mapContainer)).slideUp();
        $scope.mapContainer = "#gmaps-div-" + index;
        ($($scope.mapContainer)).slideDown();
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
      $scope.showInfo = function(job, index) {
        ($($scope.infoContainer)).slideUp();
        $scope.infoContainer = "#pics-div-" + index;
        ($($scope.infoContainer)).slideDown();
      };
      $scope.search = function() {};
      getPage(0);
      return (activate = function() {
        var getJobsPaged;
        getJobsPaged = $http.get(API.getPagedOpenJobs.format($scope.currentPage)).success(function(data) {
          return $scope.filteredJobs = data;
        }).error(function(err) {
          return logger.error(err);
        });
        return common.activateController([getJobsPaged], "FindJobsCtrl");
      })();
    }
  ]);
});
