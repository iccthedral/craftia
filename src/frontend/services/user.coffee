define ["./module"], (module) ->
	module.service "user", [
		"$rootScope"
		"$http"
		"$state"
		"logger"
		"cAPI"
		($rootScope, $http, $state, logger, API) ->
			out =
				username: null
				notifications: ""
					
			Object.defineProperty out, "isLoggedIn", {
				get: ->
					return out.username?
			}
			
			out.load = (data) ->
				out[k] = v for k, v of data
				
			out.logout = ->
				$http.get API.logout
				.success (data) ->
					out = {}
					$state.transitionTo "anon"
				.error (err) ->
					logger.error err

			$rootScope.user = out
			return out
	]