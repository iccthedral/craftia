(function () {
    'use strict';

    var serviceId = 'authService';
    var app = angular.module("app");

    app.service(serviceId, ['$http','$rootScope', '$location', 'datacontext',
        function authService($http, $rootScope, $location, datacontext) {
            console.debug("auth service called")
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

                getUID: function() {
                    return user._id;
                },

                getProfilePicture: function() {
                    return (user.profilePic || "img/default_user.jpg")
                },

                setUser: function (newUser) {
                    console.debug("set User called", newUser)
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
                        window.user = user;
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