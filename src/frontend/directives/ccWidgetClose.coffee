define ["directives/module"], (module) ->
	module.directive "ccWidgetClose", ->
		directive =
			restrict: "A"
			template: "<i class='fa fa-remove'></i>"
			link: (scope, element, attrs) ->
				attrs.$set "href", "#"
				attrs.$set "wclose"
				element = $(element)
				element.click (e) ->
					e.preventDefault()
					element.parent().parent().parent().hide 100

