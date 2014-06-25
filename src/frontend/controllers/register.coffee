define ["./cmodule", "json!cities"], (cmodule, cities) ->
	
	class RegisterCtrl
		constructor: ->
			@userDetails = {}
			@acceptedTOS = false
			@images = [
				"img/quality.jpg"
				"img/master.jpg"
				"img/approved.jpg"
			]

		getCities: (val) ->
			return cities
		
		register: ->
			if not @acceptedTOS
				@log.error "Please check whether you agree with the terms & conditions"
				return

			curState = @state.current.name
			@http.post @API.registerCraftsman, @userDetails
			.success =>
				@log.success "You are now registered"
			.error (err) =>
				@log.error err

	return cmodule RegisterCtrl