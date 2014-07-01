(function() {
  define(["angular", "factories/index", "controllers/index", "directives/index", "filters/index", "services/index"], function(ng) {
    return ng.module("app", ["ngRoute", "ui.router", "app.factories", "app.services", "app.controllers", "app.filters", "app.directives"]);
  });

}).call(this);
