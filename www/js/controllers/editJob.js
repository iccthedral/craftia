define(["./module", "json!cities", "json!categories"], function(module, cities, categories) {
  return module.controller("EditJobCtrl", [
    "$scope", "$state", "$http", "user", "logger", "common", "cAPI", function($scope, $state, $http, user, log, common, API) {
      var job, jobId, jsonFile;
      jobId = $state.params.jobId;
      $scope.title = "Update job";
      $scope.job = job = (user.createdJobs.filter(function(job) {
        return job._id === jobId;
      }))[0];
      job.dateFrom = new Date(JSON.parse(JSON.stringify(job.dateFrom)));
      job.dateTo = new Date(JSON.parse(JSON.stringify(job.dateTo)));
      $scope.currentPhotoIndex = 0;
      $scope.categories = Object.keys(categories);
      if (job.category != null) {
        jsonFile = categories[job.category];
        require(["json!" + jsonFile], function(data) {
          $scope.subcategories = data.subcategories.slice();
          $scope.subcategory = $scope.subcategories[0];
          return $scope.$digest();
        });
      }
      $scope.getCities = function() {
        return cities;
      };
      $scope.categoryChanged = function(cat) {
        jsonFile = categories[job.category];
        return require(["json!" + jsonFile], function(data) {
          $scope.subcategories = data.subcategories.slice();
          return $scope.$digest();
        });
      };
      $scope.setFocusOnPhoto = function(index) {
        if (job.jobPhotos[index].img == null) {
          return $scope.currentPhotoIndex = null;
        } else {
          return $scope.currentPhotoIndex = index;
        }
      };
      return $scope.update = function() {
        return $http.post(common.format(API.updateJob, jobId), job).success(function(data) {
          $.extend($scope.job, data);
          log.success("Job updated!");
          return $state.transitionTo("customer.jobs");
        }).error(function(err) {
          log.error(err);
          return $state.transitionTo("customer");
        });
      };
    }
  ]);
});
