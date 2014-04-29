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
        vm.dashMenu = [
            {   
                url: '/postjob',
                config: {
                    templateUrl: 'app/dashboard/tempJob.html',
                    title: 'postJob',
                    settings: {
                        nav: 1,
                        content: 'POST JOB'
                    }
                }
            }, {
                url: '/yellowpages',
                config: {
                    templateUrl: 'app/dashboard/yellowPages.html',
                    title: 'yellowPages',
                    settings: {
                        nav: 2,
                        content: 'YELLOW PAGES'
                    }
                }
            }, {
                url: '/howto',
                config: {
                    templateUrl: 'app/dashboard/howto.html',
                    title: 'craftsman',
                    settings: {
                        nav: 3,
                        content: 'CRAFTSMAN'
                    }
                }
            }
        ];
        // vm.getUserType = authService.getUserType();

        vm.dashSubMenu = [
        {
                url: '/howto',
                config: {
                    templateUrl: 'app/dashboard/howto.html',
                    title: 'howto',
                    settings: {
                        nav: 10,
                        content: 'HOW TO'
                    }
                }
            },{
                url: '/requirement',
                config: {
                    templateUrl: 'app/dashboard/requirement.html',
                    title: 'requirement',
                    settings: {
                        nav: 11,
                        content: 'REQUIREMENT'
                    }
                }
            },{
                url: '/findjobs',
                config: {
                    templateUrl: 'app/dashboard/findjobs.html',
                    title: 'findjobs',
                    settings: {
                        nav: 12,
                        content: 'FIND JOBS'
                    }
                }
            },{
                url: '/prices',
                config: {
                    templateUrl: 'app/dashboard/prices.html',
                    title: 'prices',
                    settings: {
                        nav: 13,
                        content: 'PRICES'
                    }
                }
            }
        ]

        

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
          return ($location.path() === route.url)
        }

        vm.whichClass = function(route) {
            if ($location.path() === route.url){
                return 'top-hmenu-item-current'
            } else {
                return 'top-hmenu-item'
            }
        }

        vm.whichSubClass = function(route) {
            if ($location.path() === route.url){
                return 'craftia-nav-envelope'
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
            logSuccess('View loaded!', null, true);
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