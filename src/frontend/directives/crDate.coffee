define ["./module"], (module) ->
  module.directive "crDate", ->
    directive =
      restrict: "A"
      link: (scope, element, attrs) ->
        crDate = attrs["crDate"]
        attrs.$observe "crDate", ->
          element.text(moment(crDate).format("MMMM Do YYYY"))
