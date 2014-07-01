define(["./module"], function(module) {
  return module.controller("NotificationsCtrl", [
    "$scope", "$http", "$state", "appUser", "cAPI", "common", "config", "logger", function($scope, $http, $state, appUser, API, common, config, logger) {
      var getPage, page, state;
      $scope.searchQuery = "";
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      $scope.notifications = [];
      $scope.filteredNotifications = [];
      state = "" + (appUser.type.toLowerCase());
      page = ".notifications";
      getPage = function(pageIndex) {
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(API.getNotifications.format("" + pageIndex)).success(function(data) {
          $scope.notifications = data.notifications;
          return $state.transitionTo("" + state + page);
        }).error(function(err) {
          return logger.error(err);
        })["finally"](function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.search = function() {
        var text;
        text = $scope.searchQuery;
        return $scope.filteredNotifications = $scope.notifications.filter(function(msg) {
          return msg.type.indexOf(text) !== -1 || msg.message.indexOf(text) !== -1;
        });
      };
      return getPage(0);
    }
  ]);
});
