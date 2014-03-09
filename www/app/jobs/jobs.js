(function () {
    'use strict';
    var controllerId = 'jobs';
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', 'common', 'datacontext', 'authService', jobs]);

    function jobs($scope, $rootScope, common, datacontext, authService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Jobs';
        vm.jobs = [];
        vm.rightPartial = "";
        vm.currentTitle = "";
        vm.partialInit = function() { };
        vm.cities = []
        vm.usr = authService.getUser();
        vm.isCraftsman = (authService.getUserType() == 'Craftsman');
        vm.isCustomer = (authService.getUserType() == 'Customer');
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
            address: "",

            init: function() {
                var me = vm.newjob
                vm.currentTitle = "Create job";
                vm.rightPartial = "app/jobs/jobCreate.html";

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
                        $rootScope.$digest();
                    });
                }
            },
            resetModel: function() {
                var me = vm.newjob;
                me.categories = [];
                me.subcategories = [];
                me.selectedCategory = {
                    category: me.categories[0],
                    subcategory: me.subcategories[0]
                };
                me.city = "";
                me.dateFrom = "";
                me.dateTo = "";
                me.title = "";
                me.description = "";
                me.budget = "";
                me.materialProvider = "";
                me.address = "";
            },
            create: function() {
                var me = vm.newjob;
                var jobData = {
                    title: vm.newjob.title,
                    description: vm.newjob.description,
                    materialProvider: vm.newjob.materialProvider,
                    budget: vm.newjob.budget,
                    address: {
                        name: vm.newjob.city,
                        line1: vm.newjob.address,
                        line2: ""
                    },
                    category: vm.newjob.selectedCategory.category.name,
                    subcategory: vm.newjob.selectedCategory.subcategory.name,
                    dateFrom: vm.newjob.dateFrom,
                    dateTo: vm.newjob.dateTo,
                    bidders: []
                }
                $.post("job/new", jobData)
                .success(function(job) {
                    console.debug(job);
                    vm.usr.createdJobs.push(job);
                    me.resetModel();
                    $rootScope.$digest();
                });
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
            console.debug(vm.usr);
            return vm.usr.createdJobs;
        }

        function getAllJobs() {
            return vm.usr.createdJobs;
        }

        activate();

        function activate() {
            common.activateController([getCategories(vm.newjob)], controllerId)
                .then(function () { log('Activated Jobs View'); });
        }
    }
})();