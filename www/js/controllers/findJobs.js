define(["./module", "json!cities", "json!categories"], function(module, cities, categories) {
  return module.controller("FindJobsCtrl", [
    "$scope", "$http", "$state", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", function($scope, $http, $state, API, logger, common, config, categoryPictures, gmaps) {
      var activate, getCities, getPage, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredJobs = [];
      $scope.totalJobs = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      $scope.subcategories = [];
      $scope.categories = Object.keys(categories);
      $scope.cities = cities;
      getPage = function(pageIndex) {
        if (pageIndex == null) {
          pageIndex = 0;
        }
        return common.get(API.getPagedOpenJobs.format("" + pageIndex)).success(function(data) {
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
      getCities = function() {
        debugger;
        return $scope.cities = cities;
      };
      $scope.categoryChanged = function(cat) {
        var jsonFile;
        jsonFile = categories[job.category];
        console.log(jsonFile, job);
        return require(["json!" + jsonFile], function(data) {
          $scope.subcategories = data.subcategories.slice();
          return $scope.$digest();
        });
      };
      $scope.showInfo = function(job, index) {
        ($($scope.infoContainer)).slideUp();
        $scope.infoContainer = "#pics-div-" + index;
        ($($scope.infoContainer)).slideDown();
      };
      $scope.search = function() {};
      return (activate = function() {
        return common.activateController([getPage, getCities], "FindJobsCtrl");
      })();
    }
  ]);
});
