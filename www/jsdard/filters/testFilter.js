(function() {
  define(["filters/module"], function(module) {
    return module.filter("testFilter", [
      function($scope) {
        return console.log("Evo nas");
      }
    ]);
  });

}).call(this);
