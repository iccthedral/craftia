define ["./module", "json!cities", "json!categories"], (module, cities, categories) ->

	module.controller "CreateJobCtrl", [
		"$scope"
		"$state"
		"$http"
		"user"
		"logger"
		"cAPI"
		($scope, $state, $http, user, log, API) ->
			$scope.title1 = "Enter job details"
			$scope.title2 = "Upload job photos"

			$scope.firstStep = true
			$scope.secondStep = false

			job = 
				dateFrom: new Date
				dateTo: new Date

			job.jobPhotos = [
				{
					img: null
					description: ""
				}
				{
					img: null
					description: ""
				}
				{
					img: null
					description: ""
				}
				{
					img: null
					description: ""
				}
			]

			$scope.job = job
			$scope.currentPhotoIndex = 0
			$scope.subcategories = []
			$scope.categories = Object.keys(categories)
			
			$scope.getCities = ->
				return cities
			
			$scope.categoryChanged = (cat) ->
				jsonFile = categories[job.category]
				console.log jsonFile, job
				require [ "json!#{jsonFile}" ], (data) ->
					$scope.subcategories = data.subcategories.slice()
					$scope.$digest()

			$scope.setFocusOnPhoto = (index) ->
				if not job.jobPhotos[index].img?
					$scope.currentPhotoIndex = null
				else
					$scope.currentPhotoIndex = index

			$scope.create = ->
				$http.post API.createJob, job
				.success (data) ->
					log.success "Job created!"
					user.createdJobs or= []
					user.createdJobs.push data
					console.log user, user.createJobs
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

			$scope.storeJobPhoto = (img, index) ->
				$scope.currentPhotoIndex = index
				job.jobPhotos[index].img = img.src;
	]