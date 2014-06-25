define(["./module"], function(module) {
  return module.directive("ccNavigation", [
    "$state", "$rootScope", function($state, $rootScope) {
      var directive;
      $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        var elem, k, markElem, menu, v;
        menu = $rootScope.menu;
        if (menu == null) {
          return;
        }
        for (k in menu) {
          v = menu[k];
          markElem = v.parent().find(".top-hmenu-item");
          markElem.removeClass("top-hmenu-item-current");
        }
        elem = menu[toState.url];
        if (elem == null) {
          return;
        }
        markElem = elem.parent().find(".top-hmenu-item");
        return markElem.addClass("top-hmenu-item-current");
      });
      return directive = {
        restrict: "A",
        link: function(scope, element, attrs) {
          var menu;
          menu = $(element);
          $rootScope.menu = {};
          return menu.find("a").each(function(k, v) {
            var sref;
            sref = $(v).attr("ui-sref");
            if (sref[0] === ".") {
              sref = "/" + (sref.substring(1));
            }
            return $rootScope.menu[sref] = $(v);
          });
        }
      };
    }
  ]);
});
