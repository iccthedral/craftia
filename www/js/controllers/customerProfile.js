define(["./module"], function(module) {
  return module.controller("CustomerProfileCtrl", [
    "$scope", "$http", "$upload", "appUser", "common", "config", "logger", "cAPI", function($scope, $http, $upload, appUser, common, config, log, API) {
      var spinnerEv;
      spinnerEv = config.events.ToggleSpinner;
      $scope.editing = false;
      $scope.uploadPhoto = function(files) {
        common.broadcast(spinnerEv, {
          show: true
        });
        return $scope.upload = ($upload.upload({
          url: "user/uploadpicture",
          file: files[0]
        })).success(function(picurl) {
          return appUser.profilePic = picurl;
        }).then(function() {
          return common.broadcast(spinnerEv, {
            show: false
          });
        });
      };
      $scope.editProfile = function() {
        return $scope.editing = true;
      };
      return $scope.updateProfile = function() {
        $scope.editing = false;
        return $http.post(API.updateProfile, appUser).success(function() {
          return log.success("Profile updated");
        }).error(function(e) {
          return log.error(e);
        });
      };
    }
  ]);
});
