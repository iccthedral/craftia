﻿(function () {
    'use strict';
    var controllerId = 'dashboard';
    angular.module('app').controller(controllerId, ['$location','routes','$scope','$timeout','common', 'datacontext', 'authService', dashboard]);

    function dashboard($location,$routes, $scope, $timeout, common, datacontext, authService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        
        console.debug(authService);

        var vm = this;
        vm.news = {
            title: 'This is the Craftia homepage for visitors who are not signed in. '+
                 "\n" +'This is where all the teaser images will be and where the visitor will be able to '+
                 'see all the instructions on how the site works!',
            description: "These widgets won't end up looking exactly like this, but they will be collapsible for ease of use on mobile devices"
        };

        vm.craftsmenNews = {
            title: 'This widget will greet the craftsman when they log in',
            contentPartial: 'app/jobs/offerList.html',
            description: 'Some content may or may not end up here, well see how it goes'
        };

        vm.customerNews = {
            title: 'This widget will greet the customer when they log in',
            contentPartial: 'app/craftsmen/craftsmen.html',
            description: 'Some content may or may not end up here, well see how it goes'
        };

        vm.menu = [];

        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';
        vm.isCraftsman = (authService.getUserType() == 'Craftsman');
        vm.isCustomer = (authService.getUserType() == 'Customer');
        vm.isAuth = authService.checkAuth();
        vm.craftDash = "app/dashboard/craftsmanDashboard.html";
        vm.custDash = "app/dashboard/customerDashboard.html";
        vm.anonDash = "app/dashboard/anonDashboard.html"
        vm.getNavRoutes = function () {
            vm.menu = $routes.filter(function(r) {
                
                return r.config.settings && r.config.settings.nav;
            }).sort(function(r1, r2) {
                return r1.config.settings.nav - r2.config.settings.nav;
            });
        }


        $scope.isVisible = function (route) {
            var visible = false;
            vm.userType = authService.getUserType();
            vm.menu.forEach(function (el) {
                if (el.config.title == route.config.title) {
                    el.config.visibility.forEach(function (elem) {
                        if (vm.userType == elem) {
                            visible = true;
                            return visible;
                        }
                    })
                }
            });
            return visible;
        }
        $scope.slide = {};
        $scope.slide.images = ["img/carousel/carousel11.jpg", "img/carousel/carousel2.jpg", "img/carousel/carousel3.jpg", "img/carousel/carousel4.jpg"]
        $scope.tick = function() {
            $scope.slide.images.unshift( $scope.slide.images.pop() );
            $timeout( $scope.tick, 7000 );
        };
        $scope.tick();
        

        activate();
        
        $scope.url = $location.path();

        function activate() {
            var promises = [vm.getNavRoutes(), getMessageCount(), getPeople()];
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