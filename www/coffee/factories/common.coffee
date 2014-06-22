define ["factories/module"], (module) ->
		
	module.factory "common", ["$q", "$rootScope", "$timeout", "config", "logger" 
	($q, $rootScope, $timeout, config, logger) ->
		out = {}
		logger.success "Hi there"
		
		out.activateController = (promises, controllerId) ->
			return $q.all(promises).then (args) ->
				data =
					controllerId: controllerId
				$broadcast config.Events.ControllerActivatedSuccess
				
		out.broadcast = ->
			return $rootScope.$broadcast.apply $rootScope, arguments
		return out
	]
	
	return module
