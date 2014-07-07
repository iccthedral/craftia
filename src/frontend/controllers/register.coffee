define ["./module", "json!cities", "json!categories"], (module, cities, categories) ->
	module.controller "RegisterCtrl", [
		"$scope"
		"$http"
		"$q"
		"common"
		"logger"
		($scope, $http, $q, common, logger) ->
			$scope.userDetails = {}
			$scope.acceptedTOS = false
			$scope.images = [
				"img/quality.jpg"
				"img/master.jpg"
				"img/approved.jpg"
			]
			$scope.select2Options =
				'multiple': true
				'simple_tags': true
				'tags': []

			$scope.categories = categories

			# ($.get v for k, v of $scope.categories)
			$scope.allTags = $scope.select2Options.tags
			
			$scope.fetchTags = ->
				return $q.all ($http.get "shared/resources/categories/#{v}.json" for k, v of $scope.categories)
				.then (data) =>
					console.log data
					data.forEach (cat) =>
						catName = cat.data.category
						tags = cat.data.subcategories.map (subcat) ->
							return "#{catName} > #{subcat}"
						$scope.allTags = $scope.allTags.concat tags
					console.log $scope.allTags
			$scope.getCities = (val) ->
				return cities
			
			$scope.register = ->
				if not $scope.acceptedTOS
					$scope.log.error "Please check whether you agree with the terms & conditions"
					return

				curState = $scope.state.current.name
				url = $scope.API.registerCraftsman
				if curState is "anon.register.customer"
					url = $scope.API.registerCustomer
				
				$scope.http.post url, $scope.userDetails
				.success =>
					$scope.log.success "You are now registered"
					$scope.state.transitionTo "anon.login"
				.error (err) =>
					$scope.log.error err

			do activate = ->
				common.activateController [$scope.fetchTags()], "RegisterCtrl"
	]