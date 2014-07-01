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
			
			getPage = (pageIndex = 0) ->
				console.debug common
				common.get API.craftsmen.format("#{pageIndex}")
				.success (data) ->
					$scope.totalCraftsmen = data.totalCraftsmen
					$scope.craftsmen = data.craftsmen
					$scope.filteredCraftsmen = data.craftsmen.slice()
			
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
			
			common.activateController [getPage()], "YellowPagesCtrl"
	]