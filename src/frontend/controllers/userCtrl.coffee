define ["./cmodule"], (cmodule) ->

	class UserCtrl
		populate: ({
			@username
			@password
			@email
			@address
			@type
			@createdJobs
			@inbox
			@notifications
		}) ->
			console.log @
			
	return cmodule(UserCtrl)