(function () {
    'use strict';
    var controllerId = 'messages';
    angular.module('app').controller(controllerId, ['common' ,'$scope', '$rootScope', 'datacontext', 'authService', 'bootstrap.dialog', Messages]);

    function Messages(common, $scope, $rootScope, datacontext, authService, dialogs) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        $scope.title = 'Messages';
        // $scope.currentContact = createContactModel($scope)
        $scope.contactSearch = "";
        $scope.rightPartial = "";
        $scope.currentTitle = "";

        $scope.systemMessages = [];
        $scope.jobMessages = [];
        $scope.otherMessages = [];

        $scope.user = authService.getUser();
        $scope.previousContacts = [];

       // $scope.ContactList = ContactList();
       // $scope.MessagesPanel = MessagesPanel();

        //paging
        $scope.items = [];
        $scope.itemsPaged = [];
        $scope.sizePerPage = 2;
        $scope.totalItems = 0;
        $scope.currentPage = 1;




      
        $scope.showSystem = function() {
            $scope.rightPartial = "app/messages/systemMessages.html";
            $scope.systemMessages = $scope.user.inbox.received.filter(function (msg) {
                if (msg.type === "system") return msg
            })
            $scope.items = $scope.systemMessages.chunk($scope.sizePerPage);
            $scope.itemsPaged = $scope.items[0];
            $scope.totalItems = $scope.systemMessages.length;
        }

        $scope.showJobs = function() {
            $scope.rightPartial = "app/messages/jobMessages.html";
            $scope.jobMessages = $scope.user.inbox.received.filter(function (msg) {
                if (msg.type === "job") return msg
            })
            $scope.items = $scope.jobMessages.chunk($scope.sizePerPage);
            $scope.itemsPaged = $scope.items[0];
            $scope.totalItems = $scope.jobMessages.length;
        }


        $scope.showOther = function() {
            $scope.rightPartial = "app/messages/otherMessages.html";
            $scope.otherMessages = $scope.user.inbox.received.filter(function (msg) {
                if (msg.type === "contact") return msg
            })
            $scope.items = $scope.otherMessages.chunk($scope.sizePerPage);
            $scope.itemsPaged = $scope.items[0];
            $scope.totalItems = $scope.otherMessages.length;
        }


        $scope.pageSelected = function (page) {
            $scope.pagedItems = $scope.items[page.page - 1]
        };

        // $scope.search = function ($event) {
        //     //  debugger;
        //     if ($scope.contactSearch == '') return getAllContacts();

        //     var result = $scope.allContacts.filter(function (obj) {
        //         return (obj.name.indexOf($scope.contactSearch) != -1 ||
        //            obj.surname.indexOf($scope.contactSearch) != -1 ||
        //            obj.email.indexOf($scope.contactSearch) != -1);
        //     });


        //     $scope.items = result.chunk($scope.sizePerPage);
        //     $scope.pagedItems = $scope.items[0];
        //     $scope.totalItems = result.length;
        // }
       
        // function resetModel() {
        //     $scope.currentContact = createContactModel($scope);
        //     $scope.backup = $scope.currentContact;
        // }




        // function createContactModel(scope) {
        //     var ContactModel = function ContactModel(){
        //         this.name = "";
        //         this.surname = "";
        //         this.username = "";
        //         this.rating = "";
        //         this.email = "";
        //         this.messages = [];                
        //     }

        //     ContactModel.prototype.populate = function(contactData) {
        //         for (var key in contactData) {
        //             if (this.hasOwnProperty(key)) {
        //                 this[key] = contactData[key]
        //             }
        //         }
        //     }
        // }

        // function getAllContacts() {
            

        //     return datacontext.getAllCraftsmen().success(function (data) {
        //         $scope.allContacts = data;
        //         $scope.items = data.chunk($scope.sizePerPage);
        //         $scope.pagedItems = $scope.items[0];
        //         $scope.totalItems = data.length;
        //         $scope.$digest();
        //     });
        // }



        // function ContactList() {
        //     return {
        //         getContacts: function () {

        //             console.debug($scope.allContacts);
        //             return $scope.allContacts;
        //         },
        //         showContact: function (contactIndex) {
        //             $scope.rightPartial = "app/messages/chat.html";
        //             $scope.currentContact.populate($scope.pagedItems[contactIndex]);
        //         }
        //     }
        // }

        activate();
        function activate() {
            common.activateController(controllerId)
                .then(function () { log('Activated Messages View'); });
        }

    }
})();