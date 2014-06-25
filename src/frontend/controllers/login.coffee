define ["./cmodule", "json!cities"], (cmodule, cities) ->
	class LoginCtrl
		constructor: ->
			@loginDetails =
				email: ""
				password: ""
				rememberme: false
				
	LoginCtrl::login = ->
		@http.post @API.login, @loginDetails
		.error (err) =>
			@log.error err
			@state.transitionTo "anon"
		.success (data) =>
			@user.load data
			if data.type is "Customer"
				@state.transitionTo "customer" 
			else if data.type is "Craftsman"
				@state.transitionTo "craftsman"
			else
				@state.transitionTo "anon"

	return cmodule LoginCtrl, "user"