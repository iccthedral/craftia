define ["directives/module"], (module) ->
	module.directive "crNotAuth", ["user", "$rootScope"
		(user, $rootScope) ->
			return {
				link: ($scope, element, attrs) ->
					user = $rootScope.user
					element = $(element)
					expr = user.isLoggedIn
					if expr
						element.hide()
					
					$rootScope.$watch "user.isLoggedIn", (newVal, oldVal) ->
						if newVal is oldVal
							return
						if newVal
							element.hide()
						else
							element.show()
				restrict: "A"
			}
	]