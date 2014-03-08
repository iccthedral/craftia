(function () {
    'use strict';
    var controllerId = 'craftsmen';
    angular.module('app').controller(controllerId, ['$scope', 'authService', 'datacontext', 'common', craftsmen]);

    function craftsmen($scope, authService, datacontext, common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var that = $scope;
        that.usr = authService.getUser();
        that.title = 'All Jobs';

        // that.currentPage = 1;
        that.page = 1;
        that.itemsPerPage = 2;
        that.maxSize = 5;

        that.filteredItems = [];

        that.numPages = function() {
            return Math.ceil(that.items.length / that.itemsPerPage);
        }

        that.getJobs = function() {
            var from = (that.page-1)*that.itemsPerPage;
            var out = [];
            for(var i = from; i < from + that.itemsPerPage; ++i) {
                var job = that.items[i];
                if (job != null) {
                    out.push(job);
                }
            }
            return out;
        }

        $scope.setPage = function (pageNo) {
            that.totalItems = that.items.length;
            that.filteredItems = that.getJobs();
        };

        function getAllJobs() {
            return datacontext.getAllJobs().then(function(data) {
                that.items = data;
                that.totalItems = that.items.length;
                that.filteredItems = that.getJobs();
                // console.debug(that.numPages());
                that.$digest();
            }).promise();
        }

        activate();
        function activate() {
            common.activateController([getAllJobs()], controllerId)
                .then(function () { log('Activated Craftsmen View'); });
        }
    }
})();