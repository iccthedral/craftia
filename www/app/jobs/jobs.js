(function () {
    'use strict';
    var controllerId = 'Jobs';
    var CONTROLLERS = {};

    // angular.module('app').controller(controllerId, ['$scope', '$rootScope', 'common', 'datacontext', 'authService', jobs]);
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', 'common', 'datacontext', 'authService', 'bootstrap.dialog', Jobs]);


    function Jobs($scope, $rootScope, common, datacontext, authService, dialogs) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        $scope.currentJob = createJobModel($scope);
        $scope.backup = $scope.currentJob;
        $scope.title = 'Jobs';
        $scope.jobSearch = '';
        $scope.rightPartial = "";
        $scope.currentTitle = "";
        $scope.user = authService.getUser();
        $scope.cities = []
        $scope.allJobs = [];
        $scope.ownJobs = [];
        $scope.currentView = '';
        $scope.categories = [];
        $scope.subcategories = [];
        $scope.bidders = [];
        $scope.JobList = JobList();
        $scope.ViewJob = ViewJob();
        $scope.JobPanel = JobPanel();

        //paging
        $scope.sizePerPage = 2;
        $scope.allJobsChunked = [];
        $scope.allJobsTotal = 0;
        $scope.allJobsPaged = [];
        $scope.allJobsCurrentPage = 1;

        $scope.biddersItems = [];
        $scope.biddersTotalItems = 0;
        $scope.biddersCurrentPage = 1;
        $scope.biddersPagedItems = [];

        $scope.myJobsChunked = [];
        $scope.myJobsPaged = [];
        $scope.myJobsTotal = 0;
        $scope.myJobsCurrentPage = 1;

        $scope.allJobsPageSelected = function (page) {
            $scope.allJobsPaged = $scope.allJobsChunked[page.page - 1];
            $scope.allJobsCurrentPage = page.page;
        };

        $scope.myJobsPageSelected = function (page) {
            $scope.myJobsPaged = $scope.myJobsChunked[page.page - 1]
            $scope.myJobsCurrentPage = page.page;
        }

        $scope.biddersPageSelected = function(page) {
            $scope.biddersCurrentPage = page.page;
            $scope.biddersPagedItems = $scope.biddersItems[page.page - 1]
        }

        $scope.search = function ($event) {
            
            if ($scope.jobSearch == '') return getAllJobs();

            var result = $scope.allJobs.filter(function (obj) {
                return (obj.title.indexOf($scope.jobSearch) != -1 ||
                   obj.description.indexOf($scope.jobSearch) != -1 ||
                   obj.author.name.indexOf($scope.jobSearch) != -1);
            });


            $scope.allJobsChunked = result.chunk($scope.sizePerPage);
            $scope.allJobsPaged = $scope.allJobsChunked[0];
            $scope.allJobsTotal = result.length;
        }

        $scope.isBidder = function(jobIndex) {
            return $scope.allJobsPaged[jobIndex].bidders.filter(function (bidder) {
                return (bidder.id === $scope.user._id)
            }).length > 0
        }

        function JobList() {
            $scope.focusedMap = {};
            return {
                getJobs: function () {
                    console.debug($scope.allJobs);
                    return $scope.allJobs;
                },

                showJob: function (jobIndex) {
                    $scope.rightPartial = "app/jobs/bidForJob.html";
                    $scope.currentJob.populate($scope.allJobsPaged[jobIndex]);
                    attachSubcategories($scope.currentJob);
                    $scope.biddersItems = $scope.currentJob.bidders.chunk($scope.sizePerPage);
                    $scope.biddersPagedItems = $scope.biddersItems[0];
                    $scope.biddersTotalItems = $scope.biddersItems.length;
                },

                toggleFocus: function (bidderIndex) {
                    $scope.focusedMap[bidderIndex] = !$scope.focusedMap[bidderIndex];
                },

                getFocus: function (bidderIndex) {
                    return $scope.focusedMap[bidderIndex];
                },

                acceptBid: function (bidderIndex) {
                    var modalScope = $scope;
                    modalScope.ok = function () {
                        datacontext.chooseWinner($scope.currentJob._id, $scope.currentJob.bidders[bidderIndex].id)
                        .done(function (data) {
                            $scope.currentJob.winner = data;
                            $scope.currentJob.status = 'closed';
                            $scope.currentJob.populate(data);
                        });
                    }
                    dialogs.confirmationDialog(
                        "Confirm",
                        "Are you sure you want to accept this craftsman for this job?",
                        "Ok",
                        "Cancel",
                        modalScope
                    )
                }
            }
        }

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

        function createJobModel(scope) {
            console.debug("created job model");
            console.debug($scope.rightPartial);

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
                this.author = {
                    username: "",
                    id: ""
                };
                this.bidders = [];
                this.subcategory = "";
                this.category = "";
                this.status = "";
            }

            JobModel.prototype.populate = function (jobData) {
                for (var key in jobData) {
                    if (this.hasOwnProperty(key)) {
                        console.debug(key);
                        this[key] = angular.copy(jobData[key])
                    }
                }
            }

            JobModel.prototype.isBidder = function () {
                return this.bidders.filter(function (bidder) {
                    return (bidder.id === $scope.user._id)
                }).length > 0
            }

            JobModel.prototype.changeCategory = function () {
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

                prevView: function() {
                     $scope.rightPartial = "app/jobs/jobCreate.html";
                 },

                nextView: function() {
                    $scope.rightPartial = "app/jobs/jobCreate2.html";
                },



                addNewJob: function () {
                    $scope.rightPartial = "app/jobs/jobCreate.html";
                    resetModel();
                },

                editJob: function (job) {
                    $scope.rightPartial = "app/jobs/jobEdit.html";
                    $scope.currentView = "jobpanel";
                    $scope.currentJob = job;
                    $scope.backup = job;
                    datacontext.getCategories().success(function (catdata) {
                        $scope.categories = catdata;
                        var curcat = $scope.currentJob.category;
                        var curscat = $scope.currentJob.subcategories;
                        var fcat = catdata.filter(function (cat) { return cat.name === curcat })[0]
                        $scope.currentJob.selectedCategory.category = fcat;
                        $scope.$digest();
                        datacontext.getSubcategories(fcat.id).success(function (subcats) {
                            $scope.subcategories = subcats;
                            var curscat = $scope.currentJob.subcategory;
                            var fcat = subcats.filter(function (cat) { return cat.name === curscat })[0]
                            $scope.currentJob.selectedCategory.subcategory = fcat;
                            $rootScope.$digest();
                        });
                    });
                    $scope.biddersItems = $scope.currentJob.bidders.chunk($scope.sizePerPage);
                    $scope.biddersPagedItems = $scope.biddersItems[0];
                    $scope.biddersTotalItems = $scope.biddersItems.length;
                    console.debug($scope.biddersItems);
                    console.debug($scope.biddersPagedItems);
                    console.debug($scope.biddersTotalItems)
                },

                partialInit: function () {
                    $("#datefrom").datepicker({ minDate: 0 });
                    $("#dateto").datepicker({ minDate: 0 });
                },

                cancel: function () {
                    $scope.editable = false;
                    $scope.currentJob = angular.copy($scope.backup);
                },

                edit: function () {
                    $scope.editable = true;
                },
                create: function () {
                    var curjob = $scope.currentJob;
                    var jobData = JSON.parse(JSON.stringify(curjob));
                    jobData.address = {
                        city: curjob.city,
                        line1: curjob.address,
                        line2: "test"
                    }
                    jobData.category = curjob.selectedCategory.category.name
                    jobData.subcategory = curjob.selectedCategory.subcategory.name

                    $.post("job/new", jobData)
                    .success(function (job) {
                        var jobic = createJobModel($scope);
                        jobic.populate(job);
                        $scope.user.createdJobs.push(job);
                        getUserJobs();
                        // $scope.ownJobs.push(jobic);
                        resetModel();
                        $rootScope.$digest();
                    });
                },
                save: function () {
                    var data = JSON.parse(JSON.stringify($scope.currentJob));
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
                    return !angular.equals($scope.currentJob, $scope.backup);
                },

                delete: function () {
                    datacontext.deleteJobById($scope.currentJob._id)
                    .success(function () {
                        var ind = $scope.ownJobs.indexOf($scope.currentJob);
                        $scope.ownJobs.splice(ind, 1);
                        resetModel();
                    });
                }
            }

            resetModel()
            return panel;
        }                    
        
        function ViewJob(job) {
            return {
                bid: function () {
                    var modalScope = $scope;
                    modalScope.ok = function () {
                        $.post("job/" + $scope.currentJob._id + "/bid")
                        .success(function (updatedJob) {
                            $scope.allJobsPaged.filter(function (job) {
                                if (job._id === updatedJob._id) {
                                    var ind = $scope.allJobsPaged.indexOf(job)
                                    $scope.allJobsPaged[ind] = updatedJob;
                                }
                            });
                            $scope.currentJob.populate(updatedJob);
                            console.debug($scope.currentJob);
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
                cancelBid: function () {
                    var modalScope = $scope;
                    modalScope.ok = function () {
                        $.post("job/" + $scope.currentJob._id + "/" + $scope.user._id + "/cancelbid")
                        .success(function (updatedJob) {
                            $scope.allJobsPaged.filter(function (job) {
                                if (job._id === updatedJob._id) {
                                    var ind = $scope.allJobsPaged.indexOf(job)
                                    $scope.allJobsPaged[ind] = updatedJob;
                                }
                            });
                            console.debug(updatedJob);
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

        function getCategories(clb) {
            datacontext.getCategories().success(function (catdata) {
                $scope.categories = catdata;
                $scope.currentJob.selectedCategory.category = catdata[0];
                attachSubcategories($scope.currentJob);
            });
        }

        function getAllJobs() {
            return datacontext.getAllJobs().success(function (data) {
                $scope.allJobs = data;
                $scope.allJobsChunked = data.chunk($scope.sizePerPage);
                $scope.allJobsPaged = $scope.allJobsChunked[0];
                $scope.allJobsTotal = data.length;
                console.debug($scope.allJobsPaged);
                $scope.$digest();
            });
        }

        function getUserJobs() {
            if ($scope.user.isCraftsman)
                return

            $scope.ownJobs = $scope.user.createdJobs.map(function (job) {
                var jobic = createJobModel($scope);
                jobic.populate(job);
                return jobic;
            });
            $scope.myJobsChunked = $scope.ownJobs.chunk($scope.sizePerPage);
            $scope.myJobsPaged = $scope.myJobsChunked[$scope.myJobsCurrentPage - 1];
            $scope.myJobsTotal = $scope.ownJobs.length;
        }

        $scope.getCities = function (id) {
            $rootScope.isAjaxHappening = true;
            return $.get('/cities/' + id).then(function (res) {
                $rootScope.isAjaxHappening = false;
                return res
            });
        }

        activate();
        function activate() {
            common.activateController([getCategories(), getAllJobs(), getUserJobs()], controllerId)
                .then(function () { log('Activated Jobs View'); });
        }
    }
})();