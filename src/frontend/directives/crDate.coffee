define ["./module", "moment"], (module, moment) ->
  module.directive "crDate", ->
    directive =
      restrict: "A"
      link: (scope, element, attrs) ->
        crDate = attrs["crDate"]
        attrs.$observe "crDate", ->
          console.log crDate
          # if typeof crDate isnt "string"
          # crDate = JSON.stringify(crDate)
          element.text(moment(crDate).format("DD/MM/YY"))