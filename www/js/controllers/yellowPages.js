define(["./module"], function(module) {
  return module.controller("YellowPagesCtrl", [
    "$scope", "$http", "$state", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", function($scope, $http, $state, API, logger, common, config, categoryPictures, gmaps) {
      var getPage, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredCraftsmen = [];
      $scope.totalCraftsmen = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      getPage = function(pageIndex) {
        if (pageIndex == null) {
          pageIndex = 0;
        }
        return common.get(API.craftsmen.format("" + pageIndex)).success(function(data) {
          $scope.totalCraftsmen = data.totalCraftsmen;
          $scope.craftsmen = data.craftsmen;
          return $scope.filteredCraftsmen = data.craftsmen.slice();
        });
      };
      $scope.pageSelected = function(page) {
        console.log(page);
        return getPage(page - 1);
      };
      $scope.showInfo = function(job, index) {
        ($($scope.infoContainer)).slideToggle();
        $scope.infoContainer = "#pics-div-" + index;
        ($($scope.infoContainer)).slideToggle();
      };
      $scope.search = function() {};
      return common.activateController([getPage()], "YellowPagesCtrl");
    }
  ]);
});
