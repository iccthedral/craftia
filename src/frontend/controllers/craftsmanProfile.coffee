define [ "./module", "moment", "json!categories" ], (module, moment, categories) ->

	module.controller "CraftsmanProfileCtrl", [ 
		"$scope"
		"$http"
		"$upload"
		"appUser"
		"common"
		"config"
		"logger"
		"cAPI"
		
		($scope, $http, $upload, appUser, common, config, log, API) ->
			spinnerEv = config.events.ToggleSpinner

			$scope.editing = false
			$scope.ratings = appUser.rating.jobs
			$scope.jobs = []
			$scope.profile = {}
			$scope.buttonText = ""
			$scope.categories = appUser.categories
			$scope.availableCategories = Object.keys(categories)
			$scope.tempProfile = {}
			$scope.jobContainer = "#job-div-0"


			$scope.uploadPhoto = (files) ->
				common.broadcast spinnerEv, show:true
				$scope.upload = ($upload.upload {
					url: "user/uploadpicture"
					file: files[0]
				})
				.success (picurl) ->
					appUser.profilePic = picurl
				.then ->
					common.broadcast spinnerEv, show:false
			
			$scope.editProfile = ->
				$scope.editing = !$scope.editing
				$scope.tempProfile = angular.copy appUser

			$scope.updateProfile = ->
				$scope.editing = false
				$scope.categories = $scope.tempProfile.categories
				$http.post API.updateProfile, $scope.tempProfile
				.success ->
					log.success "Profile updated"
					appUser = angular.copy $scope.tempProfile
				.error (e) ->
					log.error e
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
				$scope.currentJob = {}
				$scope.profile = {}
				$scope.buttonText = ""

			$scope.viewJob = (jobId, index) ->
				prevEl = ($ $scope.jobContainer)
				
				$scope.jobContainer = "#job-div-#{index}"
				curEl = ($ $scope.jobContainer)
				if prevEl.is curEl
					prevEl.slideToggle()
				else
					prevEl.slideUp()
					curEl.slideDown()


				console.log $scope.ratings , "RATINGS"
				if $scope.jobs.length isnt 0
					for job in $scope.jobs when job._id is jobId
						$scope.currentJob = angular.copy job
				if $scope.currentJob?._id is jobId
					$scope.dateFrom = moment($scope.currentJob.dateFrom).format("DD/MM/YY")
					$scope.dateTo = moment($scope.currentJob.dateTo).format("DD/MM/YY")
				else 
					$http.get API.findJob.format("#{jobId}")
					.success (data) ->
						alert $scope.currentJob
						log.success "Job fetched!"
						debugger
						$scope.currentJob = angular.copy data[0]
						alert $scope.currentJob
						$scope.dateFrom = moment(data[0].dateFrom).format("DD/MM/YY")
						$scope.dateTo = moment(data[0].dateTo).format("DD/MM/YY")
						$scope.jobs.push $scope.currentJob
					.error (e) ->
						log.error (e)	
				console.log $scope.currentJob , "CURRENT JOB"
				console.log $scope.jobs?	"JOBS"
				return
			return	
	]