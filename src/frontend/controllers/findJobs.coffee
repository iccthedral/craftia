define ["./module"], (module) ->

	module.controller "FindJobsCtrl" , [
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
			$scope.filteredJobs = []
			$scope.totalJobs = 0
			$scope.searchQueries = {}
			$scope.sizePerPage = 5
			$scope.selectedPage = 0
			$scope.currentPage = 0
			
			getPage = (pageIndex = 0) ->
				common.get API.getPagedOpenJobs.format("#{pageIndex}")
				.success (data) ->
					for job in data.jobs
						job.jobPhotos = job.jobPhotos.filter (img) -> img.img?
					$scope.totalJobs = data.totalJobs
					$scope.jobs = data.jobs
					$scope.filteredJobs = data.jobs.slice()
			
			$scope.pageSelected = (page) ->
				getPage (page.page - 1)
					
			$scope.showMap = (job, index) ->
				($ $scope.mapContainer).slideUp()
				
				$scope.mapContainer = "#gmaps-div-#{index}"
				($ $scope.mapContainer).slideDown()

				if $scope.currentMap?
					$($scope.currentMap.el).empty()

				$scope.currentMap = gmaps.showAddress {
					address: job.address.city
					container: $scope.mapContainer
					done: ->
						$scope.currentMap.refresh()
						console.log 'iamdone'
				}

			$scope.showInfo = (job, index) ->
				($ $scope.infoContainer).slideUp()
				$scope.infoContainer = "#pics-div-#{index}"
				($ $scope.infoContainer).slideDown();
				return

			$scope.search = ->
				return
				# text = $scope.searchQuery
				# $scope.filteredMessages = $scope.messages.filter (msg) ->
				# 	msg.subject.indexOf(text) isnt -1 or msg.message.indexOf(text) isnt -1
						
			do activate = ->
				common.activateController [getPage], "FindJobsCtrl"
	]