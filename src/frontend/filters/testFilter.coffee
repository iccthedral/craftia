define ["filters/module"], (module) ->
	module.filter "testFilter", [($scope) ->
		console.log "Evo nas"
	]
