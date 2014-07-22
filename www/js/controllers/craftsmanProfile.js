define(["./module", "moment", "json!categories"], function(module, moment, categories) {
  return module.controller("CraftsmanProfileCtrl", [
    "$scope", "$http", "$upload", "appUser", "common", "config", "logger", "cAPI", function($scope, $http, $upload, appUser, common, config, log, API) {
      var spinnerEv;
      spinnerEv = config.events.ToggleSpinner;
      $scope.editing = false;
      $scope.ratings = appUser.rating.jobs;
      $scope.jobs = [];
      $scope.profile = {};
      $scope.buttonText = "";
      $scope.categories = appUser.categories;
      $scope.availableCategories = Object.keys(categories);
      $scope.tempProfile = {};
      $scope.jobContainer = "#job-div-0";
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
        $scope.editing = !$scope.editing;
        return $scope.tempProfile = angular.copy(appUser);
      };
      $scope.updateProfile = function() {
        $scope.editing = false;
        $scope.categories = $scope.tempProfile.categories;
        $http.post(API.updateProfile, $scope.tempProfile).success(function() {
          log.success("Profile updated");
          return appUser = angular.copy($scope.tempProfile);
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
        $scope.currentJob = {};
        $scope.profile = {};
        return $scope.buttonText = "";
      };
      $scope.viewJob = function(jobId, index) {
        var curEl, job, prevEl, _i, _len, _ref, _ref1;
        prevEl = $($scope.jobContainer);
        $scope.jobContainer = "#job-div-" + index;
        curEl = $($scope.jobContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
        if ($scope.jobs.length !== 0) {
          _ref = $scope.jobs;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            if (job._id === jobId) {
              $scope.currentJob = angular.copy(job);
            }
          }
        }
        if (((_ref1 = $scope.currentJob) != null ? _ref1._id : void 0) === jobId) {
          $scope.dateFrom = moment($scope.currentJob.dateFrom).format("DD/MM/YY");
          $scope.dateTo = moment($scope.currentJob.dateTo).format("DD/MM/YY");
        } else {
          $http.get(API.findJob.format("" + jobId)).success(function(data) {
            alert($scope.currentJob);
            log.success("Job fetched!");
            $scope.currentJob = angular.copy(data[0]);
            alert($scope.currentJob);
            $scope.dateFrom = moment(data[0].dateFrom).format("DD/MM/YY");
            $scope.dateTo = moment(data[0].dateTo).format("DD/MM/YY");
            return $scope.jobs.push($scope.currentJob);
          }).error(function(e) {
            return log.error(e);
          });
        }
        coole.log(typeof $scope.jobs === "function" ? $scope.jobs("JOBS") : void 0);
      };
    }
  ]);
});
