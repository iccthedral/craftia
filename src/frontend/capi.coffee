define ["app"], (app) ->
	
	return app.constant "cAPI", {
		# POST
		login: "/login"
		logout: "/logout"
		tryLogin: "/isAuthenticated"
		registerCraftsman: "/user/registerCraftsman"
		registerCustomer: "/user/registerCustomer"
		createJob: "/job/new"
	}