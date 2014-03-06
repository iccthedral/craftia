(function () {
    'use strict';
    var controllerId = 'jobs';
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', 'common', 'datacontext', jobs]);

    function jobs($scope, $rootScope, common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Jobs';
        vm.jobs = [];
        vm.rightPartial = "";
        vm.currentTitle = "";
        vm.partialInit = function() { };
        vm.cities = []

        vm.newjob = {
            categories: [],
            subcategories: [],
            selectedCategory: {
                category: "",
                subcategory: ""
            },
            city: "",
            dateFrom: "",
            dateTo: "",
            title: "",
            description: "",
            budget: "",
            materialProvider: "",

            init: function() {
                var me = vm.newjob
                vm.currentTitle = "Create job";
                vm.rightPartial = "app/jobs/post_job.html";

                vm.partialInit = function () {
                    console.debug("Partial init happened");
                    $("#datefrom").datepicker({ minDate: 0 });
                    $("#dateto").datepicker({ minDate: 0 });
                }

                me.changeCategory = function () {
                    $rootScope.isAjaxHappening = true;
                    datacontext.getSubcategories(me.selectedCategory.category.id).success(function(data) {
                        me.subcategories = data;
                        me.selectedCategory.subcategory = me.subcategories[0];
                        $scope.$digest();
                        $rootScope.isAjaxHappening = false;
                        $rootScope.$digest()
                    });
                }
            },
            
            create: function() {
                var me = vm.newjob;
                $.post("job/new", {
                    title: "Blabla",
                    description: "Ovo je description",
                    materialProvider: "Customer",
                    budget: 50000,
                    address: {
                        zip: 11000,
                        line1: "Holy Shit",
                        line2: ""
                    },
                    category: "Cars",
                    subcategory: "Driver",
                    dateFrom: new Date(),
                    dateTo: new Date()
                })
            }
        }

        vm.getCities = function(id) {
            $rootScope.isAjaxHappening = true;
            return $.get('/cities/' + id).then(function(res) {
                $rootScope.isAjaxHappening = false;
                return res
            });
        }

        function getCategories(me) {
            datacontext.getCategories().success(function(catdata) {
                datacontext.getSubcategories(catdata[0].id).success(function(subcatdata) {
                    me.subcategories = subcatdata;
                    me.categories = catdata;
                    me.selectedCategory.category = me.categories[0];
                    me.selectedCategory.subcategory = me.subcategories[0];
                    $scope.$digest();
                });
            });
        }

        function getJobs() {
            return datacontext.getJobs().then(function (data) {
                return vm.jobs = data;
            });
        }


        activate();

        function activate() {
            common.activateController([getJobs(), getCategories(vm.newjob)], controllerId)
                .then(function () { log('Activated Jobs View'); });
        }
    }
})();