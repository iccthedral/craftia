(function () {
    'use strict';

    var app = angular.module('app');


    // Collect the routes
    app.constant('routes', getRoutes());
    app.value("isAuthenticated", false);

    app.run(["$rootScope", "$location", "$route",
    function ($rootScope, $location, $route) {
        $rootScope.$on("$routeChangeSuccess", function (event, next, current) {

        })

        $rootScope.$on("$routeChangeError", function (event, next, current) {
            if (!$rootScope.isAuthenticated) {
                $location.path("/");
            }
        })
    }]);

    app.constant('routeConfigurator', routeConfigurator);

    function routeConfigurator($routeProvider, routes) {
        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/login' });
    }

    // Define the routes 
    function getRoutes() {
        var authenticate = function (access) {
            return {
                auth: ['$q', '$rootScope', '$location',
                    function ($q, $rootScope, $location) {
                        var defer = $q.defer();
                        var isLogin = $location.path() === "/login"

                        if ($rootScope.isAuthenticated) {
                            if (isLogin) {
                                $location.path("/");
                            }
                            else {
                                defer.resolve();
                            }
                        } else {
                            if (access) {
                                defer.reject();
                            } else {
                                defer.resolve();
                            }
                        }
                        return defer.promise;
                    }
                ]
            }
        }
        
        return [
            {
                url: '/',
                config: {
                    visibility: ["Craftsman", "Customer"],
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    resolve: authenticate(false),
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Overview'
                    }
                }
            }, {
                url: '/admin',
                config: {
                    visibility: ["Admin"],
                    title: 'admin',
                    templateUrl: 'app/admin/admin.html',
                    resolve: authenticate(true),
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            }, {
                url: '/jobs',
                config: {
                    visibility: ["Craftsman", "Customer"],
                    title: 'jobs',
                    templateUrl: 'app/jobs/jobs.html',
                    resolve: authenticate(true),
                    settings: {
                        nav: 6,
                        content: '<i class="fa fa-wrench"></i> Jobs'
                    }
                }
            }, {
                url: '/craftsmen',
                config: {
                    visibility: ["Customer"],
                    title: 'craftsmen',
                    templateUrl: 'app/craftsmen/craftsmen.html',
                    resolve: authenticate(true),
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-user"></i> Craftsmen'
                    }
                }
            },  {
                url: '/profile',
                config: {
                    visibility: ["Craftsman", "Customer"],
                    title: 'profile',
                    templateUrl: 'app/profile/profile.html',
                    resolve: authenticate(true),
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-book"></i> Profile settings'
                    }
                }
            }, {
                url: '/messages',
                config: {
                    visibility: ["Craftsman", "Customer"],
                    title: 'messages',
                    templateUrl: 'app/messages/messages.html',
                    resolve: authenticate(true),
                    settings: {
                        nav: 6,
                        content: '<i class="fa fa-book"></i> Messages'
                    }
                }
            }, {   
                url: '/postjob',
                config: {
                    templateUrl: 'app/dashboard/tempJob.html',
                    title: 'postJob',
                    resolve: authenticate(false),
                    settings: {
                        nav: 7,
                        content: 'POST JOB'
                    }
                }
            }, {
                url: '/yellowpages',
                config: {
                    templateUrl: 'app/dashboard/yellowPages.html',
                    title: 'yellowPages',
                    resolve: authenticate(false),
                    settings: {
                        nav: 8,
                        content: 'YELLOW PAGES'
                    }
                }
            }, {
                url: '/craftsman',
                config: {
                    templateUrl: 'app/dashboard/craftsman.html',
                    title: 'craftsman',
                    resolve: authenticate(false),
                    settings: {
                        nav: 9,
                        content: 'CRAFTSMAN'
                    }
                }
            }, {
                url: '/howto',
                config: {
                    templateUrl: 'app/dashboard/howto.html',
                    title: 'howto',
                    resolve: authenticate(false),
                    settings: {
                        nav: 10,
                        content: 'HOWTO'
                    }
                }
            }, {
                url: '/requirement',
                config: {
                    templateUrl: 'app/dashboard/requirement.html',
                    title: 'requirement',
                    resolve: authenticate(false),
                    settings: {
                        nav: 11,
                        content: 'REQUIREMENT'
                    }
                }
            }, {
                url: '/findjobs',
                config: {
                    templateUrl: 'app/dashboard/findjobs.html',
                    title: 'findjobs',
                    resolve: authenticate(false),
                    settings: {
                        nav: 12,
                        content: 'FIND JOBS'
                    }
                }
            }, {
                url: '/prices',
                config: {
                    templateUrl: 'app/dashboard/prices.html',
                    title: 'prices',
                    resolve: authenticate(false),
                    settings: {
                        nav: 13,
                        content: 'PRICES'
                    }
                }
            }, {
                url: '/notifications',
                config: {
                    visibility: ["Customer, Craftsman"],
                    title: 'notifications',
                    templateUrl: 'app/notifications/notifications.html',
                    resolve: authenticate(true),
                    settings: {
                        nav: 14,
                        content: '<i class="fa fa-user"></i> Craftsmen'
                    }
                }
            }, {
                url: '/register',
                config: {
                    title: 'craftsmen',
                    templateUrl: 'app/register/register.html',
                    resolve: authenticate(false)
                }
            }, {
                url: '/registerCraftsman',
                config: {
                    title: 'craftsmen',
                    templateUrl: 'app/register/registerCraftsman.html',
                    resolve: authenticate(false)
                }
            }, {
                url: '/registerCustomer',
                config: {
                    title: 'customer',
                    templateUrl: 'app/register/registerCustomer.html',
                    resolve: authenticate(false)
                }
            }, {
                url: '/login',
                config: {
                    title: 'login',
                    templateUrl: 'app/login/login.html',
                    resolve: authenticate(false)
                }
            }
        ];
    }

    app.config(["$routeProvider", "routes", routeConfigurator]);

    app.run(['$http', '$rootScope', 'authService', '$route', 'routeConfigurator', function($http, $rootScope, authService){ 
        $http.get("/isAuthenticated")
        .success(function(user) { 
            authService.setUser(user); 
            // Configure the routes and route resolvers
            app.config(['$routeProvider', 'routes', routeConfigurator]);
        })
        .error(function() { 
            authService.setUser(null);
            app.config(['$routeProvider', 'routes', routeConfigurator]);
        })
    }]);

})();