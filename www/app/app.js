(function () {
    'use strict';
    
    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
        // Custom modules 
        'common',           // common functions, logger, spinner
        'common.bootstrap', // bootstrap dialog wrapper functions
        // 3rd Party Modules
        'ui.bootstrap',      // ui-bootstrap (ex: carousel, pagination, dialog)
    ])

    app.run(["logger", function(logger) {
        window.onerror = function(msg) {
            logger.logError(msg);
        }
    }]);

    // app.run(['$route',  function ($route) {
    //     $.getJSON("app/translations/en.json").then(function(lang) {
    //         window.LANG = lang
    //     });
    // }]);
    // app.run(['',  function (_) {
    //     console.debug(_);
    //     _.then(function(bla) {
    //         app.factory('authService', ['$timeout', '$http','$rootScope', '$location', '$q', 'datacontext', (function(bla) {
    //             return function() {
    //                 bla.clb($timeout, $http, $rootScope, $location, $q, datacontext, bla.user);
    //             }
    //         }(bla))]);
    //     });
    // }]);

})();