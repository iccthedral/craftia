define ["factories/module"], (module) ->

	module.provider "config", ->
		@config = 
			events:
				ToggleSpinner: "ToggleSpinner"
			
			toastr: 
				timeOut: 2000
				positionClass: "toast-bottom-right"

			errorPrefix: "[CRAFTIA ERROR]"
			showErrors: true
		
		@$get = ->
			return @config

		return @

	# app = angular.module "app"
	# app.config ["$provide", ->
	# 	console.log "what'sup"
	# ]

	# ($provide) ->
	# 	$provide.decorator "$exceptionHandler", ["$delegate", "config", "logger"
	# 	($delegate, config, logger) ->
	# 		console.log "Hi there"
	# 	]
	# ]
