define(["./module"], function(module) {
  return module.controller("CraftsmanFindJobsCtrl", [
    "$scope", "$http", "$state", "cAPI", "appUser", "logger", "common", "config", "categoryPictures", "gmaps", "dialog", function($scope, $http, $state, API, appUser, logger, common, config, categoryPictures, gmaps, dialog) {
      var activate, bidOnJob, getPage, isBidder, sendMessage, showInfo, showPics, showProfile, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredJobs = [];
      $scope.totalJobs = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      $scope.mapContainer = "#gmaps-div-0";
      $scope.picsContainer = "#pics-div-0";
      $scope.infoContainer = "#info-div-0";
      $scope.profileContainer = "#profile-div-0";
      $scope.getPage = getPage = function(pageIndex, ignore) {
        if (ignore) {
          return;
        }
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(API.getPagedOpenJobs.format("" + pageIndex)).success(function(data) {
          var job, _i, _len, _ref;
          _ref = data.jobs;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            job.jobPhotos = job.jobPhotos.filter(function(img) {
              return img.img != null;
            });
          }
          $scope.totalJobs = data.totalJobs;
          $scope.jobs = data.jobs;
          return $scope.filteredJobs = data.jobs.slice();
        })["finally"](function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.bidOnJob = bidOnJob = function(index) {
        var jobId;
        jobId = $scope.filteredJobs[index]._id;
        if (jobId) {
          return dialog.confirmationDialog({
            title: "Bid for this job?",
            template: "confirm",
            okText: "Yes",
            onOk: function() {
              return $http.post(API.bidOnJob.format("" + jobId)).success(function() {
                getPage($scope.currentPage);
                return logger.success("nBid successful!");
              }).error(function(err) {
                return logger.error;
              });
            },
            onCancel: function() {
              return logger.info("Action canceled");
            }
          });
        }
      };
      $scope.isBidder = isBidder = function(index) {
        var job;
        job = $scope.filteredJobs[index];
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
          address: job.address.city + ", " + job.address.line1,
          container: $scope.mapContainer,
          done: function() {
            return $scope.currentMap.refresh();
          }
        });
      };
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
          onCancel: function() {
            return console.log("Cancel", scope);
          }
        });
      };
      $scope.search = function() {};
      return (activate = function() {
        return common.activateController([getPage(0)], "CraftsmanFindJobsCtrl");
      })();
    }
  ]);
});
