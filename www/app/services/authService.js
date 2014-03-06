(function () {
    'use strict';

    var serviceId = 'authService';
    var app = angular.module("app");

    app.factory(serviceId, ['$http','$rootScope', '$location', 'datacontext',
        function authService($http, $rootScope, $location, datacontext) {
            var user = {}
            
            $rootScope.isAuthenticated = false;
            var _service = {
                getUser: function() {
                    return user;
                },

                setUser: function(newUser) {
                    user = newUser;
                    $rootScope.isAuthenticated = (user != null);
                   
                },

                checkAuth: function() {
                    return user != null; 
                    // @TODO Ako bude trebalo da se osvezi
                    // return $http.get("/isAuthenticated", function() {
                    // });
                },

                updateUser: function () {
                    datacontext.postUpdateUser(user).then(function (data) {
                        user = data.user;
                        logSuccess(data.msg)
                    }).fail(function (error) {
                        logError(error);
                    })
                }

            }


            // Object.defineProperty(_service, "isAuthenticated", {
            //     get: function () {
            //         return this.checkAuth();
            //     }
            // });

            return _service;
        }
    ]);

    app.run(['$http', '$rootScope', 'authService', function($http, $rootScope, authService){ 
        $http.get("/isAuthenticated")
        .success(function(user) { authService.setUser(user); })
        .error(function() { authService.setUser(null); });
    }]);

})();