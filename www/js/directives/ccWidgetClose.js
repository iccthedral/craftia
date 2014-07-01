define(["directives/module"], function(module) {
  return module.directive("ccWidgetClose", function() {
    var directive;
    return directive = {
      restrict: "A",
      template: "<i class='fa fa-remove'></i>",
      link: function(scope, element, attrs) {
        attrs.$set("href", "#");
        attrs.$set("wclose");
        element = $(element);
        return element.click(function(e) {
          e.preventDefault();
          return element.parent().parent().parent().hide(100);
        });
      }
    };
  });
});
