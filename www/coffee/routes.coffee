define ["app"], (app) ->
	
	app.config ["$routeProvider", (routeProvider) ->
		routeProvider.when "/", {
			templateUrl: "templates/layout/shell.html"
			controller: "shellCtrl"
		}
	]