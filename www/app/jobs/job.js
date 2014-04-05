// (function () {
//     'use strict';
//     var controllerId = 'job';
//     angular.module('app').controller(controllerId, ['$scope', 'common', 'authService', job]);

//     function job($scope, common, authService) {
//         var getLogFn = common.logger.getLogFn;
//         var log = getLogFn(controllerId);
//         $scope.title = 'Job';
//         $scope.editable = false;
//         $scope.as = authService;
//         $scope.user = authService.getUser();
//         $scope.dummyJob = authService.getJob();
//         $scope.backup = angular.copy($scope.dummyJob);
//         $scope.jobInfo = "app/jobs/bidForJob.html";
//         $scope.jobBids = "app/jobs/jobBidders.html";
//         $scope.bids = []; //authService.getBids();
//         $scope.isCraftsman = (authService.getUserType() == 'Craftsman');
//         $scope.isCustomer = (authService.getUserType() == 'Customer');

//         activate();

//         $scope.cancel = function () {
//             $scope.editable = false;
//             $scope.dummyJob = angular.copy($scope.backup);
//         }
//         $scope.edit = function () {
//             $scope.editable = true;
//         }
//         $scope.save = function () {
//             authService.updateJob();
//         }

//         function activate() {
//             common.activateController([], controllerId)
//                  .then(function () { log('Activated Profile View'); });
//         }
//     }
// })();