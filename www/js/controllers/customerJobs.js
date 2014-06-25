define(["./module"], function(module) {
  return module.controller("CustomerJobsCtrl", [
    "$scope", "user", function($scope, user) {
      var getPage;
      $scope.sizePerPage = 3;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      getPage = function(pageIndex) {
        var startIndex;
        startIndex = $scope.sizePerPage * pageIndex;
        console.debug(startIndex, $scope.sizePerPage);
        return user.createdJobs.slice(startIndex, startIndex + $scope.sizePerPage);
      };
      $scope.createdJobsPaged = getPage(0);
      $scope.deleteJob = function(id) {
        return console.debug("DELETING", id);
      };
      return $scope.pageSelected = function(page) {
        console.debug(page);
        return $scope.createdJobsPaged = getPage(page.page - 1);
      };
    }
  ]);
});
