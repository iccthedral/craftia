(function () {
    'use strict';
    var controllerId = 'profile';
    angular.module('app').controller(controllerId, ['common', 'authService', profile]);

    function profile(common, authService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Profile';
        vm.editable = false;
        vm.as = authService;
        vm.user = authService.getUser();
        vm.backup = angular.copy(vm.user);

        vm.profile = {
            username: "Djuka",
            fullName: "Djuka Petric",
            isAuthor: true,
            isCraftsman: false,
            mail: "djuka@djuka.com",
            city: "Novisaidanda",
            address: "Krakak Rototo 27",
            hasChanges: false
        }
        vm.leftPartial = "app/profile/leftProfile.html";
        vm.rightPartial = "app/profile/rightProfile.html";


        activate();

        vm.cancel = function () {
            vm.editable = false;
            vm.user = angular.copy(vm.backup);
        }
        vm.edit= function () {
            vm.editable = true;
        }
        vm.save= function () {
            authService.updateUser();
        }
    

       
        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Profile View'); });
        }
    }
})();