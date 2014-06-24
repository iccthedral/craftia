define ["app"], (app) ->

	app.config ["$routeProvider", (routeProvider) ->
		routeProvider.when "/blabla", {
			templateUrl: "templates/layout/dljadlja.html"
			controller: "shellCtrl"
		}
		routeProvider.when "/login", {
			templateUrl: "templates/layout/loginForm.html"
			controller: "LoginCtrl"
		}
	]