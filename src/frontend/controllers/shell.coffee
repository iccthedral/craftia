define ["controllers/module", "angular"], (module, ng) ->

	module.controller "ShellCtrl", [
		"$scope"
		"$rootScope"
		"$http"
		"$state"
		"config"
		"appUser"
		
		($scope, $rootScope, $http, $state, config, appUser) ->		
			$scope.busyMessage = "Loading..."
			$scope.isBusy = false
			$scope.spinnerOptions =
				radius: 40
				lines: 7
				length: 0
				width: 30
				speed: 1.7
				corners: 1.0
				trail: 100
				color: "#F58A00"

			$scope.$on "$viewContentLoaded", ->
				ng.element "[data-toggle=offcanvas]"
				.on "click", ->
					ng.element ".row-offcanvas"
					.toggleClass "active"
					ng.element ".showhide"
					.toggle()
			
			$scope.$watch "isBusy", (newVal, oldVal) ->				
				return if newVal is oldVal
				sp = $("#splash").stop()
				if newVal
					sp.fadeIn(100)
				else
					sp.fadeOut(100)
				return newVal

			$scope.toggleSpinner = (val) ->
				$scope.isBusy = val

			$rootScope.$on "$locationChangeStart", (event, next, curr) ->
				$scope.toggleSpinner true

			$rootScope.$on "$locationChangeSuccess", (event, next, curr) ->
				$scope.toggleSpinner false
				
			$rootScope.$on config.events.ToggleSpinner, (_, data) ->
				$scope.toggleSpinner data.show
	]
