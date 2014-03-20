(function () {
    'use strict';
    var controllerId = 'profile';
// <<<<<<< HEAD
    angular.module('app').controller(controllerId, ['$rootScope', '$scope', '$upload', 'common', 'authService', profile]);
  
    function profile($rootScope, $scope, $upload, common, authService) {
// =======
    // angular.module('app').controller(controllerId, ['common','$scope', 'authService', profile]);
  
    // function profile(common, $scope, authService) {
// >>>>>>> 0076d8c842a6371d206d7128420683dfa681cfb3

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

// <<<<<<< HEAD
//         var vm = this;
//         vm.title = 'Profile';
//         vm.editable = false;
//         vm.as = authService;
//         $scope.user = authService.getUser();
//         vm.backup = angular.copy(vm.user);
//         vm.leftPartial = "app/profile/leftProfile.html";
//         vm.rightPartial = "app/profile/rightProfile.html";
// =======
        $scope.title = 'Profile';
        $scope.editable = false;
        $scope.as = authService;
        $scope.user = authService.getUser();
        $scope.backup = angular.copy($scope.user);
        $scope.leftPartial = "app/profile/leftProfile.html";
        $scope.rightPartial = "app/profile/rightProfile.html";
// >>>>>>> 0076d8c842a6371d206d7128420683dfa681cfb3

        $scope.uploadPicture = function(files) {
            $scope.upload = $upload.upload({
                url: "user/uploadpicture",
                file: files[0]
            }).success(function(picurl) {
                console.debug(picurl);
                $scope.user.profilePic = "";
                setTimeout(function() {
                    $scope.user.profilePic = picurl;
                    $rootScope.$digest();
                }, 100);
            });
        }

// <<<<<<< HEAD
        //function CraftsmanPanel() {
        //    $scope.editable = false;

        //    var panel = {
        //        editCraftsman: function (craftsman) {
        //            $scope.rightPartial = "app/profile/craftsmanEdit.html";
        //            $scope.currentView = "craftsmanpanel";
        //            $scope.currentCraftsman = craftsman;
        //            $scope.backup = craftsman;
        //            //datacontext.getCategories().success(function (catdata) {
        //            //    $scope.categories = catdata;
        //            //    var curcat = $scope.currentJob.category;
        //            //    var curscat = $scope.currentJob.subcategories;
        //            //    console.debug(curcat)

        //            //    var fcat = catdata.filter(function (cat) { return cat.name === curcat })[0]
        //            //    console.debug(fcat)
        //            //    $scope.currentJob.selectedCategory.category = fcat;
        //            //    $scope.$digest();
        //            //    datacontext.getSubcategories(fcat.id).success(function (subcats) {
        //            //        $scope.subcategories = subcats;
        //            //        var curscat = $scope.currentJob.subcategory;
        //            //        var fcat = subcats.filter(function (cat) { return cat.name === curscat })[0]
        //            //        $scope.currentJob.selectedCategory.subcategory = fcat;
        //            //        $rootScope.$digest();
        //            //    });
        //            //});
        //        },

        //        partialInit: function () {
        //            $("#datefrom").datepicker({ minDate: 0 });
        //            $("#dateto").datepicker({ minDate: 0 });
        //        },

        //        cancel: function () {
        //            $scope.editable = false;
        //            $scope.currentCraftsman = angular.copy($scope.backup);
        //        },

        //        edit: function () {
        //            $scope.editable = true;
        //        },
        //        save: function () {
        //            var data = JSON.parse(JSON.stringify($scope.currentCraftsman));
        //            // delete data.address;
        //            delete data._id;
        //            console.debug(data);
        //            data.category = data.selectedCategory.category.name;
        //            data.subcategory = data.selectedCategory.subcategory.name;

        //            $.post("/job/" + $scope.currentJob._id + "/update", data)
        //            .done(function () {
        //                log("Job successfuly updated")
        //            });
        //        },

        //        isChanged: function () {
        //            console.debug(angular.equals($scope.currentCraftsman, $scope.backup));
        //            return !angular.equals($scope.currentCraftsman, $scope.backup);
        //        },

        //        //delete: function () {
        //        //    datacontext.deleteJobById($scope.currentJob._id)
        //        //    .success(function () {
        //        //        var ind = $scope.ownJobs.indexOf($scope.currentJob);
        //        //        $scope.ownJobs.splice(ind, 1);
        //        //        resetModel();
        //        //    });
        //        //}
        //    }

        //    resetModel()
        //    return panel;
        //}

        
// =======
     
// >>>>>>> 0076d8c842a6371d206d7128420683dfa681cfb3

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