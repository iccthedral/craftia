define(["./cmodule", "./user"], function(module, User) {
  var LoginCtrl;
  LoginCtrl = (function() {
    function LoginCtrl() {
      this.user = {
        email: "",
        password: ""
      };
      this.rememberme = false;
    }

    return LoginCtrl;

  })();
  LoginCtrl.prototype.login = function() {
    return $.post(this.API.login, this.user).fail((function(_this) {
      return function(err) {
        return _this.log.error(err);
      };
    })(this)).done((function(_this) {
      return function(userData) {
        return User.populate(userData);
      };
    })(this));
  };
  return module(LoginCtrl);
});
