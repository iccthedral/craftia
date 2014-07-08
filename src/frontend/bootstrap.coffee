"use strict"

define [
	"angular"
	"util"
	"routes"
	"app"
	"gmaps"
	"rateit"
	"select2"
	"ngSelect2"
	"ngRoutes"
	"ngUiRouter"
	"ngAnimate"
	"ngCarousel"
	"ngFileUpload"
	"ngBootstrap"
	"ngBootstrapTpls"
], (ng, _, routes, app) ->

	forEach 		= ng.forEach
	isString 		= ng.isString
	isArray 		= ng.isArray
	isFunction 	= ng.isFunction
	isObject 		= ng.isObject
	ngInjector 	= ng.injector ["ng"]

	$q 					= ngInjector.get "$q"
	$http 			= ngInjector.get "$http"
	$timeout 		= ngInjector.get "$timeout"

	loadingClass 	= "deferred-bootstrap-loading"
	errorClass 		= "deferred-bootstrap-error"
	bodyElement 	= null

	appInjector = ng.injector ["ng", "app.factories"]
	config = appInjector.get "config"

	addLoadingClass = ->
		$("#shell").fadeIn(400)
		bodyElement.addClass loadingClass

	removeLoadingClass = ->
		bodyElement.removeClass loadingClass

	addErrorClass = ->
		removeLoadingClass()
		bodyElement.addClass errorClass

	isPromise = (value) ->
		return (isObject value) and (isFunction value.then)

	checkConfig = (config) ->
		if not (isObject config)
			throw new Error "Bootstrap configuration must be an object."
		if not (isString config.module)
			throw new Error "'config.module' must be a string."
		if not (isObject config.resolve)
			throw new Error "'config.resolve' must be an object."
		if (ng.isDefined config.onError) and not (isFunction config.onError)
			throw new Error "'config.onError' must be a function."

	createInjector = (injectorModules) ->
		if (isArray injectorModules)
			if (injectorModules.length is 1) and (injectorModules[0] is "ng")
				return ngInjector
			else
				return (ng.injector injectorModules)
		else
			if injectorModules is "ng"
				return ngInjector
			else 
				return (ng.injector [injectorModules])

	createBootstrap = ({document, element, module}) ->
		deferred = $q.defer()
		ng.element document
		.ready ->
			ng.bootstrap element, [module]
			removeLoadingClass()
			deferred.resolve true
		return deferred.promise

	bootstrap = ({document, element, module, injectorModules, onError, resolve}) ->
		injectorModules or= ["ng"]
		promises = []
		constantNames = []
		bodyElement = ng.element document.body
		addLoadingClass()
		checkConfig arguments[0]

		callResolveFn = (resolveFn, constantName) ->
			constantNames.push constantName
			if not (isFunction resolveFn) and not (isArray resolveFn)
				throw new Error "Resolve for '#{constantName}' is not a valid dependency injection format."
			injector = createInjector injectorModules
			result = injector.instantiate resolveFn
			if isPromise result
				promises.push result
			else
				throw new Error "Resolve function for '#{constantName}' must return a promise"

		handleResults = (results) ->
			forEach results, (value, index) ->
				result = if value?.data? then value.data else value
				ng.module(module).constant constantNames[index], result
			return createBootstrap {document, element, module}

		handleError = (error) ->
			addErrorClass()
			return unless (isFunction onError)
			onError error

		forEach resolve, callResolveFn
		return $q.all(promises).then handleResults, handleError
	
	require ["domReady!"], (document) ->
		bootstrap {
			document: document
			element: document
			module: "app"
			injectorModules: [
				"ng"
				"ngRoute"
				"app.customControllers"
				"app.factories"
				"app.services"
				"app.controllers"
				"app.filters"
				"app.constants"
			]
			
			onError: ->
				alert "TERRIBLE ERROR!"
				
			resolve:
				USER_DETAILS: [
					"cAPI"
					(API) ->
						deferred = $q.defer()
						$http.get API.tryLogin
						.success (data) ->
							deferred.resolve data
						.error ->
							deferred.resolve {}
						return deferred.promise
				]
		}

		app.run (USER_DETAILS, $state, $rootScope, appUser, logger, common) ->
			$("#splash").fadeOut(500)
			appUser.load USER_DETAILS
			$state.go "anon" if not appUser.isLoggedIn

		app.config ($provide) ->
			$provide.decorator "$exceptionHandler", ($delegate, config, logger) ->
				prefix = config.errorPrefix
				(exception, cause) ->
					$delegate exception, cause
					msg = exception.message
					return if prefix? and msg?.startsWith prefix
					err = {exception, cause}
					msg = "#{prefix} - #{msg}"
					logger.error msg, err, true
