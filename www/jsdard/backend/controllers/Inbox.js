(function() {
  var Messaging;

  Messaging = require("../modules/Messaging");

  module.exports = function(app) {
    app.post("/sendmessage", module.exports.sendMessage);
  };

  module.exports.sendMessage = function(req, res, next) {
    var msg;
    msg = req.body;
    return Messaging.sendMessage(msg, function() {
      return res.send("Message sent!");
    });
  };

}).call(this);
