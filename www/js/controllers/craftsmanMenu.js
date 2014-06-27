define(["./module"], function(module) {
  var getPage;
  return module.controller("FindJobsCtrl", [
    "$scope", "$http", "$state", "cAPI", "logger", "common", function($scope, $http, $state, API, logger, common) {
      var state;
      state = $state.current.name;
      return $scope.filteredJobs = [];
    }, $scope.totalJobs = 0, $scope.searchQueries = {}, $scope.sizePerPage = 5, $scope.selectedPage = 0, $scope.currentPage = 0, getPage = function(pageIndex) {
      common.broadcast(config.events.ToggleSpinner, {
        show: true
      });
      return $http.get(API.getPagedOpenJobs.format("" + pageIndex)).success(function(data) {
        $scope.totalJobs = data.jobs;
        $scope.jobs = data.jobs;
        return $scope.filteredJobs = data.jobs.slice();
      }).then(function() {
        return common.broadcast(config.events.ToggleSpinner, {
          show: false
        });
      });
    }, $scope.pageSelected = function(page) {
      return getPage(page.page - 1);
    }, $scope.search = function() {}, common.activateController([getPage(0)], "CraftsmanMenuCtrl")
  ]);
});
