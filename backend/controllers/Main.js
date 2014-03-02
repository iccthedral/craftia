(function() {
  module.exports = function(app) {
    return app.get("/", function(req, res) {
      return res.render("main");
    });
  };

}).call(this);
