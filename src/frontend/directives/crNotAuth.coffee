define ["directives/module"], (module) ->
	module.directive "crNotAuth", ["appUser", "$rootScope"
		(appUser, $rootScope) ->
			return {
				link: ($scope, element, attrs) ->
					element = $(element)
					expr = appUser.isLoggedIn
					if expr
						element.hide()
					
					$rootScope.$watch "appUser.isLoggedIn", (newVal, oldVal) ->
						if newVal is oldVal
							return
						if newVal
							element.hide()
						else
							element.show()
				restrict: "A"
			}
	]