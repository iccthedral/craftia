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



			do getCities = ->
				return $scope.cities = cities
			
			$scope.categoryChanged = ->
				jsonFile = categories[$scope.selectedCategories[0]]
				$.get "shared/resources/categories/#{jsonFile}.json", (data) ->
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
				$scope.bigMapShown = bool
				curEl = ($ $scope.bigMapContainer)
				if not bool
					curEl.slideToggle()
					return
				$scope.searchCriterion.categories = $scope.selectedCategories
				$scope.searchCriterion.paged = false
				if $scope.searchCriterion.categories.length is 0
					$scope.searchCriterion.categories = $scope.categories

				$scope.searchCriterion.subcategory = $scope.selectedSubcategory
				$scope.searchCriterion.page = $scope.currentPage
				common.post API.queryJobs, $scope.searchCriterion
				.success (data) ->
					$scope.mappedJobs = data.jobs?.slice()
					curEl.slideToggle()
					if $scope.bigMap?
						$($scope.bigMap.el).empty()
					$scope.bigMap = gmaps.showAddress {
						address: appUser.address.line1 + ", " + appUser.address.city
						container: $scope.bigMapContainer
						done: ->
							oms = new OverlappingMarkerSpiderfier($scope.bigMap.map)
							for job in $scope.mappedJobs 
								if job.coordinates?
									$scope.bigMap.addMarker {lat:job.coordinates.lat, lng: job.coordinates.lng, infoWindow: {
										content: '<div class="info-window-div"><p>'+job.address.line1+'</p>
											<p>We will soon have more job infos here and some interactivity</p></div>'
									}}
							$scope.bigMap.refresh()	
				}


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
				$scope.searchCriterion.paged = true
				if $scope.searchCriterion.categories.length is 0
					$scope.searchCriterion.categories = $scope.categories

				$scope.searchCriterion.subcategory = $scope.selectedSubcategory
				$scope.searchCriterion.page = $scope.currentPage
				common.post API.queryJobs, $scope.searchCriterion
				.success (data) ->
					$scope.totalJobs = data.totalJobs
					$scope.filteredJobs = data.jobs?.slice()
				
			do activate = ->
				common.activateController [$scope.search(true)], "CraftsmanFindJobsCtrl"
	]