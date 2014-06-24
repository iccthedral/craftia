define ["./cmodule", "./userCtrl"], (cmodule, User) ->

	class LoginCtrl
		constructor: ->
			@user =
				email: ""
				password: ""
			@rememberme = false

	LoginCtrl::login = ->
		$.post @API.login, @user
		.fail (err) =>
			@log.error err
		.done (userData) =>
			User.populate userData
			location "#/blabla"
			
	return cmodule LoginCtrl, "$location"