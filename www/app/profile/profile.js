(function () {
    'use strict';
    var controllerId = 'profile';

    angular.module('app').controller(controllerId, ['$rootScope', '$scope', '$upload', 'common', 'authService', 'config', profile]);
  
    function profile($rootScope, $scope, $upload, common, authService, config) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        $scope.title = 'Profile';
        $scope.editable = false;
        $scope.as = authService;
        $scope.user = authService.getUser();
        $scope.backup = angular.copy($scope.user);
        $scope.leftPartial = "app/profile/leftProfile.html";
        $scope.rightPartial = "app/profile/rightProfile.html";

        $scope.uploadPicture = function(files) {
            $rootScope.$broadcast(config.events.spinnerToggle, {show: true});
            $scope.upload = $upload.upload({
                url: "user/uploadpicture",
                file: files[0]
            }).success(function(picurl) {
                $scope.user.profilePic = "";
                setTimeout(function() {
                    $scope.user.profilePic = picurl;
                    $rootScope.$digest();
                    // spinner.spinnerHide();
                }, 100);
            }).then(function() {
                $rootScope.$broadcast(config.events.spinnerToggle, {show: false});
            })
        }
        
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