define ["CommonProvider"], ->
	
	class Shell
		constructor: (@rootScope, @common, @config) ->
			@id = "Shell"
			@busyMessage = "Please wait..."
			@isBusy = true

			@spinnerOptions = {
					radius: 40,
					lines: 7,
					length: 0,
					width: 30,
					speed: 1.7,
					corners: 1.0,
					trail: 100,
					color: '#F58A00'
			}
			
			@activate()

			@rootScope.$on "$routeChangeStart", (event, next, curr) ->
				@toggleSpinner true
			
			@rootScope.$on @config.Events.ControllerActivatedSuccess, (data) ->
				@toggleSpinner false

			@rootScope.$on @config.Events.SpinnerToggle, (_, data) ->
				@toggleSpinner data.show
				
		toggleSpinner: (toggle) ->
			@isBusy = toggle

		activate: ->
			@common.logger.success "Craftia loaded!", null, true
			@common.activateController [], @id

	return Shell
