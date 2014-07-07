define(["./module", "json!cities", "json!categories"], function(module, cities, categories) {
  return module.controller("CreateJobCtrl", [
    "$scope", "$state", "$http", "appUser", "logger", "cAPI", function($scope, $state, $http, appUser, log, API) {
      var job;
      $scope.title1 = "Enter job details";
      $scope.title2 = "Upload job photos";
      $scope.firstStep = true;
      $scope.secondStep = false;
      job = {
        dateFrom: new Date,
        dateTo: new Date
      };
      job.jobPhotos = [];
      $scope.job = job;
      $scope.subcategories = [];
      $scope.categories = Object.keys(categories);
      $scope.getCities = function() {
        return cities;
      };
      $scope.categoryChanged = function() {
        var jsonFile;
        jsonFile = categories[$scope.job.category];
        console.log(jsonFile);
        console.log($scope.job.category);
        return $.get("shared/resources/categories/" + jsonFile + ".json", function(data) {
          console.log(data);
          $scope.subcategories = data.subcategories.slice();
          return $scope.$digest();
        });
      };
      $scope.create = function() {
        return $http.post(API.createJob, job).success(function(data) {
          console.log(data);
          log.success("Job created!");
          appUser.createdJobs || (appUser.createdJobs = []);
          appUser.createdJobs.push(data);
          console.log(appUser, appUser.createJobs);
          return $state.transitionTo("customer.jobs");
        }).error(function(err) {
          log.error(err);
          return $state.transitionTo("customer");
        });
      };
      $scope.nextStep = function() {
        $scope.firstStep = false;
        return $scope.secondStep = true;
      };
      $scope.prevStep = function() {
        $scope.firstStep = true;
        return $scope.secondStep = false;
      };
      return $scope.photoUploaded = function(file, content) {
        console.log(file, content);
        return console.log(job);
      };
    }
  ]);
});
