(function() {
  define(["directives/module"], function(module) {
    return module.directive("testDirective", [
      function($scope) {
        return console.log("Evo nas");
      }
    ]);
  });

}).call(this);
