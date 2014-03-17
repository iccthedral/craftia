(function () { 
    'use strict';
    
    var controllerId = 'topnav';
    angular.module('app').controller(controllerId,
        ['datacontext', 'common', 'authService','$http', "$location", topnav]);

    function topnav(datacontext, common, authService, $http, $location) {
        var vm = this;
        vm.title = "Logout";
        var logSuccess = common.logger.getLogFn(controllerId, 'success');
        
        vm.logout = function() {
            var goodbyeGreeting = "Goodbye " + authService.getUser().name;
            $http.get("/logout")
            .success(function(data) {
              logSuccess(goodbyeGreeting);
              authService.setUser(null);
              $location.path("/#");
            })
            .error(function(err) {
              throw new Error(err);
            })
        }

        return vm;

        function activate() {
            common.activateController([], controllerId)
        } 
        /*activate();

        function activate() {
            logSuccess('Hot Towel Angular loaded!', null, true);
            common.activateController([], controllerId);
        }

        function toggleSpinner(on) { vm.isBusy = on; }

        $rootScope.$on('$routeChangeStart',
            function (event, next, current) { toggleSpinner(true); }
        );
        
        $rootScope.$on(events.controllerActivateSuccess,
            function (data) { toggleSpinner(false); }
        );

        $rootScope.$on(events.spinnerToggle,
            function (data) { toggleSpinner(data.show); }
        );*/
    };
})();