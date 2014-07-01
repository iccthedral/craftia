define ["./module"], (module) ->

	module.controller "CustomerJobsCtrl" , [
		"$scope"
		"$http"
		"$state"
		"cAPI"
		"logger"
		"common"
		"config"
		"categoryPictures"
		"gmaps"
		"dialog"

		($scope, $http, $state, API, logger, common, config, categoryPictures, gmaps, dialog) ->
			state = $state.current.name
			
			$scope.categoryPictures = categoryPictures
			$scope.filteredJobs = []
			$scope.totalJobs = 0
			$scope.searchQueries = {}
			$scope.sizePerPage = 5
			$scope.selectedPage = 0
			$scope.currentPage = 0
			$scope.jobStatus = "all"

			$scope.mapContainer = "#gmaps-div-0"
			$scope.picsContainer = "#pics-div-0"
			$scope.infoContainer = "#info-div-0"
			$scope.profileContainer = "#profile-div-0"

			$scope.tempJob = {}
			$scope.editIndex = $scope.sizePerPage;

			$scope.editJob = editJob = (index) ->
				$scope.editIndex = index

			# $scope.update = ->
			# $http.post (common.format API.updateJob, jobId), job
			# .success (data) ->
			# 	$.extend $scope.job, data
			# 	log.success "Job updated!"
			# 	$state.transitionTo "customer.jobs"
			# .error (err) ->
			# 	log.error err
			# 	$state.transitionTo "customer"

			$scope.saveJob = saveJob = (index, jobId) ->
				jobId = $scope.filteredJobs[index]._id
				$scope.editIndex = $scope.sizePerPage
				$http.post API.updateJob.format("#{jobId}"), $scope.tempJob
				.success (data) ->
					$scope.filteredJobs[index] = _.extend(true, {}, data)
					logger.success "Job updated!"
					$state.transitionTo "customer.jobs"
				.error (err) ->
					logger.error err
					$state.transitionTo "customer"


			$scope.getPage = getPage = (pageIndex, jobStatus) ->
				if $scope.currentPage is pageIndex and $scope.jobStatus is jobStatus
					return
				if $scope.jobStatus isnt jobStatus
					$scope.jobStatus = jobStatus
					$scope.filteredJobs = []
				
				common.broadcast config.events.ToggleSpinner, show:true
				$http.get API.getMyJobs.format("#{pageIndex}","#{jobStatus}")
				.success (data) ->
					for job in data.jobs
						job.jobPhotos = job.jobPhotos.filter (img) -> img.img?
					$scope.totalJobs = data.totalJobs
					$scope.jobs = data.jobs
					$scope.filteredJobs = data.jobs.slice()
					console.log "hmmm"
				.error ->
					console.log "err"
				.finally ->
					console.log "aaam"
					common.broadcast config.events.ToggleSpinner, show:false
			
			$scope.pageSelected = (page) ->
				getPage (page.page - 1)
			
			$scope.showProfile= showProfile = (index) ->
				prevEl = ($ $scope.profileContainer)
				
				$scope.profileContainer = "#profile-div-#{index}"
				curEl = ($ $scope.profileContainer)
				if prevEl.is curEl

					prevEl.slideToggle()
				else
					prevEl.slideUp()
					curEl.slideDown()
				return		

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
					address: job.address.city + job.address.line1
					container: $scope.mapContainer
					done: ->
						$scope.currentMap.refresh()
						console.log 'iamdone'
				}

			$scope.sendMessage = sendMessage = (bidder)->
				scope = {
					body: "msg body"
					subject: "msg subject"
					receiver: bidder
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
						console.log "Cancel", scope
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

			$scope.pickWinner = pickWinner = (bidderId, index) ->
				job = $scope.filteredJobs[index]
				dialog.confirmationDialog {
					title: "Pick winner?"
					template: "confirm"
					okText: "Accept"
					onOk: ->
						$http.post API.pickWinner.format("#{job._id}","#{bidderId}")
						.success ->
							getPage($scope.currentPage, 'finished')
						.error (err) ->
							logger.error err	
					onCancel: ->
						logger.info "Action canceled"	
				}		

			$scope.showInfo= showInfo = (index) ->
				$scope.tempJob = _.extend(true, {}, $scope.filteredJobs[index])
				prevEl = ($ $scope.infoContainer)
				
				$scope.infoContainer = "#info-div-#{index}"
				curEl = ($ $scope.infoContainer)
				if prevEl.is curEl

					prevEl.slideToggle()
				else
					prevEl.slideUp()
					curEl.slideDown()
				return

			$scope.search = ->
				return

				# text = $scope.searchQuery
				# $scope.filteredMessages = $scope.messages.filter (msg) ->
				# 	msg.subject.indexOf(text) isnt -1 or msg.message.indexOf(text) isnt -1
				
			do activate = ->
				getJobsPaged = getPage $scope.currentPage
	]