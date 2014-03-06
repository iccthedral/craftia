(function () {
    'use strict';
    var controllerId = 'jobs';
    angular.module('app').controller(controllerId, ['common', 'datacontext', jobs]);

    function jobs(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Jobs';
        vm.jobs = [];
        vm.rightPartial = "";
        vm.currentTitle = "";

        activate();

        vm.newJob = function() {
            vm.currentTitle = "Create job";
            vm.rightPartial = "app/jobs/post_job.html";
        }

        function getJobs() {
            return datacontext.getJobs().then(function (data) {
                return vm.jobs = data;
            });
        }

        function activate() {
            common.activateController([getJobs()], controllerId)
                .then(function () { log('Activated Jobs View'); });
        }

    }
})();