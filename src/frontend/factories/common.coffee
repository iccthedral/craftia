define ["factories/module"], (module) ->
		
	module.factory "common", [
		"$q"
		"$rootScope"
		"$timeout"
		"config"
		"logger"
		($q, $rootScope, $timeout, config, logger, spinner) ->
			out = {}
			out.logger = logger
			out.activateController = (promises, controllerId) ->
				out.broadcast config.events.ToggleSpinner, show:true
				return $q.all promises
				.then (args) ->
					data =
						controllerId: controllerId
					out.broadcast config.events.ToggleSpinner, show:false
					
			out.broadcast = ->
				return $rootScope.$broadcast.apply $rootScope, arguments

			return out
	]
	
	return module
