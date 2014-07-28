define(["./module", "json!cities", "json!categories"], function(module, cities, categories) {
  return module.controller("CreateJobCtrl", [
    "$scope", "$state", "$http", "appUser", "logger", "cAPI", "gmaps", function($scope, $state, $http, appUser, log, API, gmaps) {
      var gm, job;
      $scope.title1 = "Enter job details";
      $scope.title2 = "Upload job photos";
      $scope.mapContainer = "#gmaps-div";
      $scope.firstStep = true;
      $scope.secondStep = false;
      job = {
        dateFrom: new Date,
        dateTo: new Date
      };
      gm = google.maps;
      job.jobPhotos = [];
      $scope.job = job;
      $scope.subcategories = [];
      $scope.categories = Object.keys(categories);
      $scope.showMap = function() {
        var curEl;
        if ((job.address == null) || (job.address.line1 == null) || (job.address.city == null)) {
          return;
        }
        curEl = $($scope.mapContainer);
        curEl.slideToggle();
        if ($scope.currentMap != null) {
          $($scope.currentMap.el).empty();
        }
        return $scope.currentMap = gmaps.showAddress({
          address: job.address.line1 + ", " + job.address.city.name,
          container: $scope.mapContainer,
          done: function() {
            var oms;
            $scope.currentMap.refresh();
            oms = new OverlappingMarkerSpiderfier($scope.currentMap.map);
            $scope.currentMap = gmaps.newMarker({
              address: appUser.address.line1 + ", " + appUser.address.city,
              map: $scope.currentMap,
              done: function() {
                return $scope.currentMap.refresh();
              }
            });
            $scope.job.coordinates = {};
            $scope.job.coordinates.lat = $scope.currentMap.lat;
            return $scope.job.coordinates.lng = $scope.currentMap.lng;
          }
        });
      };
      $scope.getCities = function() {
        return cities;
      };
      $scope.categoryChanged = function() {
        var jsonFile;
        jsonFile = categories[$scope.job.category];
        return $.get("shared/resources/categories/" + jsonFile + ".json", function(data) {
          console.log(data);
          $scope.subcategories = data.subcategories.slice();
          return $scope.$digest();
        });
      };
      $scope.create = function() {
        return $http.post(API.createJob, job).success(function(data) {
          log.success("Job created!");
          appUser.createdJobs || (appUser.createdJobs = []);
          appUser.createdJobs.push(data);
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
