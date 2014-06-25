define(["./module"], function(module) {
  console.log("hi there");
  return module.service("testService", [
    function() {
      return "ddd";
    }
  ]);
});
