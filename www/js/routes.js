define(["app", "angular"], function(app, angular) {
  return app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index", {
      url: "",
      controller: function($state, user) {
        return $state.transitionTo(user.getType || "anon");
      }
    });
    return $stateProvider.state("anon", {
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
      url: "/anon/craftsmanMenu",
      views: {
        "navSubMenu@anon": {
          templateUrl: "shared/templates/layout/craftsmanMenu.html"
        }
      }
    }).state("anon.findJobs", {
      url: "/anon/findJobs:page",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/findJobs.html",
          controller: "FindJobsCtrl"
        }
      }
    });

    /* When CUSTOMER is logged in */
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
