(function () {
    'use strict';
    var controllerId = 'messages';
    angular.module('app').controller(controllerId, ['common' ,'$scope', '$rootScope', 'datacontext', 'authService', 'bootstrap.dialog', Messages]);

    function Messages(common, $scope, $rootScope, datacontext, authService, dialogs) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        $scope.contactSearch = "";
        $scope.leftPartial = "";
        $scope.rightPartial = "";
        $scope.currentJob = "";

        $scope.systemMessages = [];
        
        //dummy data
        $scope.jobMessages = [
            {
                sender: {
                    name : "John",
                    surname : "Plutonium"
                },
                about: "Subject theme X",
                date: "5. 5. 2014",
                content: "Hi, Goran, when will the code be done?"
            },
            {
                sender: {
                    name : "John",
                    surname : "Plutonium"
                },
                about: "Subject theme X",
                date: "5. 5. 2014",
                content: "Hi, Sermed, when will the design be done?"
            }


        ];
        $scope.contactMessages = [];
        $scope.otherMessages = [];

        $scope.user = authService.getUser();




        //paging
        $scope.items = [];
        $scope.fullyShown = [];
        $scope.itemsPaged = [];
        $scope.sizePerPage = 2;
        $scope.totalItems = 0;
        $scope.currentPage = 1;

      
        $scope.showMessage = function(msgIndex){                      
           var el2 = angular.element("#"+msgIndex).find(".minified-message");
           var el = angular.element("#"+msgIndex).find(".expanded-message");
           el.toggle(500);
           el2.toggle(500);
        }

        $scope.showSystem = function() {
            $scope.leftPartial = "app/messages/systemMessages.html";
            $scope.systemMessages = $scope.user.inbox.received.filter(function (msg) {
                if (msg.type === "system") return msg
            })
            $scope.items = $scope.systemMessages.chunk($scope.sizePerPage);
            $scope.itemsPaged = $scope.items[0];
            $scope.totalItems = $scope.systemMessages.length;
            $scope.currentPage = 1;
        }

        $scope.showJobs = function() {
            $scope.leftPartial = "app/messages/jobMessages.html";
            // $scope.jobMessages = $scope.user.inbox.received.filter(function (msg) {
            //     if (msg.data.subtype === "bif_for_job" || msg.data.subtype === "cancel_jov") return msg.message()
            // })
            $scope.items = $scope.jobMessages.chunk($scope.sizePerPage);
            $scope.itemsPaged = $scope.items[0];
            $scope.totalItems = $scope.jobMessages.length;
            $scope.currentPage = 1;
        }

        $scope.showJobById = function(jobId) {
            $scope.rightPartial = "app/messages/job.html";
            $scope.currentJob = jobId;
        }

        $scope.showContact = function() {
            $scope.leftPartial = "app/messages/contactMessages.html";
            $scope.contactMessages = $scope.user.inbox.received.filter(function (msg) {
                if (msg.type === "contact") return msg
            })
            $scope.items = $scope.contactMessages.chunk($scope.sizePerPage);
            $scope.itemsPaged = $scope.items[0];
            $scope.totalItems = $scope.jobMessages.length;
            $scope.currentPage = 1;
        }

        $scope.showOther = function() {
            $scope.leftPartial = "app/messages/otherMessages.html";
            $scope.otherMessages = $scope.user.inbox.received.filter(function (msg) {
                if (msg.type === "contact") return msg
            })
            $scope.items = $scope.otherMessages.chunk($scope.sizePerPage);
            $scope.itemsPaged = $scope.items[0];
            $scope.totalItems = $scope.otherMessages.length;
            $scope.currentPage = 1;
        }

        $scope.pageSelected = function (page) {
            $scope.itemsPaged = $scope.items[page.page - 1];
            $scope.fullyShown.forEach(function(obj, index){
                $scope.fullyShown[index] = false;
            })
        };

        activate();
        function activate() {
            common.activateController(controllerId)
                .then(function () { log('Activated Messages View'); });
        }

    }
})();