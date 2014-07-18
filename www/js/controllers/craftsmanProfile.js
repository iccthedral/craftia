define(["./module", "moment"], function(module, moment) {
  return module.controller("CraftsmanProfileCtrl", [
    "$scope", "$http", "$upload", "appUser", "common", "config", "logger", "cAPI", function($scope, $http, $upload, appUser, common, config, log, API) {
      var spinnerEv;
      spinnerEv = config.events.ToggleSpinner;
      $scope.editing = false;
      $scope.ratings = appUser.rating.jobs;
      $scope.jobs = [];
      $scope.profile = {};
      $scope.buttonText = "";
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
      $scope.updateProfile = function() {
        $scope.editing = false;
        $http.post(API.updateProfile, appUser).success(function() {
          return log.success("Profile updated");
        }).error(function(e) {
          return log.error(e);
        });
      };
      $scope.viewProfile = function(profileId) {
        if ($scope.profile._id === void 0) {
          $scope.profile._id = profileId;
          $scope.buttonText = " - hide profile";
        } else {
          $scope.buttonText = "";
          $scope.profile = {};
        }
      };
      $scope.hideJob = function(jobId) {
        $scope.job = {};
        $scope.profile = {};
        return $scope.buttonText = "";
      };
      $scope.viewJob = function(jobId) {
        var job, _i, _len, _ref, _ref1;
        if ($scope.jobs.length !== 0) {
          _ref = $scope.jobs;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            if (job._id === jobId) {
              $scope.job = angular.copy(job);
            }
          }
        }
        if (((_ref1 = $scope.job) != null ? _ref1._id : void 0) === jobId) {
          $scope.dateFrom = moment($scope.job.dateFrom).format("DD/MM/YY");
          return $scope.dateTo = moment($scope.job.dateTo).format("DD/MM/YY");
        } else {
          return $http.get(API.findJob.format("" + jobId)).success(function(data) {
            log.success("Job fetched!");
            $scope.job = angular.copy(data[0]);
            $scope.dateFrom = moment(data[0].dateFrom).format("DD/MM/YY");
            $scope.dateTo = moment(data[0].dateTo).format("DD/MM/YY");
            return $scope.jobs.push($scope.job);
          }).error(function(e) {
            return log.error(e);
          });
        }
      };
    }
  ]);
});
