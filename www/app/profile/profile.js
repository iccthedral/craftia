(function () {
    'use strict';
    var controllerId = 'profile';
    angular.module('app').controller(controllerId, ['common','$scope', 'authService', profile]);
  
    function profile(common, $scope, authService) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        $scope.title = 'Profile';
        $scope.editable = false;
        $scope.as = authService;
        $scope.user = authService.getUser();
        $scope.backup = angular.copy($scope.user);
        $scope.leftPartial = "app/profile/leftProfile.html";
        $scope.rightPartial = "app/profile/rightProfile.html";


     




        activate();

        $scope.cancel = function () {
            $scope.editable = false;
            $scope.user = angular.copy($scope.backup);
        }

        $scope.edit= function () {
            $scope.editable = true;
        }
        $scope.save= function () {
            authService.updateUser();
        }
    

        function activate() {
            
            common.activateController(controllerId)
                .then(function () { log('Activated Profile View'); });
        }
    }
})();