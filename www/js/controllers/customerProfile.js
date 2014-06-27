define(["./module"], function(module) {
  return module.controller("CustomerProfileCtrl", [
    "$scope", "$http", "$upload", "user", "common", "config", "logger", "cAPI", function($scope, $http, $upload, user, common, config, log, API) {
      var spinnerEv;
      spinnerEv = config.events.ToggleSpinner;
      $scope.uploadPhoto = function(files) {
        common.broadcast(spinnerEv, {
          show: true
        });
        return $scope.upload = ($upload.upload({
          url: "user/uploadpicture",
          file: files[0]
        })).success(function(picurl) {
          return user.profilePic = picurl;
        }).then(function() {
          return common.broadcast(spinnerEv, {
            show: false
          });
        });
      };
      return $scope.updateProfile = function() {
        return $http.post(API.updateProfile).success(function() {
          return log.success("Profile updated");
        }).error(function(e) {
          return log.error(e);
        });
      };
    }
  ]);
});
