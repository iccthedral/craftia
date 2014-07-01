"use strict"

require.config
	urlArgs: Math.random()
	baseUrl: "js"
	paths:
		"cities": "../shared/resources/cities.json"
		"categories": "../shared/resources/categories.json"

		"caterers_and_event": "../shared/resources/categories/caterers_and_event.json"
		"computer_and_office": "../shared/resources/categories/computer_and_office.json"
		"crafts_home_construction": "../shared/resources/categories/crafts_home_construction.json"
		"household_and_gardening": "../shared/resources/categories/household_and_gardening.json"
		"learning_and_education": "../shared/resources/categories/learning_and_education.json"
		"money_tax_legal": "../shared/resources/categories/money_tax_legal.json"
		"pet_care": "../shared/resources/categories/pet_care.json"
		"photo_design_internet": "../shared/resources/categories/photo_design_internet.json"
		"style_and_welness": "../shared/resources/categories/style_and_welness.json"
		"support_and_care": "../shared/resources/categories/support_and_care.json"
		"transport_and_removals": "../shared/resources/categories/transport_and_removals.json"
		"car": "../shared/resources/categories/car.json"
		
		"lzstring": "../vendor/lzstr"
		"text": "../vendor/requirejs-plugins/lib/text"
		"async": "../vendor/requirejs-plugins/src/async"
		"domReady": "../vendor/requirejs-domready/domReady"
		"json": "../vendor/requirejs-plugins/src/json"
		"angular" : "../vendor/angular/angular"
		"toastr": "../vendor/angular/toastr"
		"jquery": "../vendor/angular/jquery-2.0.3.min"
		"jqueryui": "../vendor/jquery-ui/ui/minified/jquery-ui.min"
		"moment": "../vendor/angular/moment.min"
		"gmaps": "../vendor/gmaps/gmaps"

		"ngFileUpload": "../vendor/ng-file-upload/angular-file-upload"
		"ngBootstrap": "../vendor/angular/bootstrap"
		"ngBootstrapTpls": "../vendor/angular/ui-bootstrap-tpls-0.10.0"
		"ngRoutes" : "../vendor/angular/angular-route"
		"ngSanitize": "../vendor/angular/angular-sanitize"
		"ngSpinner" : "../vendor/angular/spin"
		"ngUiRouter": "../vendor/angular-ui-router/release/angular-ui-router"
		"ngCarousel": "../vendor/angular-carousel/dist/angular-carousel.min"
		"ngTouch": "../vendor/angular-touch/angular-touch.min"
		"ngAnimate": "../vendor/angular/angular-animate"

	shim:
		jqueryui:
			deps: [ "jquery" ]
		
		angular: 
			exports: "angular"
		
		toastr:
			deps: [ "jquery" ]
		
		gmaps:
			exports: "GMaps"

		ngFileUpload:
			deps: [ "angular" ]
		
		ngBootstrapTpls:
			deps: [ "ngBootstrap" ]
		
		ngBootstrap:
			deps: [ "angular" ]

		ngAnimate:
			deps: [ "angular" ]
		
		ngUiRouter:
			deps: [ "angular" ]

		ngRoutes:
			deps: [ "angular" ]

		ngSanitize:
			deps: [ "angular" ]

		ngSpinner:
			deps: [ "angular" ]
			exports: "Spinner"

		ngCarousel:
			deps: [ "angular", "ngTouch" ]
			
		ngTouch:
			deps: [ "angular" ]
		
	deps:
		[ "util", "bootstrap", "async!http://maps.google.com/maps/api/js?sensor=true", "lzstring"]
