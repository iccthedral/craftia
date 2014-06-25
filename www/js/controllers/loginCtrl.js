define(["./cmodule", "./user", "json!cities"], function(cmodule, User, cities) {
  var LoginCtrl;
  console.log(cities);
  LoginCtrl = (function() {
    function LoginCtrl() {
      this.user = {
        email: "",
        password: "",
        rememberme: false
      };
    }

    return LoginCtrl;

  })();
  LoginCtrl.prototype.login = function() {
    return this.http.post(this.API.login, this.user).error((function(_this) {
      return function(err) {
        return _this.log.error(err);
      };
    })(this)).success((function(_this) {
      return function(userData) {
        User.populate(userData);
        if (userData.type === "Customer") {
          return _this.state.transitionTo("customer");
        } else if (userData.type === "Craftsman") {
          return $state.transitionTo("craftsman");
        } else {
          return _this.log.error("No such user type");
        }
      };
    })(this));
  };
  return (cmodule(LoginCtrl, "$location", "$http", "common", "$state")).instance;
});
