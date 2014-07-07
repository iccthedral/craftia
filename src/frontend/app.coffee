define [
	"angular"
	"capi"
	"factories/index"
	"controllers/index"
	"directives/index"
	"filters/index"
	"services/index"
], (ng, API) ->
	
	ng.module("app.constants", [])
	.factory "cAPI", -> API
	
	ng.module "app", [
		"ngRoute"
		"ngAnimate"
		"angular-carousel"
		"angularFileUpload"
		"ui.router"
		"ui.bootstrap"
		"ui.bootstrap.modal"
		"ui.select2"
		"app.customControllers"
		"app.factories"
		"app.services"
		"app.controllers"
		"app.filters"
		"app.directives"
		"app.constants"
	]
	
	ng.module("app").constant "cAPI", API