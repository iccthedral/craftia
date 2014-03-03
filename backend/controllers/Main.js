(function() {
  module.exports = function(app) {
    app.get("/", function(req, res) {
      return res.render("main", {
        user: req.user
      });
    });
    return app.get("/isAuthenticated", function(req, res) {
      console.dir(req.user);
      if (req.user != null) {
        return res.status(200).send(req.user);
      } else {
        return res.send(403);
      }
    });
  };

}).call(this);
