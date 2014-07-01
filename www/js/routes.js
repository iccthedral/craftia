define(["app", "angular"], function(app, angular) {
  return app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("index");
    $stateProvider.state("index", {
      url: "",
      controller: function($state, user) {
        return $state.transitionTo(user.getType || "anon");
      }
    });
    $stateProvider.state("anon", {
      url: "/anon",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html",
          controller: "ShellCtrl"
        },
        "navmenu@anon": {
          templateUrl: "shared/templates/layout/anonMainNav.html"
        },
        "navSubMenu@anon": {
          templateUrl: "shared/templates/layout/navSubMenu.html"
        },
        "navbar@anon": {
          templateUrl: "shared/templates/layout/anonUserBar.html"
        },
        "shell@anon": {
          templateUrl: "shared/templates/layout/anonMainShell.html",
          controller: "AnonCtrl"
        }
      }
    }).state("anon.yellowPages", {
      url: "/yellowPages",
      views: {
        "shell@anon": {
          templateUrl: "/shared/templates/layout/yellowPages.html",
          controller: "YellowPagesCtrl"
        }
      }
    }).state("anon.login", {
      url: "/login",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/forms/login.html",
          controller: "LoginCtrl"
        }
      }
    }).state("anon.register", {
      url: "/register",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/forms/registration.html"
        }
      }
    }).state("anon.register.customer", {
      url: "/customer",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/forms/registerCustomer.html",
          controller: "RegisterCtrl"
        }
      }
    }).state("anon.register.craftsman", {
      url: "/craftsman",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/forms/registerCraftsman.html",
          controller: "RegisterCtrl"
        }
      }
    }).state("craftsmanMenu", {
      url: "/craftsmanMenu",
      parent: "anon",
      views: {
        "navSubMenu@anon": {
          templateUrl: "shared/templates/layout/craftsmanMenu.html"
        }
      }
    }).state("craftsmanMenu.findJobs", {
      url: "/findJobs:page",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/findJobs.html",
          controller: "FindJobsCtrl"
        }
      }
    }).state("craftsmanMenu.requirements", {
      url: "/requirements",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/requirements.html"
        }
      }
    }).state("craftsmanMenu.howto", {
      url: "/howto",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/howto.html"
        }
      }
    }).state("craftsmanMenu.prices", {
      url: "/prices",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/prices.html"
        }
      }
    });
    $stateProvider.state("customer", {
      url: "/customer",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html",
          controller: "ShellCtrl"
        },
        "navmenu@customer": {
          templateUrl: "shared/templates/layout/customerMainNav.html",
          controller: "NavCtrl"
        },
        "navbar@customer": {
          templateUrl: "shared/templates/layout/customerBar.html"
        }
      }
    }).state("customer.profile", {
      url: "/profile",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/forms/customerProfile.html",
          controller: "CustomerProfileCtrl"
        }
      }
    }).state("customer.notifications", {
      url: "/notifications",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/layout/notifications.html",
          controller: "NotificationsCtrl"
        }
      }
    }).state("customer.messages", {
      url: "/messages",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/layout/inbox.html",
          controller: "InboxCtrl"
        }
      }
    }).state("customer.messages.sent", {
      url: "/sent",
      views: {
        "main@customer.messages": {
          templateUrl: "/shared/templates/layout/sentMessages.html"
        }
      }
    }).state("customer.messages.received", {
      url: "/received",
      views: {
        "main@customer.messages": {
          templateUrl: "/shared/templates/layout/receivedMessages.html"
        }
      }
    }).state("customer.jobs", {
      url: "/jobs",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/layout/customerJobList.html",
          controller: "CustomerJobsCtrl"
        }
      }
    }).state("customer.createJob", {
      url: "/createJob",
      views: {
        "shell@customer": {
          template: "<div ng-if=\"firstStep\" ng-include=\"'shared/templates/forms/createJob1.html'\"></div>\n<div ng-if=\"secondStep\" ng-include=\"'shared/templates/forms/createJob2.html'\"></div>",
          controller: "CreateJobCtrl"
        }
      }
    }).state("customer.editJob", {
      url: "/editJob/:jobId",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/forms/editJob.html",
          controller: "EditJobCtrl"
        }
      }
    }).state("customer.testpage", {
      url: "/testPage",
      views: {
        "shell@customer": {
          template: " Hi kolega ",
          controller: function($scope) {
            return $scope.x = 10;
          }
        }
      }
    }).state("customer.findJobs", {
      url: "/findJobs",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/findJobs.html",
          controller: "FindJobsCtrl"
        }
      }
    }).state("customer.yellowPages", {
      url: "/yellowPages",
      views: {
        "shell@customer": {
          templateUrl: "/shared/templates/layout/yellowPages.html",
          controller: "CustomerYellowPagesCtrl"
        }
      }
    });
    return $stateProvider.state("craftsman", {
      url: "/craftsman",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html",
          controller: "ShellCtrl"
        },
        "navmenu@craftsman": {
          templateUrl: "shared/templates/layout/craftsmanMainNav.html",
          controller: "NavCtrl"
        },
        "navbar@craftsman": {
          templateUrl: "shared/templates/layout/craftsmanBar.html"
        }
      }
    }).state("craftsman.messages", {
      url: "/messages",
      views: {
        "shell@craftsman": {
          templateUrl: "shared/templates/layout/inbox.html",
          controller: "InboxCtrl"
        }
      }
    }).state("craftsman.messages.sent", {
      url: "/sent",
      views: {
        "main@craftsman.messages": {
          templateUrl: "/shared/templates/layout/sentMessages.html"
        }
      }
    }).state("craftsman.messages.received", {
      url: "/received",
      views: {
        "main@craftsman.messages": {
          templateUrl: "/shared/templates/layout/receivedMessages.html"
        }
      }
    }).state("craftsman.findJobs", {
      url: "/findJobs",
      views: {
        "shell@craftsman": {
          templateUrl: "shared/templates/layout/craftsmanFindJobs.html",
          controller: "CraftsmanFindJobsCtrl"
        }
      }
    }).state("craftsman.yellowPages", {
      url: "/yellowPages",
      views: {
        "shell@craftsman": {
          templateUrl: "/shared/templates/layout/yellowPages.html",
          controller: "CraftsmanYellowPagesCtrl"
        }
      }
    }).state("craftsman.notifications", {
      url: "/notifications",
      views: {
        "shell@craftsman": {
          templateUrl: "shared/templates/layout/notifications.html",
          controller: "NotificationsCtrl"
        }
      }
    });
  }).run([
    "$state", "$location", "$http", "$rootScope", "$urlMatcherFactory", "cAPI", "logger", "user", function($state, $location, $http, $rootScope, $urlMatcherFactory, API, logger, user) {
      return $http.get(API.tryLogin).success(function(data) {
        user.load(data);
        logger.success("You're now logged in as " + user.username);
        return $state.go("index");
      });
    }
  ]);
});
