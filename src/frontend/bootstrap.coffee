define [
	"require"
	"angular"
	"app"
	"capi"
	"toastr"
	"ngRoutes"
	"ngSanitize"
	"ngUiRouter"
	"routes"
], (require, ng, app) ->
	
	app.config ["$provide"
	($provide) ->
		$provide.decorator "$exceptionHandler", ["$delegate", "config", "logger"
		($delegate, config, logger) ->
			prefix = config.errorPrefix
			return (exception, cause) ->
				$delegate exception, cause
				return if prefix? and exception.message.indexOf(prefix) is 0
				err = {exception, cause}
				msg = "#{prefix} - #{exception.message}"
				logger.error msg, err, true
		]
	]
	
	require ["domReady!"], (document) ->
		ng.bootstrap document, ["app"]