define(["./module"], function(module) {
  return module.directive("crDate", function() {
    var directive;
    return directive = {
      restrict: "A",
      link: function(scope, element, attrs) {
        var crDate;
        crDate = attrs["crDate"];
        return attrs.$observe("crDate", function() {
          return element.text(moment(crDate).format("MMMM Do YYYY"));
        });
      }
    };
  });
});
