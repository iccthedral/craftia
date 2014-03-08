(function () {
    'use strict';
    var controllerId = 'register';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$location', register]);

    function register(common, datacontext, $location) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var logSuccess = getLogFn(controllerId, "success")
        var logError = getLogFn(controllerId, "error")

        var vm = this;
        vm.lang = LANG.register;
        vm.title = 'Register';  
        
        vm.user = {
            username: "",
            email: "",
            password: "",
            type: "",
            name: "",
            telephone: "",
            surname: ""
        };

        activate();

        vm.registerUser = function() {
            console.debug(vm.user);
            datacontext.postRegister(vm.user).then(function(data) {
                vm.user = data.user;
                logSuccess(data.msg);
            }).fail(function(error) {
                logError(error);
            });
            $location.path("/login")
        }

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Register View'); });
        } 
    }
})();