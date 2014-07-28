define ["./module", "json!cities", "json!categories"], (module, cities, categories) ->

	module.controller "CreateJobCtrl", [
		"$scope"
		"$state"
		"$http"
		"appUser"
		"logger"
		"cAPI"
		"gmaps"

		($scope, $state, $http, appUser, log, API, gmaps) ->
			$scope.title1 = "Enter job details"
			$scope.title2 = "Upload job photos"
			$scope.mapContainer = "#gmaps-div"
			$scope.firstStep = true
			$scope.secondStep = false

			job = 
				dateFrom: new Date
				dateTo: new Date

			gm = google.maps
			job.jobPhotos = []
			$scope.job = job
			$scope.subcategories = []
			$scope.categories = Object.keys(categories)
			
			$scope.showMap = () ->
				if !job.address?  or !job.address.line1?	or !job.address.city?
						return

				curEl = ($ $scope.mapContainer)
				curEl.slideToggle()
				if $scope.currentMap?
					$($scope.currentMap.el).empty()
				$scope.currentMap = gmaps.showAddress {
					address: job.address.line1 + ", " + job.address.city.name
					container: $scope.mapContainer
					done: ->
						$scope.currentMap.refresh()
						oms = new OverlappingMarkerSpiderfier($scope.currentMap.map)

						$scope.currentMap = gmaps.newMarker {
							address: appUser.address.line1 + ", " +  appUser.address.city
							map : $scope.currentMap
							done: ->
								$scope.currentMap.refresh()
						}
						$scope.job.coordinates = {}
						$scope.job.coordinates.lat = $scope.currentMap.lat
						$scope.job.coordinates.lng = $scope.currentMap.lng
				}

			$scope.getCities = ->
				return cities

			
			$scope.categoryChanged = ->
				jsonFile = categories[$scope.job.category]
				$.get "shared/resources/categories/#{jsonFile}.json", (data) ->
					console.log data
					$scope.subcategories = data.subcategories.slice()
					$scope.$digest()

			$scope.create = ->
				$http.post API.createJob, job
				.success (data) ->
					log.success "Job created!"
					appUser.createdJobs or= []
					appUser.createdJobs.push data
					$state.transitionTo "customer.jobs"
				.error (err) ->
					log.error err
					$state.transitionTo "customer"
			
			$scope.nextStep = ->
				$scope.firstStep = false
				$scope.secondStep = true

			$scope.prevStep = ->
				$scope.firstStep = true
				$scope.secondStep = false

			$scope.photoUploaded = (file, content) ->
				console.log file, content
				console.log job
				# job.jobPhotos[index].img = content
	]