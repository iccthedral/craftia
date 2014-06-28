define ["app", "angular"], (app, angular) ->


	app
	.config ($stateProvider, $urlRouterProvider) ->
		$stateProvider
		.state "index", {
			url: ""
			controller: ($state, user) ->
				$state.transitionTo user.getType or "anon"
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
				
				"navSubMenu@anon": 
					templateUrl: "shared/templates/layout/navSubMenu.html"

				"navbar@anon":
					templateUrl: "shared/templates/layout/anonUserBar.html"

				"shell@anon":
					templateUrl: "shared/templates/layout/anonMainShell.html"
					controller: "AnonCtrl"
		}
			.state "anon.craftsmanMenu", {
				url: "/anon/craftsmanMenu"
				views:
					"navSubMenu@anon": 
						templateUrl: "shared/templates/layout/craftsmanMenu.html"
			}
			.state "anon.findJobs", {
				url: "/anon/findJobs:page"
				views:
					"shell@anon":
						templateUrl: "shared/templates/layout/findJobs.html"
						controller: "FindJobsCtrl"
			}

			.state "anon.craftsmanMenu.requirements", {
				url: "/requirements"
				views:
					"shell@anon":
						templateUrl: "shared/templates/layout/requirements.html"
			}
			.state "anon.craftsmanMenu.howto", {
				url: "/howto"
				views:
					"shell@anon":
						templateUrl: "shared/templates/layout/howto.html"
			}
			.state "anon.craftsmanMenu.prices", {
				url: "/prices"
				views:
					"shell@anon":
						templateUrl: "shared/templates/layout/prices.html"
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

		## When CUSTOMER is logged in ###
		$stateProvider.state "customer", {
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

				"shell@customer":
					template: """    
					  <div class="row">
				      <div class="col-md-12 col-sm-12 col-xs-12">
				          <input class="input-medium search-query"
				                 data-ng-model="contact"
				                 data-ng-keyup="search($event)"
				                 placeholder="live search...">
				          <div class="widget wcyan">
				              <div class="widget-head">

				                  <button type="button" class="btn btn-secondary btn-lg" ng-click="showInbox()">
				                      <i class="fa fa-arrow-circle-down"></i> Inbox
				                  </button>
				                  <button type="button" class="btn btn-secondary btn-lg" ng-click="showOutbox()">
				                      <i class="fa fa-arrow-circle-up"></i> Outbox
				                  </button>

				              </div>
				              <div class="underConstruction" style="width:100%;">
				              </div>
				  				</div>
	  				   </div>
	  				</div>
       """
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
			.state "customer.testpage", {
				url: "/testPage"
				views:
					"shell@customer":
						template: """ Hi kolega """
						controller: ($scope) ->
							$scope.x = 10
			}

		$stateProvider.state "craftsman", {
			url: "/craftsman"
			views:
				"":
					templateUrl: "shared/templates/layout/shell.html"
					controller: "ShellCtrl"
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
	.run [
		"$state"
		"$location"
		"$http"
		"$rootScope"
		"$urlMatcherFactory"
		"cAPI"
		"logger"
		"user"
		($state, $location, $http, $rootScope, $urlMatcherFactory, API, logger, user) ->
			# $urlRouterProvider.when "", user.getType

			path = $location.$$path
			# path = "#{path}"
			console.log path
			
			$rootScope.$on "$stateChangeStart", (ev, toState) ->
				$(".shellic").fadeOut(500)
				type = user.getType
				nextState = toState.name

			$rootScope.$on "$stateChangeSuccess", (ev, toState) ->
				$(".shellic").fadeIn(500)

				#console.trace type, nextState

				# if (nextState.indexOf("customer") is 0) and type isnt "customer"
				# 	_.logp {customer:""}
				# 	logger.error "You are not customer, wtf"
				# 	$state.transitionTo "index"
				# 	ev.preventDefault()
				# else if (nextState.indexOf("craftsman") is 0) and type isnt "craftsman"
				# 	_.logp {craftsman:""}
				# 	logger.error "You are not craftsman, wtf"
				# 	$state.transitionTo "index"
				# 	ev.preventDefault()
				# if (nextState.indexOf("anon") is 0) and type isnt "anon"
				# 	_.logp {anon:""}
				# 	logger.error "You are not anon, wtf"
				# 	$state.transitionTo "index"
				# 	ev.preventDefault()

			$http.get API.tryLogin
			.success (data) ->
				user.load data
				logger.success "You're now logged in as #{user.username}"
			.then (err) ->
				console.log "PATH", path
				# $location.path path
	]

