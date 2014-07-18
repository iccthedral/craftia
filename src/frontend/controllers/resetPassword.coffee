define [ "./module" ], (module) -> 
	module.controller "ResetPasswordCtrl", [
		"$scope"
		"$http"
		"$state"
		"cAPI"
		"common"
		"logger"	
		($scope, $http, $state, cAPI, common, logger) ->
			
			$scope.data = 
				password: ""
				confirm: ""

			$scope.updatePassword = ->
				$scope.data.token = $state.params.token
				console.log $scope.data
				data = $scope.data
				$http.post cAPI.resetPassword, $scope.data
				.error (err) ->
					logger.error err
				.success (data) ->
					logger.success data
				.finally ->
					$state.go "anon"
	]