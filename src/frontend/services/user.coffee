define ["./module"], (module) ->
	module.service "appUser", [
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

			out.logout = ->
				$http.get API.logout
				.success (data) =>
					out =
						type: "anon"
				.error (err) ->
					logger.error err
				.finally ->
					$state.go "anon"

			$rootScope.appUser = out
			return out
	]