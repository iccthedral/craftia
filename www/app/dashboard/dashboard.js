(function () {
    'use strict';
    var controllerId = 'dashboard';
    angular.module('app').controller(controllerId, ['common', 'datacontext', 'authService', dashboard]);

    function dashboard(common, datacontext, authService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.news = {
            title: 'Hot Towel Angular',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';
        vm.isCraftsman = (authService.getUserType() == 'Craftsman');
        vm.isCustomer = (authService.getUserType() == 'Customer');
        vm.isAuth = authService.checkAuth();
        vm.craftDash = "app/dashboard/craftsmanDashboard.html";
        vm.custDash = "app/dashboard/customerDashboard.html";
        vm.anonDash = "app/dashboard/anonDashboard.html"



        activate();
        
        function activate() {
            var promises = [getMessageCount(), getPeople()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Dashboard View'); });
        }

        function getMessageCount() {
            return datacontext.getMessageCount().then(function (data) {
                return vm.messageCount = data;
            });
        }

        function getPeople() {
            return datacontext.getPeople().then(function (data) {
                return vm.people = data;
            });
        }
    }
})();