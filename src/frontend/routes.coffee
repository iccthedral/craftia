define ["app", "angular"], (app, angular) ->

	# routerApp = angular.module "router", ["ui.router"]

	app.config ($stateProvider, $urlRouterProvider) ->
		resolveUser = [
			"$http"
			"$state"
			"$rootScope"
			"cAPI"
			"logger"
			"user"
			($http, $state, $rootScope, API, logger, user) ->
				$http.get API.tryLogin
				.success (data) ->
					user.load data
					user.loaded = true
					if data.type is "Customer"
						$state.transitionTo "customer" 
					else if data.type is "Craftsman"
						$state.transitionTo "craftsman"
					else
						$state.transitionTo "anon"
				.error (err) ->
					logger.error err
					user.loaded = true
					$state.transitionTo "anon"
		]
		
		$stateProvider
		.state "index", {
			url: ""
			controller: resolveUser
		}

		$stateProvider
		.state "anon", {
			url: "/anon"
			views:
				"":
					templateUrl: "shared/templates/layout/shell.html"
					controller: "ShellCtrl"
				
				"navmenu@anon":
					templateUrl: "shared/templates/layout/anonMainNav.html"
				
				"navbar@anon":
					templateUrl: "shared/templates/layout/anonUserBar.html"

				"shell@anon":
					templateUrl: "shared/templates/layout/anonMainShell.html"
					controller: "AnonCtrl"
		}
			.state "anon.login", {
				url: "/login"
				views:
					"shell@anon": 
						templateUrl: "shared/templates/forms/login.html"
						controller: "LoginCtrl"
			}
			.state "anon.register", {
				url: "/register"
				views:
					"shell@anon": 
						templateUrl: "shared/templates/forms/registration.html"
			}
			.state "anon.register.customer", {
				url: "/customer"
				views:
					"shell@anon":
						templateUrl: "shared/templates/forms/registerCustomer.html"
						controller: "RegisterCtrl"
			}
			.state "anon.register.craftsman", {
				url: "/craftsman"
				views:
					"shell@anon":
						templateUrl: "shared/templates/forms/registerCraftsman.html"
						controller: "RegisterCtrl"
			}

		### When CUSTOMER is logged in ###
		$stateProvider.state "customer", {
			url: "/cu"
			views:
				"":
					templateUrl: "shared/templates/layout/shell.html"
					controller: "ShellCtrl"
				
				"navmenu@customer":
					templateUrl: "shared/templates/layout/customerMainNav.html"
					controller: "NavCtrl"

				"navbar@customer":
					templateUrl: "shared/templates/layout/customerBar.html"

				"shell@customer":
					template: "Pozz kolega1!"
		}
			.state "customer.messages", {
				url: "/messages"
				views:
					"shell@customer":
						template: "Pozz kolega2!"
			}
			.state "customer.jobs", {
				url: "/jobs"
				views:
					"shell@customer":
						templateUrl: "shared/templates/layout/customerJobList.html"
						controller: "CustomerJobsCtrl"
			}
			.state "customer.createJob", {
				url: "/createJob"
				views:
					"shell@customer":
						template: """
							<div ng-if="firstStep" ng-include="'shared/templates/forms/createJob1.html'"></div>
							<div ng-if="secondStep" ng-include="'shared/templates/forms/createJob2.html'"></div>
						"""
						controller: "CreateJobCtrl"
			}
			.state "customer.editJob", {
				url: "/editJob/:jobId"
				views:
					"shell@customer":
						templateUrl: "shared/templates/forms/editJob.html"
						controller: "EditJobCtrl"
			}
			.state "customer.testpage", {
				url: "/testPage"
				views:
					"shell@customer":
						template: """






"""
						controller: ($scope) ->
							$scope.x = 10;
			}

		$stateProvider.state "craftsman", {
			url: "/cr"
			views:
				"":
					templateUrl: "shared/templates/layout/shell.html"
					controller: "ShellCtrl"
		}

		# .state "craftsman", {
		# 	url: "/cr"
		# 	views:
		# 		navmenu:
		# 			templateUrl: "shared/templates/layout/craftsmanMainNav.html"
		# 		shell:
		# 			templateUrl: "shared/templates/layout/craftsmanShell.html"
		# }

		# templateUrl: "shared/templates/layout/anonMainShell.html"
		# controller: "AnonCtrl"
		# routeProvider.when "/login", {
		# 	templateUrl: "shared/templates/layout/loginForm.html"
		# 	controller: "LoginCtrl"
		# }
		# routeProvider.when "/", {
		# 	templateUrl: "shared/templates/layout/anonMainShell.html"
		# 	controller: "AnonCtrl"
		# }
		# routeProvider.when "/craftsmanMenu", {
		# 	templateUrl: "shared/templates/layout/craftsmanMenu.html"
		# 	controller: "CraftsmanMenuCtrl"
		# }
		# routeProvider.when "/crhome", {
		# 	templateUrl: ""
		# }
		# routeProvider.when "/cuhome", {

		# }
	# ]