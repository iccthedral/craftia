(function () {
    'use strict';
    var controllerId = 'craftsmen';
    angular.module('app').controller(controllerId, ['common', 'datacontext', craftsmen]);

    function craftsmen(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Craftsmen';
        vm.craftmen = [];

        activate();

        function activate() {
            common.activateController([getCraftsmen()], controllerId)
                .then(function () { log('Activated Jobs View'); });
        }

        function getCraftsmen() {
            return datacontext.getCraftsmen().then(function (data) {
                return vm.craftmen = data;
            });
        }
    }
})();