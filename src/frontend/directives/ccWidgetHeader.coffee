define ["directives/module"], (module) ->
	module.directive "ccWidgetHeader", ->
		directive =
			restrict: "A"
			templateUrl: "shared/templates/layout/widgetHeader.html"
			scope:
				"title": "@"
				"subtitle": "@"
				"rightText": "@"
				"allowCollapse": "@"

			link: (scope, element, attrs) ->
				attrs.$set "class", "widget-head"
