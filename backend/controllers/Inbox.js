(function() {
  var Messaging, sendMessage;

  Messaging = require("../modules/Messaging");

  module.exports.setup = function(app) {
    app.post("/sendmessage", sendMessage);
  };

  sendMessage = function(req, res, next) {
    var msg;
    msg = req.body;
    return Messaging.sendMessage(msg, function() {
      return res.send("Message sent!");
    });
  };

}).call(this);
