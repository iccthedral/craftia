(function() {
  define(["services/module"], function(module) {
    return module.service("testService", [
      function($scope) {
        return console.log("Evo nas");
      }
    ]);
  });

}).call(this);
