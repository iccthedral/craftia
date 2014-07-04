define ["./module", "ngSpinner"], (module, Spinner) ->
	module.directive "ccSpinner", ["$window", ($window) ->
		directive =
			restrict: "A"
			link: (scope, element, attrs) ->
				scope.spinner = null
				scope.$watch attrs.ccSpinner
				, (opts) ->
					if scope.spinner?
						scope.spinner.stop()
					scope.spinner = new Spinner opts
					scope.spinner.spin element[0]
				, true
	]
