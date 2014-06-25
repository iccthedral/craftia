define(["./cmodule", "services/module"], function(cmodule, serviceModule) {
  var UserCtrl, instance;
  UserCtrl = (function() {
    function UserCtrl() {
      Object.defineProperty(this, "isLoggedIn", {
        get: function() {
          return this.username != null;
        }
      });
      return this;
    }

    return UserCtrl;

  })();
  instance = cmodule(UserCtrl);
  serviceModule.service("user", [
    "$rootScope", function($rootScope) {
      return $rootScope.user = instance;
    }
  ]);
  return instance;
});
