(function () { 
    'use strict';
    
    var controllerId = 'topnav';
    var controller = angular.module('app').controller(controllerId,
        ['$route', 'routes', '$rootScope', 'datacontext', 'common', 'authService', '$http', "$location", "$scope", topnav]);

    return controller;

    function topnav($route, $routes, $rootScope, datacontext, common, authService, $http, $location, $scope) {
        var logSuccess = common.logger.getLogFn(controllerId, 'success');
        var vm = $scope;

        vm.user = authService.getUser();
        vm.title = "Logout";
        vm.menu = [];
        // vm.getUserType = authService.getUserType();

        vm.getNavRoutes = function () {
            vm.menu = $routes.filter(function(r) {
                
                return r.config.settings && r.config.settings.nav;
            }).sort(function(r1, r2) {
                return r1.config.settings.nav - r2.config.settings.nav;
            });
        }

        vm.isVisible = function (route) {
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

        vm.isCurrent = function (route) {
            if (!route.config.title || !$route.current || !$route.current.title) {
                return '';
            }
            var menuName = $route.config.title;
            return $route.current.title.substr(0, menuName.length) === menuName;
        }

        vm.whichClass = function(route) {
            if ($location.path() === route.url){
                return 'top-hmenu-item-current'
            } else {
                return 'top-hmenu-item'
            }
        }

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

        vm.viewProfile = function() {
            $location.path('/profile');
        }

        function activate() {
            logSuccess('Hot Towel Angular loaded!', null, true);
            common.activateController([vm.getNavRoutes()], controllerId);
        }

        activate();

        // function toggleSpinner(on) { vm.isBusy = on; }

        // $rootScope.$on('$routeChangeStart',
        //     function (event, next, current) { toggleSpinner(true); }
        // );

        // $rootScope.$on(events.controllerActivateSuccess,
        //     function (data) { toggleSpinner(false); }
        // );

        // $rootScope.$on(events.spinnerToggle,
        //     function (data) { toggleSpinner(data.show); }
        // );

        window.menu = vm.menu;
        return vm;
    };
})();