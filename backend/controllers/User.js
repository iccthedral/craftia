(function() {
  module.exports = function(app) {
    app.post('/login', function(req, res, next) {
      if (req.body.rememberme != null) {
        req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
      } else {
        req.session.cookie.expires = false;
      }
      return passport.authenticate("local", function(err, user, info) {
        if (err) {
          return next(err);
        }
        if (!user) {
          req.session.messages = [info.message];
          return res.send(JSON.stringify(info));
        }
        return req.logIn(user, function(err) {
          if (err) {
            return next(err);
          }
          return res.send(JSON.stringify(info));
        });
      })(req, res, next);
    });
    return app.post('/register-craftsman', function(req, res, next) {
      var body, user;
      body = req.body;
      user = new UserModel({
        username: body.username,
        firstName: body.firstname,
        lastName: body.familyname,
        email: body.email,
        password: body.password,
        authLevel: 0
      });
      return user.save(function(err) {
        if (err != null) {
          return res.status(422).send("Registering failed");
        } else {
          return res.status(200).send("Successfuly registered");
        }
      });
    });
  };

}).call(this);
