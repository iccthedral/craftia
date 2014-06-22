define ["directives/module"], (module) ->
	module.directive "testDirective", [($scope) ->
		console.log "Evo nas"
	]
