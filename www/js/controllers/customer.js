define(["./module"], function(module) {
  return module.controller("CustomerCtrl", [
    "$scope", "user", function($scope, user) {
      return console.log(user);
    }
  ]);
});
