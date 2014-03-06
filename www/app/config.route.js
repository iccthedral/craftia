(function () {
    'use strict';

    var app = angular.module('app');


    // Collect the routes
    app.constant('routes', getRoutes());

    app.run(["$rootScope", "$location", "$route", "authService", 
        function($rootScope, $location, $route, authService) {
            $rootScope.$on("$routeChangeSuccess", function(event, next, current) {

            })

            $rootScope.$on("$routeChangeError", function(event, next, current) {
                if(!$rootScope.isAuthenticated) {
                    $location.path("/login");
                }
            })
    }]);

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);

    function routeConfigurator($routeProvider, routes) {
        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/login' });
    }

    // Define the routes 
    function getRoutes() {
        var authenticate = function(access) {
          return {
            auth: ['$q', '$rootScope', '$location',
                function($q, $rootScope, $location) {
                    var defer = $q.defer();
                    var isLogin = $location.path() === "/login"
                    if($rootScope.isAuthenticated && access) {
                        if (isLogin) {
                            $location.path("/");
                        }
                        defer.resolve();
                    }
                    else if ($rootScope.isAuthenticated && !access) {
                        if (isLogin) {
                            $location.path("/");
                        }
                        defer.resolve()
                    } else {
                        if (access) {
                            defer.reject()
                        } else {
                            defer.resolve()
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
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    resolve: authenticate(false),
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/admin',
                config: {
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
                    title: 'jobs',
                    templateUrl: 'app/jobs/jobs.html',
                    resolve: authenticate(true),
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-wrench"></i> Jobs'
                    }
                }
            }, {
                url: '/craftsmen',
                config: {
                    title: 'craftsmen',
                    templateUrl: 'app/craftsmen/craftsmen.html',
                    resolve: authenticate(true),
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-user"></i> Craftsmen'
                    }
                }
            },
            {
                url: '/register',
                config: {
                    title: 'craftsmen',
                    templateUrl: 'app/register/register.html',
                    resolve: authenticate(false),
                }
            },
            {
                url: '/login',
                config: {
                    title: 'login',
                    templateUrl: 'app/login/login.html',
                    resolve: authenticate(false),
                }
            },
            {
                url: '/login',
                config: {
                    title: 'login',
                    templateUrl: 'app/login/login.html',
                    resolve: authenticate(false),
                }
            }
        ];
    }
})();