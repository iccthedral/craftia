(function () {
    'use strict';
    var controllerId = 'postjobs';
    angular.module('app').controller(controllerId, ['common', 'datacontext', postjobs]);

    function postjobs(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Post/edit jobs';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Jobs View'); });
        }
    }
})();