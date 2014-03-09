(function () {
    'use strict';
    var controllerId = 'dashboard';
    angular.module('app').controller(controllerId, ['common', 'datacontext', 'authService', dashboard]);

    function dashboard(common, datacontext, authService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.news = {
            title: 'This is the Craftia homepage for visitors who are not signed in. '+
                 "\n" +'This is where all the teaser images will be and where the visitor will be able to '+
                 'see all the instructions on how the site works!',
            description: "These widgets won't end up looking exactly like this, but they will be collapsible for ease of use on mobile devices"
        };

        vm.craftsManNews = {
            title: 'This widget will greet the craftsman when they log in',
            description: 'Some content may or may not end up here, well see how it goes'
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