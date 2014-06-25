define ["./module"], (module) ->
	console.log "hi there"
	return module.service "testService", [->
		return "ddd"
	]
