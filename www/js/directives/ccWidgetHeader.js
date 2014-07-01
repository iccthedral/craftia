define(["directives/module"], function(module) {
  return module.directive("ccWidgetHeader", function() {
    var directive;
    return directive = {
      restrict: "A",
      templateUrl: "/shared/templates/layout/widgetHeader.html",
      scope: {
        "title": "@",
        "subtitle": "@",
        "rightText": "@",
        "allowCollapse": "@"
      },
      link: function(scope, element, attrs) {
        return attrs.$set("class", "widget-head");
      }
    };
  });
});
