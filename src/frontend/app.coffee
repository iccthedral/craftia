define [
	"angular"
	"factories/index"
	"controllers/index"
	"directives/index"
	"filters/index"
	"services/index"
], (ng) ->
	
	return ng.module "app", [
		"ngRoute"
		"ngAnimate"
		"ui.router"
		"ui.bootstrap"
		"angular-carousel"
		"app.customControllers"
		"app.factories"
		"app.services"
		"app.controllers"
		"app.filters"
		"app.directives"
	]
