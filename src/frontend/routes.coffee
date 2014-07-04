define ["app", "angular"], (app, ng) ->

	app.config ($stateProvider, $urlRouterProvider) ->
		$stateProvider
		.state "anon", {
			url: "/anon"
			views:
				"":
					templateUrl: "shared/templates/layout/shell.html"
					controller: "ShellCtrl"
				
				"navmenu@anon":
					templateUrl: "shared/templates/layout/anonMainNav.html"
				
				"navSubMenu@anon": 
					templateUrl: "shared/templates/layout/navSubMenu.html"

				"navbar@anon":
					templateUrl: "shared/templates/layout/anonUserBar.html"

				"shell@anon":
					templateUrl: "shared/templates/layout/anonMainShell.html"
					controller: "AnonCtrl"
		}
			.state "anon.createJob", {
				url: "/createJob"
				views:
					"shell@anon":
						template: """
							<div ng-if="firstStep" ng-include="'shared/templates/forms/createJob1.html'"></div>
							<div ng-if="secondStep" ng-include="'shared/templates/forms/createJob2.html'"></div>
						"""
						controller: "CreateJobCtrl"
			}
			.state "anon.yellowPages", {
				url: "/yellowPages"
				views:
					"shell@anon":
						templateUrl: "/shared/templates/layout/yellowPages.html"
						controller: "YellowPagesCtrl"
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
			.state "anon.craftsmanMenu", {
				url: "/craftsmanMenu"
				views:
					"":
						templateUrl: "shared/templates/layout/shell.html"
						controller: "ShellCtrl"

					"navSubMenu@anon": 
						templateUrl: "shared/templates/layout/craftsmanMenu.html"
			}
			.state "anon.findJobs", {
				url: "/findJobs"
				views:
					"shell@anon":
						templateUrl: "shared/templates/layout/findJobs.html"
						controller: "FindJobsCtrl"
			}
			.state "anon.requirements", {
				url: "/requirements"
				views:
					"shell@anon":
						templateUrl: "shared/templates/layout/requirements.html"
			}
			.state "anon.howto", {
				url: "/howto"
				views:
					"shell@anon":
						templateUrl: "shared/templates/layout/howto.html"
			}
			.state "anon.prices", {
				url: "/prices"
				views:
					"shell@anon":
						templateUrl: "shared/templates/layout/prices.html"
			}

		## When CUSTOMER is logged in ###
		$stateProvider
		.state "customer", {
			url: "/customer"
			views:
				"":
					templateUrl: "shared/templates/layout/shell.html"
					controller: "ShellCtrl"
				
				"navmenu@customer":
					templateUrl: "shared/templates/layout/customerMainNav.html"
					controller: "NavCtrl"

				"navbar@customer":
					templateUrl: "shared/templates/layout/customerBar.html"
		}
			.state "customer.profile", {
				url: "/profile"
				views:
					"shell@customer":
						templateUrl: "shared/templates/forms/customerProfile.html"
						controller: "CustomerProfileCtrl"
			}
			.state "customer.notifications", {
				url: "/notifications"
				views:
					"shell@customer":
						templateUrl: "shared/templates/layout/notifications.html"
						controller: "NotificationsCtrl"
			}
			.state "customer.messages", {
				url: "/messages"
				views:
					"shell@customer":
						templateUrl: "shared/templates/layout/inbox.html"
						controller: "InboxCtrl"
			}
			.state "customer.messages.sent", {
				url: "/sent"
				views:
					"main@customer.messages":
						templateUrl: "/shared/templates/layout/sentMessages.html"
			}
			.state "customer.messages.received", {
				url: "/received"
				views:
					"main@customer.messages":
						templateUrl: "/shared/templates/layout/receivedMessages.html"
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
			.state "customer.findJobs", {
				url: "/findJobs"
				views:
					"shell@anon":
						templateUrl: "shared/templates/layout/findJobs.html"
			}
			.state "customer.yellowPages", {
				url: "/yellowPages"
				views:
					"shell@customer":
						templateUrl: "/shared/templates/layout/yellowPages.html"
						controller: "CustomerYellowPagesCtrl"
			}

		$stateProvider
		.state "craftsman", {
			url: "/craftsman"
			views:
				"":
					templateUrl: "shared/templates/layout/shell.html"
					controller: "ShellCtrl"

				"navmenu@craftsman":
					templateUrl: "shared/templates/layout/craftsmanMainNav.html"
					controller: "NavCtrl"

				"navbar@craftsman":
					templateUrl: "shared/templates/layout/craftsmanBar.html"
		}
			.state "craftsman.messages", {
				url: "/messages"
				views:
					"shell@craftsman":
						templateUrl: "shared/templates/layout/inbox.html"
						controller: "InboxCtrl"
			}
			.state "craftsman.messages.sent", {
				url: "/sent"
				views:
					"main@craftsman.messages":
						templateUrl: "/shared/templates/layout/sentMessages.html"
			}
			.state "craftsman.messages.received", {
				url: "/received"
				views:
					"main@craftsman.messages":
						templateUrl: "/shared/templates/layout/receivedMessages.html"
			}

			.state "craftsman.myJobs", {
				url: "/myJobs"
				views:
					"shell@craftsman":
						templateUrl: "shared/templates/layout/craftsmanMyJobs.html"
						controller: "CraftsmanMyJobsCtrl"
			}

			.state "craftsman.findJobs", {
				url: "/findJobs"
				views:
					"shell@craftsman":
						templateUrl: "shared/templates/layout/craftsmanFindJobs.html"
						controller: "CraftsmanFindJobsCtrl"
			}
			.state "craftsman.yellowPages", {
				url: "/yellowPages"
				views:
					"shell@craftsman":
						templateUrl: "/shared/templates/layout/yellowPages.html"
						controller: "CraftsmanYellowPagesCtrl"
			}
			.state "craftsman.notifications", {
				url: "/notifications"
				views:
					"shell@craftsman":
						templateUrl: "shared/templates/layout/notifications.html"
						controller: "NotificationsCtrl"
			}

			.state "craftsman.profile", {
				url: "/profile"
				views:
					"shell@craftsman":
						templateUrl: "shared/templates/forms/craftsmanProfile.html"
						controller: "CraftsmanProfileCtrl"
			}


		$urlRouterProvider.otherwise ""

	.run [
		"$state"
		"$location"
		"$http"
		"$rootScope"
		"$urlMatcherFactory"
		"cAPI"
		"logger"
		"appUser"

		($state, $location, $http, $rootScope, $urlMatcherFactory, API, logger, appUser) ->
			lastState = null
			$rootScope
			.$on "$stateChangeStart", (ev, toState, toParams, fromState, fromParams) ->
				isLoggedIn = appUser.isLoggedIn
				type = appUser.getType
				typeRe = new RegExp "^#{type}.*", "g"
				nextState = toState.name
				fromState = fromState.name

				$(".shellic").fadeOut 500
				$(".shellic").fadeIn 500
				
				logger.log "lastState: #{lastState}, isLogged: #{isLoggedIn}, utype: #{type}, #{fromState} -> #{toState.name}"

				if not typeRe.test nextState
					logger.log "Access denied to state #{nextState}"
					ev.preventDefault()
					if lastState isnt nextState
						lastState or= appUser.getType
						logger.log "Trying state #{lastState}"
						$state.go lastState

				logger.log "Next state: #{nextState}"
				logger.log "Last good state: #{lastState}"

			$rootScope
			.$on "$stateChangeSuccess", (ev, toState, toParams, fromState, fromParams) ->
				lastState = toState.name
				logger.log "Activated state #{lastState}"
	]

