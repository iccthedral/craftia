define([], function() {
  var User;
  User = (function() {
    function User(_arg) {
      this.username = _arg.username, this.password = _arg.password, this.email = _arg.email, this.address = _arg.address;
      console.log(this);
    }

    return User;

  })();
  return User;
});
