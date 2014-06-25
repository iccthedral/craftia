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

    UserCtrl.prototype.populate = function(_arg) {
      this.username = _arg.username, this.password = _arg.password, this.email = _arg.email, this.address = _arg.address, this.type = _arg.type, this.createdJobs = _arg.createdJobs, this.inbox = _arg.inbox, this.notifications = _arg.notifications;
      return console.log(this);
    };

    return UserCtrl;

  })();
  instance = cmodule(UserCtrl).instance;
  serviceModule.service("user", [
    "$rootScope", function($rootScope) {
      return $rootScope.user = instance;
    }
  ]);
  return instance;
});
