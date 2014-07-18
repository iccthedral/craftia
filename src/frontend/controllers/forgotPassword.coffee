define [ "./module" ], (module) -> 
	module.controller "ForgotPassCtrl", [
		"$scope"
		"$http"
		"$state"
		"cAPI"
		"common"
		"logger"	
		($scope, $http, $state, cAPI, common, logger) ->
			$scope.email = ""
			$scope.reset = ->
				common.post cAPI.forgotPassword, email: $scope.email
				.error (err) ->
					logger.error err
				.success (data) ->
					logger.success data
				.finally ->
					$state.go "anon"
	]