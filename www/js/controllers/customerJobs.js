define(["./module", "moment"], function(module, moment) {
  return module.controller("CustomerJobsCtrl", [
    "$scope", "$http", "$state", "$timeout", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", "dialog", function($scope, $http, $state, $timeout, API, logger, common, config, categoryPictures, gmaps, dialog) {
      var activate, editJob, getPage, pickWinner, saveJob, sendMessage, showInfo, showPics, state;
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
      $scope.ratingContainer = "#rating-div-0";
      $scope.tempJob = {};
      $scope.editIndex = $scope.sizePerPage;
      $scope.ratings = [];
      $scope.biddersJobs = [];
      $scope.profile = {};
      $scope.buttonText = "";
      $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        return $scope.percent = 100 * (value / $scope.max);
      };
      $scope.editJob = editJob = function(index) {
        return $scope.editIndex = index;
      };
      $scope.showRating = function(index) {
        var curEl, prevEl;
        $scope.currentRating = $scope.filteredJobs[index];
        prevEl = $($scope.ratingContainer);
        $scope.ratingContainer = "#rating-div-" + index;
        curEl = $($scope.ratingContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.rateJob = function(job) {
        var data;
        data = {
          mark: job.rate.mark,
          comment: job.rate.comment,
          jobId: job._id,
          winner: job.winner,
          email: job.winner.email
        };
        return $http.post(API.rateJob, data).success(function(data) {
          angular.copy(data, job);
          return getPage(0, "all");
        });
      };
      $scope.saveJob = saveJob = function(index, jobId) {
        jobId = $scope.filteredJobs[index]._id;
        $scope.editIndex = $scope.sizePerPage;
        return $http.post(API.updateJob.format("" + jobId), $scope.tempJob).success(function(data) {
          angular.copy(data, $scope.filteredJobs[index]);
          logger.success("Job updated!");
          return getPage(0, "all");
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
          _ref = data.jobs != null;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            job.jobPhotos = job.jobPhotos.filter(function(img) {
              return (img != null ? img.src : void 0) != null;
            });
          }
          $scope.totalJobs = data.totalJobs;
          $scope.jobs = data.jobs;
          return $scope.filteredJobs = data.jobs.slice();
        }).error(function(err) {
          return console.log(err);
        })["finally"](function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
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
          address: job.address.city.name + job.address.line1,
          container: $scope.mapContainer,
          done: function() {
            return $scope.currentMap.refresh();
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
            return $http.post(API.sendMessage, scope).success(function() {
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
          },
          onCancel: function() {}
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
      $scope.pickWinner = pickWinner = function(bidder, job) {
        var bidderId, email;
        bidderId = bidder._id;
        email = bidder.email;
        return dialog.confirmationDialog({
          title: "Pick winner?",
          template: "confirm",
          okText: "Accept",
          onOk: function() {
            return $http.post(API.pickWinner.format("" + job._id, "" + bidderId, "" + email)).success(function() {
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
        angular.copy($scope.filteredJobs[index], $scope.tempJob);
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
        $scope.biddersJob = {};
        $scope.profile = {};
        return $scope.buttonText = "";
      };
      $scope.viewJob = function(jobId) {
        var job, _i, _len, _ref, _ref1;
        if ($scope.biddersJobs.length !== 0) {
          _ref = $scope.biddersJobs;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            if (job._id === jobId) {
              $scope.biddersJob = angular.copy(job);
            }
          }
        }
        if (((_ref1 = $scope.biddersJob) != null ? _ref1._id : void 0) === jobId) {
          $scope.dateFrom = moment($scope.biddersJob.dateFrom).format("DD/MM/YY");
          return $scope.dateTo = moment($scope.biddersJob.dateTo).format("DD/MM/YY");
        } else {
          return $http.get(API.findJob.format("" + jobId)).success(function(data) {
            logger.success("Job fetched!");
            $scope.biddersJob = angular.copy(data[0]);
            $scope.dateFrom = moment(data[0].dateFrom).format("DD/MM/YY");
            $scope.dateTo = moment(data[0].dateTo).format("DD/MM/YY");
            return $scope.biddersJobs.push($scope.biddersJob);
          }).error(function(e) {
            return logger.error(e);
          });
        }
      };
      $scope.viewRatings = function(bidderId, job) {
        var bidder, _i, _len, _ref;
        if ($scope.tempBidder == null) {
          _ref = job.bidders;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            bidder = _ref[_i];
            if (bidder._id === bidderId) {
              $scope.tempBidder = angular.copy(bidder);
            }
          }
          if ($scope.tempBidder.rating.jobs != null) {
            return $scope.ratings = $scope.tempBidder.rating.jobs;
          }
        } else {
          $scope.tempBidder = null;
          $scope.ratings = [];
          $scope.biddersJob = {};
          $scope.profile = {};
          return $scope.buttonText = "";
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
