define ["factories/module"], (module) ->
	module.factory "common", [
		"$http"
		"$q"
		"$rootScope"
		"$timeout"
		"config"
		"logger"
		($http, $q, $rootScope, $timeout, config, logger) ->
			out = {}
			out.logger = logger
			out.format = out.f = (s, args...) ->
				i = args.length
				while i--
					s = s.replace new RegExp("\\{#{i}\\}", "gm"), args[i]
				return s

			out.get = (url) ->
				out.broadcast config.events.ToggleSpinner, show:true
				defer = $http.get url
				defer.finally ->
					out.broadcast config.events.ToggleSpinner, show:false
				return defer
				
			out.activateController = (promises, controllerId) ->
				out.broadcast config.events.ToggleSpinner, show:true
				logger.log "Activating #{controllerId} controller"
				return $q.all promises
				.then (args) ->
					data =
						controllerId: controllerId
					logger.success "Controller #{controllerId} activated"
					out.broadcast config.events.ToggleSpinner, show:false
					
			out.broadcast = ->
				console.log arguments
				return $rootScope.$broadcast.apply $rootScope, arguments

			return out
	]