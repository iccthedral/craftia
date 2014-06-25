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
			out.format = out.f = (s) ->
				i = arguments.length
				while i--
					s = s.replace new RegExp("\\{#{i}\\}", "gm"), arguments[i]
				return s
			
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
