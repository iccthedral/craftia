define(["directives/module"], function(module) {
  return module.directive("ccWidgetMinimize", function() {
    var directive;
    return directive = {
      restrict: "A",
      template: "<i class='fa fa-chevron-up'></i>",
      link: function(scope, element, attrs) {
        attrs.$set("href", "#");
        attrs.$set("wminimize");
        element = $(element);
        return element.click(function(e) {
          var $wcontent, iElem;
          e.preventDefault();
          $wcontent = element.parent().parent().next(".widget-content");
          iElem = element.children("i");
          if ($wcontent.is(":visible")) {
            iElem.removeClass("fa fa-chevron-up");
            iElem.addClass("fa fa-chevron-down");
          } else {
            iElem.removeClass("fa fa-chevron-down");
            iElem.addClass("fa fa-chevron-up");
          }
          return $wcontent.toggle(500);
        });
      }
    };
  });
});
