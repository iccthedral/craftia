(function() {
  "use strict";
  require.config({
    urlArgs: Math.random(),
    baseUrl: "js",
    paths: {
      "domReady": "../vendor/requirejs-domready/domReady",
      "angular": "../vendor/angular/angular",
      "ngRoutes": "../vendor/angular/angular-route",
      "ngSanitize": "../vendor/angular/angular-sanitize",
      "ngSpinner": "../vendor/angular/spin",
      "toastr": "../vendor/angular/toastr",
      "jquery": "../vendor/angular/jquery-2.0.3.min",
      "ngUiRouter": "../vendor/angular-ui-router/release/angular-ui-router"
    },
    shim: {
      angular: {
        exports: "angular"
      },
      toastr: {
        deps: ["jquery"]
      },
      ngUiRouter: {
        deps: ["angular"]
      },
      ngRoutes: {
        deps: ["angular"]
      },
      ngSanitize: {
        deps: ["angular"]
      },
      ngSpinner: {
        deps: ["angular"],
        exports: "Spinner"
      }
    },
    deps: ["bootstrap"]
  });

}).call(this);
