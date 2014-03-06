(function () {
    'use strict';
    var controllerId = 'profile';
    angular.module('app').controller(controllerId, ['common', profile]);

    function profile(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Profile';

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

        activate();
        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Profile View'); });
        }
    }
})();