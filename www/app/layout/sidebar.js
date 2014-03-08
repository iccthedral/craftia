(function () { 
    'use strict';
    
    var controllerId = 'sidebar';
    angular.module('app').controller(controllerId,
        ['$route', 'config', 'routes', 'authService', "$rootScope", sidebar]);

    function sidebar($route, config, routes, authService, $rootScope) {
        var vm = this;
        vm.navRoutes = [];
        vm.isCurrent = isCurrent;
        vm.isVisible = isVisible;
        vm.getUserType = getUserType;
        vm.userType = "";
        activate();

        function activate() { getNavRoutes(); }
        
        function getUserType() {
            return authService.getUserType();
        }

        function getNavRoutes() {
            vm.navRoutes = routes.filter(function(r) {
                return r.config.settings && r.config.settings.nav;
            }).sort(function(r1, r2) {
                return r1.config.settings.nav - r2.config.settings.nav;
            });
        }


        function isVisible(route) {
            var visible = false;
            vm.userType = getUserType();
            vm.navRoutes.forEach(function (el) {
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
        
        function isCurrent(route) {
            if (!route.config.title || !$route.current || !$route.current.title) {
                return '';
            }
            var menuName = route.config.title;
            return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
    };
})();
