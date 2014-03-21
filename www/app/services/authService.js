(function () {
    'use strict';

    var serviceId = 'authService';
    var app = angular.module("app");

    app.service(serviceId, ['$http','$rootScope', '$location', 'datacontext',
        function authService($http, $rootScope, $location, datacontext) {
            var userType = "";
            var user = {}

            $rootScope.isAjaxHappening = false;
            
            var _service = {
                getUser: function() {
                    return user;                    
                },  

                getUserType: function () {
                    if (user != undefined) { }
                    return userType;
                },

                setUser: function (newUser) {
                    user = newUser;
                    if (user) {
                        userType = user.type;
                        Object.defineProperty(user, "isCraftsman", {
                            get: function () {
                                return userType == 'Craftsman'
                            }
                        });
                        Object.defineProperty(user, "isCustomer", {
                            get: function () {
                                return userType == 'Customer'
                            }
                        });
                    }
                    return $rootScope.isAuthenticated = (user != null);
                },

                getJob: function(){
                    return job;
                },

                updateJob: function(){
                    datacontext.postUpdateJob(job).then(function (data) {
                        job = data.job;
                        logSuccess(data.msg)
                    }).fail(function (error) {
                        logError(error);
                    })
                },

                checkAuth: function () {
                    return (user != null);
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
            return _service;
        }
    ]);
})();