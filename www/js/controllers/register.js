define(["./cmodule", "json!cities"], function(cmodule, cities) {
  var RegisterCtrl;
  RegisterCtrl = (function() {
    function RegisterCtrl() {
      this.userDetails = {};
      this.acceptedTOS = false;
      this.images = ["img/quality.jpg", "img/master.jpg", "img/approved.jpg"];
    }

    RegisterCtrl.prototype.getCities = function(val) {
      return cities;
    };

    RegisterCtrl.prototype.register = function() {
      var curState, url;
      if (!this.acceptedTOS) {
        this.log.error("Please check whether you agree with the terms & conditions");
        return;
      }
      curState = this.state.current.name;
      url = this.API.registerCraftsman;
      if (curState === "anon.register.customer") {
        url = this.API.registerCustomer;
      }
      return this.http.post(url, this.userDetails).success((function(_this) {
        return function() {
          _this.log.success("You are now registered");
          return _this.state.transitionTo("anon.login");
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
