define(["./cmodule", "json!cities"], function(cmodule, cities) {
  var LoginCtrl;
  LoginCtrl = (function() {
    function LoginCtrl() {
      this.loginDetails = {
        email: "",
        password: "",
        rememberme: false
      };
    }

    return LoginCtrl;

  })();
  LoginCtrl.prototype.login = function() {
    return this.http.post(this.API.login, this.loginDetails).error((function(_this) {
      return function(err) {
        _this.log.error(err);
        return _this.state.transitionTo("anon");
      };
    })(this)).success((function(_this) {
      return function(data) {
        _this.user.load(data);
        if (data.type === "Customer") {
          return _this.state.transitionTo("customer");
        } else if (data.type === "Craftsman") {
          return _this.state.transitionTo("craftsman");
        } else {
          return _this.state.transitionTo("anon");
        }
      };
    })(this));
  };
  return cmodule(LoginCtrl, "user");
});
