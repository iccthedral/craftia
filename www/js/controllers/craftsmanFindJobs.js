define(["./module", "json!cities", "json!categories"], function(module, cities, categories) {
  return module.controller("CraftsmanFindJobsCtrl", [
    "$scope", "$http", "$state", "cAPI", "appUser", "logger", "common", "config", "categoryPictures", "gmaps", "dialog", function($scope, $http, $state, API, appUser, logger, common, config, categoryPictures, gmaps, dialog) {
      var activate, bidOnJob, getCities, getPage, isBidder, sendMessage, showInfo, showPics, showProfile, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredJobs = [];
      $scope.totalJobs = 0;
      $scope.searchQuery = "";
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      $scope.mapContainer = "#gmaps-div-0";
      $scope.picsContainer = "#pics-div-0";
      $scope.infoContainer = "#info-div-0";
      $scope.profileContainer = "#profile-div-0";
      $scope.bigMapContainer = "#big-map-div";
      $scope.subcategories = [];
      $scope.categories = Object.keys(categories);
      $scope.cities = cities;
      $scope.searchCriterion = {};
      $scope.selectedCategories = appUser.categories;
      $scope.bigMapVisible = false;
      $scope.locations = [];
      $scope.bigMapCity = {};
      (getCities = function() {
        return $scope.cities = cities;
      })();
      $scope.categoryChanged = function() {
        var jsonFile;
        jsonFile = categories[$scope.selectedCategories[0]];
        return $.get("shared/resources/categories/" + jsonFile + ".json", function(data) {
          console.log(data);
          $scope.subcategories = data.subcategories.slice();
          return $scope.$digest();
        });
      };
      $scope.getPage = getPage = function(pageIndex, ignore) {
        if (ignore) {
          return;
        }
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(API.getPagedOpenJobs.format("" + pageIndex)).success(function(data) {
          var job, _i, _len, _ref, _ref1, _ref2;
          _ref = data.jobs != null;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            job.jobPhotos = (_ref1 = job.jobPhotos) != null ? _ref1.filter(function(img) {
              return img.img != null;
            }) : void 0;
          }
          $scope.totalJobs = data.totalJobs;
          return $scope.filteredJobs = (_ref2 = data.jobs) != null ? _ref2.slice() : void 0;
        })["finally"](function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return fPage(page.page - 1);
      };
      $scope.bidOnJob = bidOnJob = function(index) {
        var email, jobId;
        jobId = $scope.filteredJobs[index]._id;
        email = $scope.filteredJobs[index].author.email;
        if (jobId) {
          return dialog.confirmationDialog({
            title: "Bid for this job?",
            template: "confirm",
            okText: "Yes",
            onOk: function() {
              return $http.post(API.bidOnJob.format("" + jobId, "" + email)).success(function() {
                getPage($scope.currentPage);
                return logger.success("nBid successful!");
              }).error(function(err) {
                return logger.error;
              });
            },
            onCancel: function() {}
          });
        }
      };
      $scope.isBidder = isBidder = function(index) {
        var job;
        job = $scope.filteredJobs[index] || [];
        return _.findOne(job.bidders, "_id", appUser._id);
      };
      $scope.showMap = function(job, index) {
        var curEl, prevEl;
        prevEl = $($scope.mapContainer);
        $scope.mapContainer = "#gmaps-div-" + index;
        curEl = $($scope.mapContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
        if ($scope.currentMap != null) {
          $($scope.currentMap.el).empty();
        }
        return $scope.currentMap = gmaps.showAddress({
          address: job.address.city.name + ", " + job.address.line1,
          container: $scope.mapContainer,
          done: function() {
            return $scope.currentMap.refresh();
          }
        });
      };
      $scope.showBigMap = function(bool) {};
      $scope.showPics = showPics = function(job, index) {
        var curEl, prevEl;
        prevEl = $($scope.mapContainer);
        $scope.picsContainer = "#pics-div-" + index;
        curEl = $($scope.picsContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.showProfile = showProfile = function(index) {
        var curEl, prevEl;
        prevEl = $($scope.profileContainer);
        $scope.profileContainer = "#profile-div-" + index;
        curEl = $($scope.profileContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.showInfo = showInfo = function(index) {
        var curEl, prevEl;
        prevEl = $($scope.infoContainer);
        $scope.infoContainer = "#info-div-" + index;
        curEl = $($scope.infoContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.sendMessage = sendMessage = function(index) {
        var job, scope;
        job = $scope.filteredJobs[index];
        scope = {
          body: "msg body",
          subject: "msg subject",
          sender: appUser.username,
          receiver: job.author.username
        };
        return dialog.confirmationDialog({
          title: "Send message",
          template: "sendMessage",
          okText: "Send",
          scope: scope,
          onOk: function() {
            $http.post(API.sendMessage, scope).success(function() {
              common.broadcast(config.events.ToggleSpinner, {
                show: true
              });
              return logger.success("Message sent!");
            }).error(function(err) {
              return logger.error(err);
            })["finally"](function() {
              return common.broadcast(config.events.ToggleSpinner, {
                show: false
              });
            });
            return console.log("Send", scope);
          },
          onCancel: function() {}
        });
      };
      $scope.search = function() {
        $scope.searchCriterion.categories = $scope.selectedCategories;
        if ($scope.searchCriterion.categories.length === 0) {
          debugger;
          $scope.searchCriterion.categories = $scope.categories;
        }
        $scope.searchCriterion.subcategory = $scope.selectedSubcategory;
        $scope.searchCriterion.page = $scope.currentPage;
        return common.post(API.queryJobs, $scope.searchCriterion).success(function(data) {
          var _ref;
          $scope.totalJobs = data.totalJobs;
          return $scope.filteredJobs = (_ref = data.jobs) != null ? _ref.slice() : void 0;
        });
      };
      return (activate = function() {
        return common.activateController([$scope.search()], "CraftsmanFindJobsCtrl");
      })();
    }
  ]);
});
