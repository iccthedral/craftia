define(["./cmodule", "models/user", "json!cities"], function(cmodule, UserModel, cities) {
  var RegisterCtrl;
  RegisterCtrl = (function() {
    function RegisterCtrl() {
      this.user = UserModel;
      this.acceptedTOS = false;
      this.images = ["img/quality.jpg", "img/master.jpg", "img/approved.jpg"];
    }

    RegisterCtrl.prototype.getCities = function(val) {
      return cities;
    };

    RegisterCtrl.prototype.register = function() {
      var curState;
      if (!this.acceptedTOS) {
        this.log.error("Please check whether you agree with the terms & conditions");
        return;
      }
      curState = this.state.current.name;
      return this.http.post(this.API.registerCraftsman, this.user).success((function(_this) {
        return function() {
          return _this.log.success("You are now registered");
        };
      })(this)).error((function(_this) {
        return function(err) {
          return _this.log.error(err);
        };
      })(this));
    };

    return RegisterCtrl;

  })();
  return cmodule(RegisterCtrl);
});
