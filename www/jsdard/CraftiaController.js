(function() {
  define(["../vendor/ng-file-upload/angular-file-upload", "../vendor/angular/angular-animate", "../vendor/angular/angular-route", "../vendor/angular/angular-sanitize", "../vendor/angular/bootstrap", "../vendor/angular/ui-bootstrap-tpls-0.10.0"], function(FileUpload, Animate, Route, Sanitize, Bootstrap, BootstrapTpl) {
    var CraftiaController;
    angular.module("app").controller(this.id, [], CraftiaController);
    CraftiaController = (function() {
      function CraftiaController() {
        this.id = "CraftiaController";
        this.categories = [];
        this.cities = [];
      }

      return CraftiaController;

    })();
    return CraftiaController;
  });

}).call(this);
