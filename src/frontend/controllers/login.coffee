define [ "./module" ], (module) -> module.controller "LoginCtrl", [
	"$scope"
	"$http"
	"$state"
	"cAPI"
	"appUser"
	"logger"
	
	($scope, $http, $state, cAPI, appUser, logger) ->
		$scope.loginDetails =
			email: ""
			password: ""
			rememberme: false
		$scope.login = ->
			$http.post cAPI.login, $scope.loginDetails
			.error (err) =>
				logger.error err
				$state.transitionTo "anon"
			.success (data) =>
				appUser.load data
				if data.type is "Customer"
					$state.transitionTo "customer" 
				else if data.type is "Craftsman"
					$state.transitionTo "craftsman"
				else
					$state.transitionTo "anon"
]