define(["./module"], function(module) {
  return module.controller("CustomerJobsCtrl", [
    "$scope", "$http", "$state", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", "dialog", function($scope, $http, $state, API, logger, common, config, categoryPictures, gmaps, dialog) {
      var activate, getPage, pickWinner, sendMessage, showProfile, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredJobs = [];
      $scope.totalJobs = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      $scope.jobStatus = "all";
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
              return img.img != null;
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
          address: job.address.city,
          container: $scope.mapContainer,
          done: function() {
            $scope.currentMap.refresh();
            return console.log('iamdone');
          }
        });
      };
      $scope.sendMessage = sendMessage = function(index) {
        var job, scope;
        job = $scope.filteredJobs[index];
        scope = {
          body: "msg body",
          subject: "msg subject",
          sender: user.username,
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
      $scope.pickWinner = pickWinner = function(bidderId, index) {
        var job;
        job = $scope.filteredJobs[index];
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
      $scope.showInfo = function(job, index) {
        ($($scope.infoContainer)).slideToggle();
        $scope.infoContainer = "#pics-div-" + index;
        ($($scope.infoContainer)).slideToggle();
      };
      $scope.search = function() {};
      return (activate = function() {
        var getJobsPaged;
        return getJobsPaged = getPage($scope.currentPage);
      })();
    }
  ]);
});
