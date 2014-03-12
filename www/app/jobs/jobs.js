(function () {
    'use strict';
    var controllerId = 'Jobs';
    var CONTROLLERS = {};

    // angular.module('app').controller(controllerId, ['$scope', '$rootScope', 'common', 'datacontext', 'authService', jobs]);
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', 'common', 'datacontext', 'authService', 'bootstrap.dialog', Jobs]);


    function Jobs($scope, $rootScope, common, datacontext, authService, dialogs) {
        
        $scope.currentJob = createJobModel($scope);
        $scope.backup = $scope.currentJob;
        $scope.title = 'Jobs';
        $scope.rightPartial = "";
        $scope.currentTitle = "";
        $scope.user = authService.getUser();
        $scope.cities = []
        $scope.allJobs = [];
        $scope.ownJobs = [];
        $scope.currentView = '';
        $scope.categories = [];
        $scope.subcategories = [];


        function attachSubcategories(that) {
            console.debug(that);
            $rootScope.isAjaxHappening = true;
            datacontext.getSubcategories(that.selectedCategory.category.id).success(function (data) {
                $scope.subcategories = data;
                that.selectedCategory.subcategory = $scope.subcategories[0];
                $rootScope.isAjaxHappening = false;
                $rootScope.$digest();
            });
        }

        function createJobModel (scope) {
            var JobModel = function JobModel() {
                this.selectedCategory = {
                    category: "",
                    subcategory: ""
                };
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

            JobModel.prototype.populate = function(jobData) {
                for(var key in jobData) {
                    if (this.hasOwnProperty(key)) {
                        this[key] = jobData[key]
                    }
                }
            }

            JobModel.prototype.isBidder = function() {
                return this.bidders.filter(function(bidder) {
                    return (bidder.id === $scope.user._id)
                }).length > 0
            }

            JobModel.prototype.changeCategory = function() {
                console.debug(this);
                attachSubcategories(this);
            }

            return new JobModel(scope);
        }


        function resetModel() {
            $scope.currentJob = createJobModel($scope);
            $scope.backup = $scope.currentJob;
        }   

        function JobPanel() {
            $scope.editable = false;

            var panel = {
                addNewJob: function() {
                    $scope.rightPartial = "app/jobs/jobCreate.html";
                    resetModel();
                },

                editJob: function(job) {
                    $scope.rightPartial = "app/jobs/jobEdit.html";
                    $scope.currentView = "jobpanel";
                    $scope.currentJob = job;
                    $scope.backup = job;
                    datacontext.getCategories().success(function (catdata) {
                        $scope.categories =  catdata;
                        var curcat = $scope.currentJob.category;
                        var curscat = $scope.currentJob.subcategories;
                        console.debug (curcat)

                        var fcat = catdata.filter(function(cat) { return cat.name === curcat})[0]
                        console.debug (fcat)
                        $scope.currentJob.selectedCategory.category = fcat;
                        $scope.$digest();
                        datacontext.getSubcategories(fcat.id).success(function(subcats) {
                            $scope.subcategories = subcats;
                            var curscat = $scope.currentJob.subcategory;
                            var fcat = subcats.filter(function(cat) { return cat.name === curscat})[0]
                            $scope.currentJob.selectedCategory.subcategory = fcat;
                            $rootScope.$digest();
                        });
                    });
                },

                partialInit: function() {
                    $("#datefrom").datepicker({ minDate: 0 });
                    $("#dateto").datepicker({ minDate: 0 });
                },

                cancel: function() {
                    $scope.editable = false;
                    $scope.currentJob = angular.copy($scope.backup);
                },

                edit: function() {
                    $scope.editable = true;
                },
                create: function() {
                    var curjob = $scope.currentJob;
                    var jobData = JSON.parse(JSON.stringify(curjob));
                    jobData.address = {
                        name: curjob.city,
                        line1: curjob.address,
                        line2: "test"
                    }
                    jobData.category = curjob.selectedCategory.category.name
                    jobData.subcategory = curjob.selectedCategory.subcategory.name

                    $.post("job/new", jobData)
                    .success(function(job) {
                        console.debug(job);
                        var jobic = createJobModel($scope);
                        jobic.populate(job);
                        $scope.user.createdJobs.push(job);
                        $scope.ownJobs.push(jobic);
                        resetModel();
                        $rootScope.$digest();
                    });
                },
                save: function() {
                    var data = JSON.parse(JSON.stringify($scope.currentJob));
                    // delete data.address;
                    delete data._id;
                    console.debug (data);
                    data.category = data.selectedCategory.category.name;
                    data.subcategory = data.selectedCategory.subcategory.name;

                    $.post("/job/"+$scope.currentJob._id+"/update", data)
                    .done(function() {
                        log("Job successfuly updated")
                    });
                },

                isChanged: function() {
                    console.debug(angular.equals($scope.currentJob, $scope.backup));
                    return !angular.equals($scope.currentJob, $scope.backup);
                },
                
                delete: function() {
                    datacontext.deleteJobById($scope.currentJob._id)
                    .success(function() {
                        var ind = $scope.ownJobs.indexOf($scope.currentJob);
                        $scope.ownJobs.splice(ind, 1);
                        resetModel();
                    });
                }
            }

            resetModel()
            return panel;
            // function delete() {
            //     datacontext.deleteJobById($scope.currentJob._id)
            //     .success(function () {
            //         var ind = $scope.user.createdJobs.indexOf(currentJob);
            //         $scope.usr.createdJobs.splice(ind, 1);
            //         currentJob = backup = {}
            //     });
            // }
        }

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        // var catName = job.category;
        // datacontext.getCategories().success(function (catdata) {
        //     var catI;
        //     for (catI = 0; catdata.length; catI++) { if (catdata[catI].name == catName) break }
        //     datacontext.getSubcategories(catdata[catI].id).success(function (subcatdata) {
        //         $scope.viewjob.currentJob.subcategories = subcatdata;
        //         $scope.viewjob.currentJob.categories = catdata;
        //         $scope.$digest();
        //     });                                                                   
        // });                                                                       
        // $scope.viewjob.currentJob.selectedCategory = {                                
        //     category: $scope.viewjob.currentJob.category,                             
        //     subcategory: $scope.viewjob.currentJob.subcategory                        
        // }      

        // $scope.currentView = 'viewjob';                                               
        // $scope.rightPartial = "app/jobs/jobInfo.html";                                
        // return $scope.viewjob.currentJob;

        function JobList () {
            return {
                getJobs: function() {
                    console.debug($scope.allJobs);
                    return $scope.allJobs;
                },
                showJob: function(jobIndex) {
                    $scope.rightPartial = "app/jobs/jobInfo.html";
                    $scope.currentJob.populate($scope.allJobs[jobIndex]);
                    attachSubcategories($scope.currentJob);
                }
            }
        }                             

        function ViewJob (job) {
            return {
                bid: function() {
                    var modalScope = $scope;
                    modalScope.ok = function() {
                        $.post("job/"+$scope.currentJob._id+"/bid")
                        .success(function(updatedJob) {
                            $scope.allJobs.filter(function(job) {
                                if (job._id === updatedJob._id) {
                                    var ind = $scope.allJobs.indexOf(job)
                                    $scope.allJobs[ind] = updatedJob;
                                }
                            });
                            $scope.currentJob.populate(updatedJob);
                            $rootScope.$digest()
                            log("You bidded successfully")
                        });
                    };
                    dialogs
                    .confirmationDialog(
                        "Confirm", 
                        "Are you sure you want to bid for this job?", 
                        "Ok", 
                        "Cancel",
                        modalScope
                    )
                },
                cancelBid: function() {
                    var modalScope = $scope;
                    modalScope.ok = function() {
                        $.post("job/"+$scope.currentJob._id+"/"+$scope.user._id+"/cancelbid")
                        .success(function(updatedJob) {
                            $scope.allJobs.filter(function(job) {
                                if (job._id === updatedJob._id) {
                                    var ind = $scope.allJobs.indexOf(job)
                                    $scope.allJobs[ind] = updatedJob;
                                }
                            });
                            $scope.currentJob.populate(updatedJob);
                            $rootScope.$digest()
                            log("You canceled the bid successfully")
                        });
                    };
                    dialogs
                    .confirmationDialog(
                        "Confirm", 
                        "Are you sure you want to cancel this bid?", 
                        "Ok", 
                        "Cancel",
                        modalScope
                    )
                }
            }
        }                                                
        
        function getCategories (clb) {
            datacontext.getCategories().success(function (catdata) {
                $scope.categories =  catdata;
                $scope.currentJob.selectedCategory.category = catdata[0];
                attachSubcategories($scope.currentJob);
            });
        }

        function getAllJobs() {
            return datacontext.getAllJobs().success(function (data) {
                $scope.allJobs = data;
            });
        }

        function getUserJobs() {
            $scope.ownJobs = $scope.user.createdJobs.map(function(job) {
                var jobic = createJobModel($scope);
                jobic.populate(job);
                return jobic;
            });
        }

        $scope.getCities = function (id) {
            $rootScope.isAjaxHappening = true;
            return $.get('/cities/' + id).then(function (res) {
                $rootScope.isAjaxHappening = false;
                return res
            });
        }

        $scope.JobList = JobList();
        $scope.ViewJob = ViewJob();
        $scope.JobPanel = JobPanel();

        activate();
        function activate() {
            common.activateController([getCategories(), getAllJobs(), getUserJobs()], controllerId)
                .then(function () { log('Activated Jobs View'); });
        }
    }
})();