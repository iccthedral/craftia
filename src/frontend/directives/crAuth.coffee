define ["directives/module"], (module) ->
	module.directive "crAuth", ["appUser", "$rootScope"
		(appUser, $rootScope) ->
			return {
				link: ($scope, element, attrs) ->
					expr = appUser.isLoggedIn
					if expr
						$(element).show()
					$rootScope.$watch "appUser.isLoggedIn", (newVal, oldVal) ->
						if newVal is oldVal
							return
						if newVal
							$(element).show()
						else
							$(element).hide()
				restrict: "A"
			}
	]