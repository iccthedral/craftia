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
      job.jobPhotos = [
        {
          img: null,
          description: ""
        }, {
          img: null,
          description: ""
        }, {
          img: null,
          description: ""
        }, {
          img: null,
          description: ""
        }
      ];
      $scope.job = job;
      $scope.currentPhotoIndex = 0;
      $scope.subcategories = [];
      $scope.categories = Object.keys(categories);
      $scope.getCities = function() {
        return cities;
      };
      $scope.categoryChanged = function(cat) {
        var jsonFile;
        jsonFile = categories[job.category];
        console.log(jsonFile, job);
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
      $scope.create = function() {
        return $http.post(API.createJob, job).success(function(data) {
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
      return $scope.storeJobPhoto = function(img, index) {
        $scope.currentPhotoIndex = index;
        return job.jobPhotos[index].img = img.src;
      };
    }
  ]);
});
