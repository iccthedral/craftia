define [ "./module" ], (module) ->

	module.controller "NotificationsCtrl", [
		"$scope"
		"user"
		($scope, user) ->
			$scope.notifications = user.notifications
			console.log $scope.notifications
	]