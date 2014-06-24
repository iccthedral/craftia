define(["./cmodule"], function(cmodule) {
  var UserCtrl;
  UserCtrl = (function() {
    function UserCtrl() {}

    UserCtrl.prototype.populate = function(_arg) {
      this.username = _arg.username, this.password = _arg.password, this.email = _arg.email, this.address = _arg.address, this.type = _arg.type, this.createdJobs = _arg.createdJobs, this.inbox = _arg.inbox, this.notifications = _arg.notifications;
      return console.log(this);
    };

    return UserCtrl;

  })();
  return cmodule(UserCtrl);
});
