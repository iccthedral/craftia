define(["./module"], function(module) {
  return module.directive("ccNavigation", [
    "$state", "$rootScope", function($state, $rootScope) {
      var directive, _menu_;
      _menu_ = {};
      $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        var elem, k, markElem, menu, v;
        menu = _menu_;
        if (menu == null) {
          return;
        }
        for (k in menu) {
          v = menu[k];
          markElem = v.next();
          markElem.removeClass("top-hmenu-item-current");
        }
        elem = menu[toState.url];
        if (elem == null) {
          return;
        }
        markElem = elem.next();
        return markElem.addClass("top-hmenu-item-current");
      });
      return directive = {
        restrict: "A",
        link: function(scope, element, attrs) {
          var menu;
          menu = $(element);
          _menu_ = {};
          return menu.find("a").each(function(k, v) {
            var sref;
            sref = $(v).attr("ui-sref");
            if (sref == null) {
              return;
            }
            if (sref[0] === ".") {
              sref = "/" + (sref.substring(1));
            }
            return _menu_[sref] = $(v);
          });
        }
      };
    }
  ]);
});
