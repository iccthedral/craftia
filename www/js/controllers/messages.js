define(["./module"], function(module) {
  return module.controller("MessagesCtrl", [
    "$scope", "user", function($scope, user) {
      $scope.notifications = user.notifications;
      return console.log($scope.notifications);
    }
  ]);
});
