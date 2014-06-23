define [], ->

	angular.module("Common").factory("Spinner", ["Common", "Config"], Spinner)

	class Spinner
		constructor: (@common, @config) ->
			return @
			
		hide: ->
			@toggle false
		
		show: ->
			@toggle true

		toggle: (show) ->
			@common.broadcast @config.Events.SpinnerToggle, show: show
			
	return Spinner