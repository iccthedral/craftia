(function () {
    'use strict';

    var serviceId = 'authService';
    var app = angular.module("app");

    app.service(serviceId, ['$http','$rootScope', '$location', 'datacontext',
        function authService($http, $rootScope, $location, datacontext) {
            console.debug("auth service called")
            var user = {};
            var userType = "";
            var isCustomer = false;
            var isCraftsman = false;
            var isAuthenticated = false;

            var job = {
                title: 'Refurnish old furniture',
                author: 'John',
                skills: ['Carpenter'],
                startingDate: new Date(),
                endingDate: new Date()
            };

            var user = {}
            $rootScope.isAjaxHappening = false;
            
            var _service = {
                getUser: function() {
                    return user;                    
                },  

                getUserType: function () {
                    if (user != undefined) { userType = user.type;}
                    return userType;
                },

                setUser: function (newUser) {
                    console.debug("set User called", newUser)
                    user = newUser;
                    isAuthenticated = (user != null)
                    $rootScope.isAuthenticated = (user != null);
                    return isAuthenticated;
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

            return _service;
        }
    ]);
})();