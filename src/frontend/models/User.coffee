define [], ->

	class User
		constructor: ({
			@username, @password, @email, @address
		}) ->
			console.log @

	return User