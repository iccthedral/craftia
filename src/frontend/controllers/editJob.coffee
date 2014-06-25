define ["./module", "json!cities", "json!categories"], (module, cities, categories) ->

	module.controller "EditJobCtrl", [
		"$scope"
		"$state"
		"$http"
		"user"
		"logger"
		"common"
		"cAPI"
		($scope, $state, $http, user, log, common, API) ->
			jobId = $state.params.jobId
			$scope.title = "Update job"

			$scope.job = job = (user.createdJobs.filter (job) ->
				return job._id is jobId)[0]
			
			job.dateFrom = new Date JSON.parse(JSON.stringify(job.dateFrom))
			job.dateTo = new Date JSON.parse(JSON.stringify(job.dateTo))

			$scope.currentPhotoIndex = 0
			$scope.categories = Object.keys(categories)

			if job.category?
				jsonFile = categories[job.category]
				require [ "json!#{jsonFile}" ], (data) ->
					$scope.subcategories = data.subcategories.slice()
					$scope.subcategory = $scope.subcategories[0]
					$scope.$digest()

			$scope.getCities = ->
				return cities
			
			$scope.categoryChanged = (cat) ->
				jsonFile = categories[job.category]
				require [ "json!#{jsonFile}" ], (data) ->
					$scope.subcategories = data.subcategories.slice()
					$scope.$digest()

			$scope.setFocusOnPhoto = (index) ->
				if not job.jobPhotos[index].img?
					$scope.currentPhotoIndex = null
				else
					$scope.currentPhotoIndex = index

			$scope.update = ->
				$http.post (common.format API.updateJob, jobId), job
				.success (data) ->
					$.extend $scope.job, data
					log.success "Job updated!"
					$state.transitionTo "customer.jobs"
				.error (err) ->
					log.error err
					$state.transitionTo "customer"
	]