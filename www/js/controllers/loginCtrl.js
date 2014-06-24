define(["./cmodule", "./userCtrl"], function(cmodule, User) {
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
        User.populate(userData);
        return location("#/blabla");
      };
    })(this));
  };
  return cmodule(LoginCtrl, "$location");
});
