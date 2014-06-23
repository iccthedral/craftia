define ["services/module"], (module) ->
	module.service "testService", [($scope) ->
		console.log "Evo nas"
	]
