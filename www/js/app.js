define(["angular", "capi", "factories/index", "controllers/index", "directives/index", "filters/index", "services/index"], function(ng, API) {
  ng.module("app.constants", []).factory("cAPI", function() {
    return API;
  });
  ng.module("app", ["ngRoute", "ngAnimate", "angular-carousel", "angularFileUpload", "ui.router", "ui.bootstrap", "ui.bootstrap.modal", "ui.select2", "app.customControllers", "app.factories", "app.services", "app.controllers", "app.filters", "app.directives", "app.constants"]);
  return ng.module("app").constant("cAPI", API);
});
