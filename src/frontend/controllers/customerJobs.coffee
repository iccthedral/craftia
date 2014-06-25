define ["./module"], (module) ->

	module.controller "CustomerJobsCtrl", [
		"$scope"
		"user"
		($scope, user) ->
			# $scope
			# console.log user
			$scope.sizePerPage = 3
			$scope.selectedPage = 0
			$scope.currentPage = 0

			getPage = (pageIndex) ->
				startIndex = $scope.sizePerPage * pageIndex
				console.debug startIndex, $scope.sizePerPage

				return user.createdJobs[startIndex...startIndex+$scope.sizePerPage]

			$scope.createdJobsPaged = getPage 0

			$scope.deleteJob = (id) ->
				# user.createdJobs
				console.debug "DELETING", id
				
			$scope.pageSelected = (page) ->
				console.debug page
				$scope.createdJobsPaged = getPage (page.page - 1)
	]
		