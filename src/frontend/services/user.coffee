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
				type: "anon"
					
			Object.defineProperty out, "isLoggedIn", {
				get: -> out.username?
			}
			Object.defineProperty out, "getType", {
				get: -> out.type?.toLowerCase()
			}

			out.load = (data) ->
				out[k] = v for k, v of data
				console.debug data
			
			out.logout = ->
				$http.get API.logout
				.success (data) =>
					out =
						type: "anon"
					$state.transitionTo "index"
				.error (err) ->
					logger.error err

			$rootScope.user = window.user = out
			return out
	]