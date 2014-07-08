define(["app", "angular"], function(app, ng) {
  return app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index", {
      url: "",
      controller: [
        "$state", "appUser", function($state, appUser) {
          return $state.go(appUser.getType);
        }
      ]
    });
    $stateProvider.state("activated", {
      url: "/activated",
      views: {
        "": {
          template: "<div class=\"page-splash dissolve-animation\">\n	<div class=\"jumbotron\" style=\"height:100%\">\n		<div class=\"fluid-container\">\n		  <h1>Welcome to Craftia, {{appUser.name}}!</h1>\n		  <br>\n			<div class=\"fluid-container\">\n				<hr>\n		  	<h3>\n		  		Your account <span class=\"page-header\" style=\"font-weight: bold;\"> {{appUser.email}} </span> is now activated\n		  	</h3>\n		  	<br><br><hr>\n		  	<div class=\"fluid-row pull-right\" style=\"right: 100px; bottom: 100px; position: fixed;\">\n		  		<p>\n		  			<a class=\"btn btn-black btn-lg\" ui-sref=\"anon.howto\" role=\"button\">Learn more</a>\n		  			or\n		  			<a class=\"btn btn-lg\" ui-sref=\"{{appUser.getType}}.profile\" role=\"button\">Continue</a>\n		  	</div>\n			</div>\n		</div>\n	</div>\n</div>"
        }
      }
    });
    $stateProvider.state("anon", {
      url: "/anon",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html"
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
    }).state("anon.reset", {
      url: "/reset/:token",
      views: {
        "shell@anon": {
          templateUrl: "/shared/templates/forms/resetPassword.html",
          controller: "ResetPasswordCtrl"
        }
      }
    }).state("anon.createJob", {
      url: "/createJob",
      views: {
        "shell@anon": {
          template: "<div ng-if=\"firstStep\" ng-include=\"'shared/templates/forms/createJob1.html'\"></div>\n<div ng-if=\"secondStep\" ng-include=\"'shared/templates/forms/createJob2.html'\"></div>",
          controller: "CreateJobCtrl"
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
    }).state("anon.forgot", {
      url: "/forgot",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/forms/forgotPassword.html",
          controller: "ForgotPassCtrl"
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
    }).state("anon.craftsmanMenu", {
      url: "/craftsmanMenu",
      views: {
        "navSubMenu@anon": {
          templateUrl: "shared/templates/layout/craftsmanMenu.html"
        }
      }
    }).state("anon.findJobs", {
      url: "/findJobs",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/findJobs.html",
          controller: "FindJobsCtrl"
        }
      }
    }).state("anon.requirements", {
      url: "/requirements",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/requirements.html"
        }
      }
    }).state("anon.howto", {
      url: "/howto",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/howto.html"
        }
      }
    }).state("anon.prices", {
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
          templateUrl: "shared/templates/layout/shell.html"
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
    }).state("customer.findJobs", {
      url: "/findJobs",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/findJobs.html"
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
    $stateProvider.state("craftsman", {
      url: "/craftsman",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html"
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
    }).state("craftsman.myJobs", {
      url: "/myJobs",
      views: {
        "shell@craftsman": {
          templateUrl: "shared/templates/layout/craftsmanMyJobs.html",
          controller: "CraftsmanMyJobsCtrl"
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
    }).state("craftsman.profile", {
      url: "/profile",
      views: {
        "shell@craftsman": {
          templateUrl: "shared/templates/forms/craftsmanProfile.html",
          controller: "CraftsmanProfileCtrl"
        }
      }
    });
    return $urlRouterProvider.otherwise("");
  }).run([
    "$state", "$location", "$http", "$rootScope", "$urlMatcherFactory", "cAPI", "logger", "appUser", function($state, $location, $http, $rootScope, $urlMatcherFactory, API, logger, appUser) {
      var lastState;
      lastState = null;
      $rootScope.$on("$stateChangeStart", function(ev, toState, toParams, fromState, fromParams) {
        var isLoggedIn, nextState, type, typeRe;
        isLoggedIn = appUser.isLoggedIn;
        type = appUser.getType;
        typeRe = new RegExp("^" + type + ".*", "g");
        nextState = toState.name;
        fromState = fromState.name;
        $(".shellic").fadeOut(500);
        $(".shellic").fadeIn(500);
        if (nextState === "activated") {

        } else if (!typeRe.test(nextState)) {
          logger.log("Access denied to state " + nextState);
          ev.preventDefault();
          if (lastState !== nextState) {
            lastState || (lastState = appUser.getType);
            logger.log("Trying state " + lastState);
            return $state.go(lastState);
          }
        }
      });
      return $rootScope.$on("$stateChangeSuccess", function(ev, toState, toParams, fromState, fromParams) {
        return lastState = toState.name;
      });
    }
  ]);
});
