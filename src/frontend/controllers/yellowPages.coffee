define ["./module"], (module) ->

	module.controller "YellowPagesCtrl" , [
		"$scope"
		"$http"
		"$state"
		"cAPI"
		"logger"
		"common"
		"config"
		"categoryPictures"
		"gmaps"

		($scope, $http, $state, API, logger, common, config, categoryPictures, gmaps) ->
			state = $state.current.name
			
			$scope.categoryPictures = categoryPictures
			$scope.filteredCraftsmen = []
			$scope.totalCraftsmen = 0
			$scope.searchQueries = {}
			$scope.sizePerPage = 5
			$scope.selectedPage = 0
			$scope.currentPage = 0
			
			getPage = (pageIndex) ->
				common.broadcast config.events.ToggleSpinner, show:true
				$http.get API.craftsmen.format("#{pageIndex}")
				.success (data) ->
					$scope.totalCraftsmen = data.totalCraftsmen
					$scope.craftsmen = data.craftsmen
					$scope.filteredCraftsmen = data.craftsmen.slice()
				.then ->
					common.broadcast config.events.ToggleSpinner, show:false
			
			$scope.pageSelected = (page) ->
				getPage (page.page - 1)


			$scope.showInfo = (job, index) ->
				console.log job, index
				($ $scope.infoContainer).slideToggle()

				$scope.infoContainer = "#pics-div-#{index}"
				($ $scope.infoContainer).slideToggle();
				return

	
			$scope.search = ->
				return


			getPage 0
			
			do activate = ->
				getCraftsmanPaged = $http.get API.craftsmen.format $scope.currentPage
				.success (data) -> 
					$scope.filteredJobs = data
					$state.transitionTo "anon.yellowPages"
				.error (err) ->
					logger.error err
				common.activateController [getCraftsmanPaged], "YellowPagesCtrl"
	]