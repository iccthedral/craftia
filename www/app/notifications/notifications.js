(function () {
    'use strict';
    var controllerId = 'notifications';
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', 'common', 'datacontext', '$location', notifications]);

    function notifications($scope, $rootScope, common, datacontext, $location) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var logSuccess = getLogFn(controllerId, "success")
        var logError = getLogFn(controllerId, "error")

        var vm = this;
        //vm.lang = LANG.register;
        vm.title = 'Register';

        activate();
        
        function activate() {
            common.activateController([], controllerId)
            .then(function () { log('Activated Register View'); });
        }
    }
})();