(function () {
    'use strict';
    var controllerId = 'Craftsmen';
    angular.module('app').controller(controllerId, ['$scope', 'authService', 'datacontext', 'common', Craftsmen]);

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
        $scope.CraftsmanList = CraftsmanList;
        $scope.ViewCraftsman = ViewCraftsman;
        
        $scope.setPage = function (pageNo) {
            $scope.totalItems = $scope.items.length;
            $scope.filteredItems = $scope.getJobs();
        };

        $scope.numPages = function () {
            return Math.ceil($scope.items.length / that.itemsPerPage);
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

            CraftsmanModel.prototype.populate = function (craftsmanData) {
                for (var key in craftsmanData) {
                    if (this.hasOwnProperty(key)) {
                        this[key] = craftsmanData[key]
                    }
                }
            }

            CraftsmanModel.prototype.isRater = function () {
                return this.raters.filter(function (rater) {
                    return (rater.id === $scope.user._id)
                }).length > 0
            }

            CraftsmanModel.prototype.changeCategory = function () {
                console.debug(this);
                attachSubcategories(this);
            }

            function resetModel() {
                $scope.currentCraftsman = createCraftsmanModel($scope);
                $scope.backup = $scope.currentCraftsman;
            }

            return new CraftsmanModel(scope);
        }

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
            return datacontext.getAllCraftsmen().then(function (data) {
                $scope.items = data;
                $scope.totalItems = $scope.items.length;
                $scope.filteredItems = $scope.items;
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