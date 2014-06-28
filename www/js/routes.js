define(["app", "angular"], function(app, angular) {
  return app.config(function($stateProvider, $urlRouterProvider) {
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
    }).state("anon.craftsmanMenu", {
      url: "/craftsmanMenu",
      views: {
        "navSubMenu@anon": {
          templateUrl: "shared/templates/layout/craftsmanMenu.html"
        }
      }
    }).state("anon.craftsmanMenu.findJobs", {
      url: "/findJobs:page",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/findJobs.html",
          controller: "FindJobsCtrl"
        }
      }
    }).state("anon.craftsmanMenu.requirements", {
      url: "/requirements",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/requirements.html"
        }
      }
    }).state("anon.craftsmanMenu.howto", {
      url: "/howto",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/howto.html"
        }
      }
    }).state("anon.craftsmanMenu.prices", {
      url: "/prices",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/prices.html"
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
        },
        "shell@customer": {
          template: "    \n<div class=\"row\">\n				      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n				          <input class=\"input-medium search-query\"\n				                 data-ng-model=\"contact\"\n				                 data-ng-keyup=\"search($event)\"\n				                 placeholder=\"live search...\">\n				          <div class=\"widget wcyan\">\n				              <div class=\"widget-head\">\n\n				                  <button type=\"button\" class=\"btn btn-secondary btn-lg\" ng-click=\"showInbox()\">\n				                      <i class=\"fa fa-arrow-circle-down\"></i> Inbox\n				                  </button>\n				                  <button type=\"button\" class=\"btn btn-secondary btn-lg\" ng-click=\"showOutbox()\">\n				                      <i class=\"fa fa-arrow-circle-up\"></i> Outbox\n				                  </button>\n\n				              </div>\n				              <div class=\"underConstruction\" style=\"width:100%;\">\n				              </div>\n				  				</div>\n	  				   </div>\n	  				</div>"
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
    });
    return $stateProvider.state("craftsman", {
      url: "/craftsman",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html",
          controller: "ShellCtrl"
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
    });
  }).run([
    "$state", "$location", "$http", "$rootScope", "$urlMatcherFactory", "cAPI", "logger", "user", function($state, $location, $http, $rootScope, $urlMatcherFactory, API, logger, user) {
      var path;
      path = $location.$$path;
      console.log(path);
      $rootScope.$on("$stateChangeStart", function(ev, toState) {
        var nextState, type;
        $(".shellic").fadeOut(500);
        type = user.getType;
        return nextState = toState.name;
      });
      $rootScope.$on("$stateChangeSuccess", function(ev, toState) {
        return $(".shellic").fadeIn(500);
      });
      return $http.get(API.tryLogin).success(function(data) {
        user.load(data);
        return logger.success("You're now logged in as " + user.username);
      }).then(function(err) {
        return console.log("PATH", path);
      });
    }
  ]);
});
