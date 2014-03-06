(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getJobs: getJobs,
            getCraftsmen: getCraftsmen,
            postRegister: postRegister,
            postUpdateUser: postUpdateUser
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getCraftsmen() {
            var craftsmen = [
                { title: 'Refurnish old furniture', author: 'John', skills: ['Carpenter'], startingDate: new Date(), endingDate: new Date() },
                { title: 'Fix water leak', author: 'Jane', skills: ['Plumber'], startingDate: new Date(), endingDate: new Date() },
                { title: 'Repair washing machine', author: 'Jimmy', skills: ['Mechanic'], startingDate: new Date(), endingDate: new Date() },
                { title: 'Make new windows', author: 'Jack', skills: ['Carpenter'], startingDate: new Date(), endingDate: new Date() },
                { title: 'Seduce my wife', author: 'George', skills: ['Mofo'], startingDate: new Date(), endingDate: new Date() }
            ];
            return $q.when(craftsmen);
        }


        function getJobs() {
            var jobs = [
                { title: 'Refurnish old furniture', author: 'John',     skills: ['Carpenter'], startingDate: new Date(), endingDate: new Date() },
                { title: 'Fix water leak', author: 'Jane',              skills: ['Plumber'], startingDate: new Date(), endingDate: new Date() },
                { title: 'Repair washing machine', author: 'Jimmy',     skills: ['Mechanic'], startingDate: new Date(), endingDate: new Date() },
                { title: 'Make new windows', author: 'Jack',            skills: ['Carpenter'], startingDate: new Date(), endingDate: new Date() },
                { title: 'Seduce my wife', author: 'George',            skills: ['Mofo'], startingDate: new Date(), endingDate: new Date() }
            ];
            return $q.when(jobs);
        }

        function getPeople() {
            var people = [
                { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return $q.when(people);
        }

        function postRegister(user) {
            var url = "/register-craftsman";
            if(user.type === "Customer") {
                url = "/register-customer"
            }
            return $.post(url, user);
        }

        function postUpdateUser(user) {
            var url = "/update-user";
            return $.post(url, user);
        }

        function postUpdateJob(job) {
            var url = "/update-job";
            return $.post(url, job);
        }
    }
})();