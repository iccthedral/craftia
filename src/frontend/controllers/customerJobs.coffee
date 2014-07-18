define ["./module", "moment"], (module, moment) ->

	module.controller "CustomerJobsCtrl" , [
		"$scope"
		"$http"
		"$state"
		"$timeout"
		"cAPI"
		"logger"
		"common"
		"config"
		"categoryPictures"
		"gmaps"
		"dialog"

		($scope, $http, $state, $timeout, API, logger, common, config, categoryPictures, gmaps, dialog) ->
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
			$scope.ratingContainer = "#rating-div-0"
			$scope.tempJob = {}
			$scope.editIndex = $scope.sizePerPage
			$scope.ratings = []
			$scope.biddersJobs = []
			$scope.profile = {}
			$scope.buttonText = ""

			$scope.hoveringOver = (value) ->
				$scope.overStar = value
				$scope.percent = 100 * (value / $scope.max)

			$scope.editJob = editJob = (index) ->
				$scope.editIndex = index 

			$scope.showRating = (index) ->
				$scope.currentRating = $scope.filteredJobs[index]
				prevEl = ($ $scope.ratingContainer)
				
				$scope.ratingContainer = "#rating-div-#{index}"
				curEl = ($ $scope.ratingContainer)
				if prevEl.is curEl
					prevEl.slideToggle()
				else
					prevEl.slideUp()
					curEl.slideDown()
				return	

			$scope.rateJob = (job) ->
				data = {
					mark: job.rate.mark
					comment: job.rate.comment
					jobId: job._id
					winner: job.winner
				}
				console.log data
				$http.post API.rateJob, data
				.success (data) ->
					angular.copy(data, job)
					getPage(0, "all")

			$scope.saveJob = saveJob = (index, jobId) ->
				jobId = $scope.filteredJobs[index]._id
				$scope.editIndex = $scope.sizePerPage
				$http.post API.updateJob.format("#{jobId}"), $scope.tempJob
				.success (data) ->
					angular.copy data, $scope.filteredJobs[index]
					logger.success "Job updated!"
					getPage 0, "all"
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
					for job in data.jobs?
						job.jobPhotos = job.jobPhotos.filter (img) -> img?.src?
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
				
			$scope.showMap = (index) ->
				prevEl = ($ $scope.mapContainer)
				job = $scope.filteredJobs[index];
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
					address: job.address.city.name + job.address.line1
					container: $scope.mapContainer
					done: ->
						$scope.currentMap.refresh()
						console.log 'iamdone'
					error: (err)->
						logger.error err 	
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

			$scope.showPics = showPics = (index) ->
				prevEl = ($ $scope.picsContainer)
				
				$scope.picsContainer = "#pics-div-#{index}"
				curEl = ($ $scope.picsContainer)
				if prevEl.is curEl

					prevEl.slideToggle()
				else
					prevEl.slideUp()
					curEl.slideDown()
				return	

			$scope.pickWinner = pickWinner = (bidderId, job) ->
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
				angular.copy $scope.filteredJobs[index], $scope.tempJob
				prevEl = ($ $scope.infoContainer)
				
				$scope.infoContainer = "#info-div-#{index}"
				curEl = ($ $scope.infoContainer)
				if prevEl.is curEl

					prevEl.slideToggle()
				else
					prevEl.slideUp()
					curEl.slideDown()
				return

			$scope.viewProfile = (profileId) ->
				if $scope.profile._id is undefined
					$scope.profile._id = profileId
					$scope.buttonText = " - hide profile"
					return
				else 
					$scope.buttonText = ""
					$scope.profile = {}
					return

			$scope.hideJob = (jobId) -> 
				$scope.biddersJob = {}
				$scope.profile = {}
				$scope.buttonText = ""

			$scope.viewJob = (jobId) ->
				if $scope.biddersJobs.length isnt 0
					for job in $scope.biddersJobs when job._id is jobId
						$scope.biddersJob = angular.copy job
				if $scope.biddersJob?._id is jobId
					$scope.dateFrom = moment($scope.biddersJob.dateFrom).format("DD/MM/YY")
					$scope.dateTo = moment($scope.biddersJob.dateTo).format("DD/MM/YY")
				else 
					$http.get API.findJob.format("#{jobId}")
					.success (data) ->
						logger.success "Job fetched!"
						$scope.biddersJob = angular.copy data[0]
						$scope.dateFrom = moment(data[0].dateFrom).format("DD/MM/YY")
						$scope.dateTo = moment(data[0].dateTo).format("DD/MM/YY")
						$scope.biddersJobs.push $scope.biddersJob
					.error (e) ->
						logger.error (e)	

			$scope.viewRatings = (bidderId, job) ->	
				if not $scope.tempBidder?
					for bidder in job.bidders when bidder._id is bidderId
						$scope.tempBidder = angular.copy bidder
					$scope.ratings = $scope.tempBidder.rating.jobs if $scope.tempBidder.rating.jobs?
				else
					$scope.tempBidder = null	
					$scope.ratings = []
					$scope.biddersJob = {}
					$scope.profile = {}
					$scope.buttonText = ""

			$scope.search = ->
				return
				# text = $scope.searchQuery
				# $scope.filteredMessages = $scope.messages.filter (msg) ->
				# 	msg.subject.indexOf(text) isnt -1 or msg.message.indexOf(text) isnt -1
				
			do activate = ->
				getJobsPaged = getPage $scope.currentPage
	]