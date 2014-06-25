define(["app", "angular"], function(app, angular) {
  return app.config(function($stateProvider, $urlRouterProvider) {
    var resolveUser;
    resolveUser = [
      "$http", "$state", "$rootScope", "cAPI", "logger", "user", function($http, $state, $rootScope, API, logger, user) {
        return $http.get(API.tryLogin).success(function(data) {
          user.load(data);
          user.loaded = true;
          if (data.type === "Customer") {
            return $state.transitionTo("customer");
          } else if (data.type === "Craftsman") {
            return $state.transitionTo("craftsman");
          } else {
            return $state.transitionTo("anon");
          }
        }).error(function(err) {
          logger.error(err);
          user.loaded = true;
          return $state.transitionTo("anon");
        });
      }
    ];
    $stateProvider.state("index", {
      url: "",
      controller: resolveUser
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
        "navbar@anon": {
          templateUrl: "shared/templates/layout/anonUserBar.html"
        },
        "shell@anon": {
          templateUrl: "shared/templates/layout/anonMainShell.html",
          controller: "AnonCtrl"
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

    /* When CUSTOMER is logged in */
    $stateProvider.state("customer", {
      url: "/cu",
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
          template: "Pozz kolega1!"
        }
      }
    }).state("customer.messages", {
      url: "/messages",
      views: {
        "shell@customer": {
          template: "Pozz kolega2!"
        }
      }
    }).state("customer.jobs", {
      url: "/jobs",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/layout/customerJobList.html",
          controller: "CustomerCtrl"
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
    });
    return $stateProvider.state("craftsman", {
      url: "/cr",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html",
          controller: "ShellCtrl"
        }
      }
    });
  });
});
