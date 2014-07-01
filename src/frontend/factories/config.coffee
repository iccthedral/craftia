define ["factories/module"], (module) ->

	module.provider "config", ->
		@config = 
			events:
				ToggleSpinner: "ToggleSpinner"
			
			toastr: 
				positionClass: "toast-bottom-right"
				"fadeIn": 300,
				"fadeOut": 1000,
				"timeOut": 3000,
				"extendedTimeOut": 0
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
