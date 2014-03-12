(function () {
    'use strict';
    var controllerId = 'Craftsmen';
    angular.module('app').controller(controllerId, ['$scope', 'authService', 'datacontext', 'common', craftsmen]);

    function Craftsmen($scope, authService, datacontext, common) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

       

        // that.currentPage = 1;
        $scope.page = 1;
        $scope.itemsPerPage = 2;
        $scope.maxSize = 5;
        $scope.allCraftsmen = [];
        $scope.currentCraftsman = createCraftsmanModel($scope);
        $scope.backup = $scope.currentCraftsman;
        $scope.usr = authService.getUser();
        $scope.title = 'Craftsmen';



        function createCraftsmanModel(scope) {
            var CraftsmanModel = function CraftsmanModel() {
                this.selectedCategories = [];
                this._id = "";
                this.city = "";
                this.dateFrom = "";
                this.dateTo = "";
                this.title = "";
                this.description = "";
                this.budget = "";
                this.materialProvider = "";
                this.address = "";
                this.author = {};
                this.bidders = [];
                this.subcategory = "";
                this.category = "";
            }

            JobModel.prototype.populate = function (craftsmanData) {
                for (var key in craftsmanData) {
                    if (this.hasOwnProperty(key)) {
                        this[key] = craftsmanData[key]
                    }
                }
            }

            JobModel.prototype.isRater = function () {
                return this.raters.filter(function (rater) {
                    return (rater.id === $scope.user._id)
                }).length > 0
            }

            JobModel.prototype.changeCategory = function () {
                console.debug(this);
                attachSubcategories(this);
            }

            return new CraftsmanModel(scope);
        }


        function CraftsmanPanel() {
            $scope.editable = false;

            var panel = {
                editCraftsman: function (craftsman) {
                    $scope.rightPartial = "app/profile/craftsmanEdit.html";
                    $scope.currentView = "craftsmanpanel";
                    $scope.currentCraftsman = craftsman;
                    $scope.backup = craftsman;
                    //datacontext.getCategories().success(function (catdata) {
                    //    $scope.categories = catdata;
                    //    var curcat = $scope.currentJob.category;
                    //    var curscat = $scope.currentJob.subcategories;
                    //    console.debug(curcat)

                    //    var fcat = catdata.filter(function (cat) { return cat.name === curcat })[0]
                    //    console.debug(fcat)
                    //    $scope.currentJob.selectedCategory.category = fcat;
                    //    $scope.$digest();
                    //    datacontext.getSubcategories(fcat.id).success(function (subcats) {
                    //        $scope.subcategories = subcats;
                    //        var curscat = $scope.currentJob.subcategory;
                    //        var fcat = subcats.filter(function (cat) { return cat.name === curscat })[0]
                    //        $scope.currentJob.selectedCategory.subcategory = fcat;
                    //        $rootScope.$digest();
                    //    });
                    //});
                },

                partialInit: function () {
                    $("#datefrom").datepicker({ minDate: 0 });
                    $("#dateto").datepicker({ minDate: 0 });
                },

                cancel: function () {
                    $scope.editable = false;
                    $scope.currentCraftsman = angular.copy($scope.backup);
                },

                edit: function () {
                    $scope.editable = true;
                },  
                save: function () {
                    var data = JSON.parse(JSON.stringify($scope.currentCraftsman));
                    // delete data.address;
                    delete data._id;
                    console.debug(data);
                    data.category = data.selectedCategory.category.name;
                    data.subcategory = data.selectedCategory.subcategory.name;

                    $.post("/job/" + $scope.currentJob._id + "/update", data)
                    .done(function () {
                        log("Job successfuly updated")
                    });
                },

                isChanged: function () {
                    console.debug(angular.equals($scope.currentCraftsman, $scope.backup));
                    return !angular.equals($scope.currentCraftsman, $scope.backup);
                },

                //delete: function () {
                //    datacontext.deleteJobById($scope.currentJob._id)
                //    .success(function () {
                //        var ind = $scope.ownJobs.indexOf($scope.currentJob);
                //        $scope.ownJobs.splice(ind, 1);
                //        resetModel();
                //    });
                //}
            }

            resetModel()
            return panel;
        }


        function ViewCraftsman(craftsman) {
            return {
                rating: function () {
                    var modalScope = $scope;
                    modalScope.ok = function () {
                        $.post("job/" + $scope.currentCraftsman._id + "/bid")
                        .success(function (updateCraftsman) {
                            $scope.allJobs.filter(function (job) {
                                if (job._id === updatedCraftsman._id) {
                                    var ind = $scope.allJobs.indexOf(job)
                                    $scope.allJobs[ind] = updatedCraftsman;
                                }
                            });
                            $scope.currentCraftsman.populate(updatedCraftsman);
                            $rootScope.$digest()
                            log("You rated successfully")
                        });
                    };
                    dialogs
                    .confirmationDialog(
                        "Confirm",
                        "Are you sure you want to rate this craftsman?",
                        "Ok",
                        "Cancel",
                        modalScope
                    )
                }
            }
        }



        function resetModel() {
            $scope.currentCraftsman = createCraftsmanModel($scope);
            $scope.backup = $scope.currentCraftsman;
        }

        $scope.numPages = function () {
            return Math.ceil($scope.items.length / that.itemsPerPage);
        }

        //that.getJobs = function() {
        //    var from = (that.page-1)*that.itemsPerPage;
        //    var out = [];
        //    for(var i = from; i < from + that.itemsPerPage; ++i) {
        //        var job = that.items[i];
        //        if (job != null) {
        //            out.push(job);
        //        }
        //    }
        //    return out;
        //}

        $scope.setPage = function (pageNo) {
            $scope.totalItems = $scope.items.length;
            $scope.filteredItems = $scope.getJobs();
        };


        function CraftsmanList() {
            return {
                getCraftsmen: function () {

                },
                showCraftsman: function (craftsmanIndex) {
                    $scope.rightPartial = "app/craftsmen/craftsmanProfile",
                    $scope.currentCraftsman.populate($scope.allCraftsmen[craftsmanIndex]);
                }
            }
        }





        function getAllCraftsmen() {
            return datacontext.getAllCraftsmen().then(function(data) {
                $scope.items = data;
                $scope.totalItems = that.items.length;
                $scope.filteredItems = that.items;
                // console.debug(that.numPages());
                $scope.$digest();
            }).promise();
        }

        activate();
        function activate() {
            common.activateController([getAllCraftsmen()], controllerId)
                .then(function () { log('Activated Craftsmen View'); });
        }
    }
})();