(function () {
    'use strict';
    var controllerId = 'register';
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', 'common', 'datacontext', '$location', register]);

    function register($scope, $rootScope, common, datacontext, $location) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var logSuccess = getLogFn(controllerId, "success")
        var logError = getLogFn(controllerId, "error")

        var vm = this;
        //vm.lang = LANG.register;
        vm.title = 'Register';  
        
        vm.user = {
            username: "",
            email: "",
            password: "",
            type: "",
            name: "",
            telephone: "",
            surname: "",
            address: {
                line1: null,
                city: null
            }
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

        vm.registerCraftsman = function() {
            console.debug(vm.user);
            vm.user.type = "Craftsman";
            datacontext.postRegister(vm.user).then(function(data) {
                vm.user = data.user;
                logSuccess(data.msg);
            }).fail(function(error) {
                logError(error);
            });
            $location.path("/login")
        }

        vm.registerCustomer = function() {
            console.debug(vm.user);
            vm.user.type = "Customer";
            datacontext.postRegister(vm.user).then(function(data) {
                vm.user = data.user;
                logSuccess(data.msg);
            }).fail(function(error) {
                logError(error);
            });
            $location.path("/login")
        }

        $scope.getCities = function (id) {
            $rootScope.isAjaxHappening = true;
            return $.get('/cities/' + id).then(function (res) {
                $rootScope.isAjaxHappening = false;
                return res;
            });
        }
        
        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Register View'); });
        } 
    }
})();