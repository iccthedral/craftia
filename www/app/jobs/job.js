(function () {
    'use strict';
    var controllerId = 'job';
    angular.module('app').controller(controllerId, ['common', 'authService', job]);

    function job(common, authService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;
        vm.title = 'Job';
        vm.editable = false;
        vm.as = authService;
        vm.user = authService.getUser();
        vm.dummyJob = authService.getJob();
        vm.backup = angular.copy(vm.dummyJob);
        vm.jobInfo = "app/jobs/jobInfo.html";
        vm.jobBids = "app/jobs/jobBids.html";
        vm.bids = []; //authService.getBids();
        vm.isCraftsman = (authService.getUserType() == 'Craftsman');
        vm.isCustomer = (authService.getUserType() == 'Customer');

        activate();

        vm.cancel = function () {
            vm.editable = false;
            vm.dummyJob = angular.copy(vm.backup);
        }
        vm.edit = function () {
            vm.editable = true;
        }
        vm.save = function () {
            authService.updateJob();
        }

        function activate() {
            common.activateController([], controllerId)
                 .then(function () { log('Activated Profile View'); });
        }
    }
})();