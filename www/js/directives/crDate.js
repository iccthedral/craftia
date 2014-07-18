define(["./module", "moment"], function(module, moment) {
  return module.directive("crDate", function() {
    var directive;
    return directive = {
      restrict: "A",
      link: function(scope, element, attrs) {
        var crDate;
        crDate = attrs["crDate"];
        return attrs.$observe("crDate", function() {
          if (typeof crDate !== "string") {
            crDate = JSON.stringify(crDate);
          }
          return element.text(moment(crDate).format("DD/MM/YY"));
        });
      }
    };
  });
});
