define ["./module"], (module) ->

	module.controller "CustomerCtrl", [
		"$scope"
		"user"
		($scope, user) ->
			# $scope
			# console.log user
			$scope.createdJobsPaged = ->
				
			$scope.deleteJob = (index) ->
				console.log index
	]
		