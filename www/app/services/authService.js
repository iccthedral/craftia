(function () {
    'use strict';

    var serviceId = 'authService';
    var app = angular.module("app");

    app.factory(serviceId, ['$http','$rootScope', '$location', 'datacontext',
        function authService($http, $rootScope, $location, datacontext) {
<<<<<<< HEAD
            var user = {};
            var userType = "";
            var isCustomer = false;
            var isCraftsman = false;
            var job = {
                title: 'Refurnish old furniture',
                author: 'John',
                skills: ['Carpenter'],
                startingDate: new Date(),
                endingDate: new Date()
            };
=======
            var user = {}
            $rootScope.isAjaxHappening = false;

>>>>>>> 1ccd4635686bd1429fe4d13cd6fa3ac2dafc438b
            $rootScope.isAuthenticated = false;


            var _service = {
                getUser: function() {
                    return user;                    
                },

                getUserType: function () {
                    if (user != undefined) { userType = user.type;}
                    return userType;
                },

                setUser: function(newUser) {
                    user = newUser;
                    $rootScope.isAuthenticated = (user != null);
<<<<<<< HEAD
                },

                getJob: function(){
                    return job();
                },

                updateJob: function(){
                    datacontext.postUpdateJob(job).then(function (data) {
                        job = data.job;
                        logSuccess(data.msg)
                    }).fail(function (error) {
                        logError(error);
                    })
=======
>>>>>>> 1ccd4635686bd1429fe4d13cd6fa3ac2dafc438b
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