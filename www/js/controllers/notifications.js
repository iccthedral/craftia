define(["./module"], function(module) {
  return module.controller("NotificationsCtrl", [
    "$scope", "user", function($scope, user) {
      $scope.notifications = user.notifications;
      return console.log($scope.notifications);
    }
  ]);
});
