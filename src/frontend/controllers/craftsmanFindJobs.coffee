define ["./module", "json!cities", "json!categories"], (module, cities, categories) ->
	module.controller "CraftsmanFindJobsCtrl" , [
		"$scope"
		"$http"
		"$state"
		"cAPI"
		"appUser"
		"logger"
		"common"
		"config"
		"categoryPictures"
		"gmaps"
		"dialog"
		($scope, $http, $state, API, appUser, logger, common, config, categoryPictures, gmaps, dialog) ->
			state = $state.current.name
			
			$scope.categoryPictures = categoryPictures
			$scope.filteredJobs = []
			$scope.totalJobs = 0
			$scope.searchQuery = ""
			$scope.sizePerPage = 5
			$scope.selectedPage = 0
			$scope.currentPage = 0
			$scope.mapContainer = "#gmaps-div-0"
			$scope.picsContainer = "#pics-div-0"
			$scope.infoContainer = "#info-div-0"
			$scope.profileContainer = "#profile-div-0"
			$scope.bigMapContainer = "#big-map-div"
			$scope.subcategories = []
			$scope.categories = Object.keys(categories)
			$scope.cities = cities
			$scope.searchCriterion = {}
			$scope.selectedCategories = appUser.categories
			$scope.bigMapVisible = false
			$scope.locations = []
			$scope.bigMapCity = {}


			do getCities = ->
				return $scope.cities = cities
			
			$scope.categoryChanged = ->
				jsonFile = categories[$scope.selectedCategories[0]]
				$.get "shared/resources/categories/#{jsonFile}.json", (data) ->
					console.log data
					$scope.subcategories = data.subcategories.slice()
					$scope.$digest()

			$scope.getPage = getPage = (pageIndex, ignore) ->
				if ignore
					return
				common.broadcast config.events.ToggleSpinner, show:true
				$http.get API.getPagedOpenJobs.format("#{pageIndex}")
				.success (data) ->
					for job in data.jobs?
						job.jobPhotos = job.jobPhotos?.filter (img) -> img.img?
					$scope.totalJobs = data.totalJobs
					$scope.filteredJobs = data.jobs?.slice()
				.finally ->
					common.broadcast config.events.ToggleSpinner, show:false
					
			$scope.pageSelected = (page) ->
				fPage (page.page - 1)
				
			$scope.bidOnJob = bidOnJob = (index) -> 
				jobId = $scope.filteredJobs[index]._id
				email = $scope.filteredJobs[index].author.email
				if jobId
					dialog.confirmationDialog {
						title: "Bid for this job?"
						template: "confirm"
						okText: "Yes"
						onOk: ->
							$http.post API.bidOnJob.format("#{jobId}","#{email}")
							.success ->
								getPage($scope.currentPage)
								logger.success "nBid successful!"
							.error (err) ->
								logger.error
						onCancel: ->
							return
					}

			$scope.isBidder = isBidder = (index) ->
				job = $scope.filteredJobs[index] or []
				_.findOne job.bidders , "_id", appUser._id

			$scope.showMap = (job, index) ->
				prevEl = ($ $scope.mapContainer)
				
				$scope.mapContainer = "#gmaps-div-#{index}"
				curEl = ($ $scope.mapContainer)
				if prevEl.is curEl

					prevEl.slideToggle()
				else
					prevEl.slideUp()
					curEl.slideDown()

				if $scope.currentMap?
					$($scope.currentMap.el).empty()

				$scope.currentMap = gmaps.showAddress {
					address: job.address.city.name + ", " + job.address.line1
					container: $scope.mapContainer
					done: ->
						$scope.currentMap.refresh()
				}

			$scope.showBigMap = (bool) ->
				# if bool is $scope.bigMapVisible
				# 	if not bool
				# 		return
				# curEl = ($ $scope.bigMapContainer)
				# if not $scope.searchCriterion.city? 
				# 	if not $scope.bigMapVisible
				# 		logger.warning("Pick a city")
				# 	else
				# 		$scope.bigMapVisible = false
				# 		curEl.slideUp()
				# 	return		
				# $scope.bigMapVisible = bool
				# if bool
				# 	curEl.slideDown()
				# else 
				# 	curEl.slideUp()
				# # if $scope.bigMap?
				# # 	$($scope.bigMap.el).empty()



				# if $scope.searchCriterion.city?

				# 	do initialize = () ->
				# 		$.ajax
				# 			url:"http://maps.googleapis.com/maps/api/geocode/json?address=#{$scope.searchCriterion.city.name}&sensor=false",
				# 			type: "POST",
				# 			success:(res) -> 
				# 				$scope.bigMapCity.lat =  res.results[0].geometry.location.lat
				# 				$scope.bigMapCity.lng = res.results[0].geometry.location.lng
				# 				$scope.bigMapOptions = 
				# 					zoom: 10,
				# 					center: new google.maps.LatLng($scope.bigMapCity.lat.lat, $scope.bigMapCity.lat.lng),
				# 					mapTypeControl: true
				# 					mapTypeControlOptions: {
				# 						style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
				# 					}
				# 					navigationControl: true
				# 					mapTypeId: google.maps.MapTypeId.ROADMAP

				# 		$scope.searchCriterion.paged = false
				# 		$scope.searchCriterion.categories = $scope.selectedCategories
				# 		if $scope.searchCriterion.categories.length is 0
				# 			$scope.searchCriterion.categories = $scope.categories
				# 		common.post API.queryJobs, $scope.searchCriterion
				# 		.success (data) ->
				# 			$scope.totalJobs = data.totalJobs
				# 			$scope.allJobs = data.jobs

				# 			infowindow = new google.maps.InfoWindow()

				# 			for job,i in $scope.allJobs 
				# 				address = job.address.line1  + " , " +  job.address.city.name
				# 				alert address
				# 				$.ajax
				# 					url:"http://maps.googleapis.com/maps/api/geocode/json?address=#{address}&sensor=false",
				# 					type: "POST",
				# 					success:(res) -> 
				# 						loc = {}
				# 						loc.lat = res.results[0].geometry.location.lat
				# 						loc.lng = res.results[0].geometry.location.lng
				# 						$scope.locations.push loc
				# 						return
				# 				if i is $scope.allJobs.length-1
				# 					$scope.bigMap = new google.maps.Map($scope.bigMapContainer, $scope.bigMapOptions)	
				# 					for loc in $scope.locations 
				# 						marker = new google.maps.Marker
				# 							position: new google.maps.LatLng(loc.lat,loc.lng)
				# 						marker.setMap $scope.bigMap	
				# 						google.maps.event.addListener(marker, 'click', () ->
				# 							infowindow.setContent(contentString)
				# 							infowindow.open(map, marker)
				# 						)
				# 					infowindow = new google.maps.InfoWindow(
				# 						size: new google.maps.Size(150, 50)
				# 					)			

			$scope.showPics = showPics = (job, index) ->
				prevEl = ($ $scope.mapContainer)
				
				$scope.picsContainer = "#pics-div-#{index}"
				curEl = ($ $scope.picsContainer)
				if prevEl.is curEl

					prevEl.slideToggle()
				else
					prevEl.slideUp()
					curEl.slideDown()
				return
			$scope.showProfile = showProfile = (index) ->
				prevEl = ($ $scope.profileContainer)
				$scope.profileContainer = "#profile-div-#{index}"
				curEl = ($ $scope.profileContainer)
				if prevEl.is curEl
					prevEl.slideToggle()
				else
					prevEl.slideUp()
					curEl.slideDown()
				return	

			$scope.showInfo = showInfo = (index) ->
				prevEl = ($ $scope.infoContainer)
				
				$scope.infoContainer = "#info-div-#{index}"
				curEl = ($ $scope.infoContainer)
				if prevEl.is curEl

					prevEl.slideToggle()
				else
					prevEl.slideUp()
					curEl.slideDown()
				return	

			$scope.sendMessage = sendMessage = (index)->
				job = $scope.filteredJobs[index]
				scope = {
					body: "msg body"
					subject: "msg subject"
					sender: appUser.username
					receiver: job.author.username
				}

				dialog.confirmationDialog {
					title: "Send message"
					template: "sendMessage"
					okText: "Send"
					scope: scope
					
					onOk: ->
						$http.post API.sendMessage, scope
						.success ->
							common.broadcast config.events.ToggleSpinner, show:true
							logger.success "Message sent!"
						.error (err) ->
							logger.error err
						.finally ->
							common.broadcast config.events.ToggleSpinner, show:false
						console.log "Send", scope
						
					onCancel: ->
						return
				}	


			$scope.search = ()->
				$scope.searchCriterion.categories = $scope.selectedCategories
				if $scope.searchCriterion.categories.length is 0
					debugger
					$scope.searchCriterion.categories = $scope.categories

				$scope.searchCriterion.subcategory = $scope.selectedSubcategory
				$scope.searchCriterion.page = $scope.currentPage
				common.post API.queryJobs, $scope.searchCriterion
				.success (data) ->
					$scope.totalJobs = data.totalJobs
					$scope.filteredJobs = data.jobs?.slice()
				
			do activate = ->
				common.activateController [$scope.search()], "CraftsmanFindJobsCtrl"
	]