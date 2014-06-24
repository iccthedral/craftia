define(["./cmodule"], function(cmodule) {
  var User;
  User = (function() {
    function User() {}

    User.prototype.load = function(_arg) {
      this.username = _arg.username, this.password = _arg.password, this.email = _arg.email, this.address = _arg.address, this.type = _arg.type, this.createdJobs = _arg.createdJobs, this.inbox = _arg.inbox, this.notifications = _arg.notifications;
      return console.log(this);
    };

    return User;

  })();
  return cmodule(User);
});
