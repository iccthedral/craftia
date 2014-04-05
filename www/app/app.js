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
        'angularFileUpload',
        'ui.bootstrap.modal',
        'ui.bootstrap',      // ui-bootstrap (ex: carousel, pagination, dialog)
    ])
    
    Array.prototype.chunk = function(csize) {
     var out = [];
     var i = 0;
     var copy = this.slice();
     var len = copy.length;
     for(i = 0; i < len; i++) {
      if((i % csize) == 0) {
       var howMany = Math.min(copy.length, csize);
       out.push(copy.splice(0, howMany));
      }
     }
     return out;
    };

    app.run(["logger", "gmaps", function(logger, gmaps) {
        gmaps.initGmapsAPI()
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