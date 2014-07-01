(function () {
    'use strict';
    var controllerId = 'login';
    angular.module('app').controller(controllerId, ['common', '$location', '$http', 'authService', login]);

    function login(common, $location, $http, authService) {
      var vm = this;
      vm.title = "Login"
      
      var logSuccess = common.logger.getLogFn(controllerId, "success")
      function activate() {
            logSuccess('Login view activated!', null, true);
            common.activateController([], controllerId);
        }

      vm.loginDetails = {
        email: "",
        rememberme: false,
        password: ""
      }

      vm.login = function() {
        $http.post("/login", vm.loginDetails)
        .success(function(data) {
          logSuccess("Welcome " + data.name)
          authService.setUser(data);
          $location.path("/blabla")
        })
        .error(function(err) {
          throw new Error(err);
        })
      }

      activate();
    }
})()