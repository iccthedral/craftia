define(["./module"], function(module) {
  return module.controller("CustomerJobsCtrl", [
    "$scope", "$http", "$state", "$timeout", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", "dialog", function($scope, $http, $state, $timeout, API, logger, common, config, categoryPictures, gmaps, dialog) {
      var activate, editJob, getPage, pickWinner, saveJob, sendMessage, showInfo, showPics, showProfile, showStars, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredJobs = [];
      $scope.totalJobs = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      $scope.jobStatus = "all";
      $scope.mapContainer = "#gmaps-div-0";
      $scope.picsContainer = "#pics-div-0";
      $scope.infoContainer = "#info-div-0";
      $scope.profileContainer = "#profile-div-0";
      $scope.tempJob = {};
      $scope.editIndex = $scope.sizePerPage;
      $scope.showStars = showStars = function(index) {
        $("#rate-div-" + index).rateit({
          max: 5,
          step: 1,
          backingfld: "#rate-div-" + index
        }).show();
      };
      $scope.editJob = editJob = function(index) {
        return $scope.editIndex = index;
      };
      $scope.saveJob = saveJob = function(index, jobId) {
        jobId = $scope.filteredJobs[index]._id;
        $scope.editIndex = $scope.sizePerPage;
        return $http.post(API.updateJob.format("" + jobId), $scope.tempJob).success(function(data) {
          $scope.filteredJobs[index] = _.extend(true, {}, data);
          logger.success("Job updated!");
          return $state.transitionTo("customer.jobs");
        }).error(function(err) {
          logger.error(err);
          return $state.transitionTo("customer");
        });
      };
      $scope.getPage = getPage = function(pageIndex, jobStatus) {
        if ($scope.currentPage === pageIndex && $scope.jobStatus === jobStatus) {
          return;
        }
        if ($scope.jobStatus !== jobStatus) {
          $scope.jobStatus = jobStatus;
          $scope.filteredJobs = [];
        }
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(API.getMyJobs.format("" + pageIndex, "" + jobStatus)).success(function(data) {
          var job, _i, _len, _ref;
          _ref = data.jobs;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            job.jobPhotos = job.jobPhotos.filter(function(img) {
              return (img != null ? img.src : void 0) != null;
            });
          }
          $scope.totalJobs = data.totalJobs;
          $scope.jobs = data.jobs;
          $scope.filteredJobs = data.jobs.slice();
          return console.log("hmmm");
        }).error(function() {
          return console.log("err");
        })["finally"](function() {
          console.log("aaam");
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
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
      $scope.showMap = function(index) {
        var curEl, job, prevEl;
        prevEl = $($scope.mapContainer);
        job = $scope.filteredJobs[index];
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
          address: job.address.city + job.address.line1,
          container: $scope.mapContainer,
          done: function() {
            $scope.currentMap.refresh();
            return console.log('iamdone');
          },
          error: function(err) {
            return logger.error(err);
          }
        });
      };
      $scope.sendMessage = sendMessage = function(bidder) {
        var scope;
        scope = {
          body: "msg body",
          subject: "msg subject",
          receiver: bidder
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
      $scope.showPics = showPics = function(index) {
        var curEl, prevEl;
        prevEl = $($scope.picsContainer);
        $scope.picsContainer = "#pics-div-" + index;
        curEl = $($scope.picsContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.pickWinner = pickWinner = function(bidderId, job) {
        return dialog.confirmationDialog({
          title: "Pick winner?",
          template: "confirm",
          okText: "Accept",
          onOk: function() {
            return $http.post(API.pickWinner.format("" + job._id, "" + bidderId)).success(function() {
              return getPage($scope.currentPage, 'finished');
            }).error(function(err) {
              return logger.error(err);
            });
          },
          onCancel: function() {
            return logger.info("Action canceled");
          }
        });
      };
      $scope.showInfo = showInfo = function(index) {
        var curEl, prevEl;
        $scope.tempJob = _.extend(true, {}, $scope.filteredJobs[index]);
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
      $scope.search = function() {};
      return (activate = function() {
        var getJobsPaged;
        return getJobsPaged = getPage($scope.currentPage);
      })();
    }
  ]);
});
