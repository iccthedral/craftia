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
			url = @API.registerCraftsman
			if curState is "anon.register.customer"
				url = @API.registerCustomer
			
			@http.post url, @userDetails
			.success =>
				@log.success "You are now registered"
				@state.transitionTo "anon.login"
			.error (err) =>
				@log.error err

	return cmodule RegisterCtrl