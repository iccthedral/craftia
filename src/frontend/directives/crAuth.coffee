define ["directives/module"], (module) ->
	module.directive "crAuth", ["user", "$rootScope"
		(user, $rootScope) ->
			return {
				link: ($scope, element, attrs) ->
					user = $rootScope.user
					expr = user.isLoggedIn
					if expr
						$(element).show()
					$rootScope.$watch "user.isLoggedIn", (newVal, oldVal) ->
						if newVal is oldVal
							return
						if newVal
							$(element).show()
						else
							$(element).hide()
				restrict: "A"
			}
	]