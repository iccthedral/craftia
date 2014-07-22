define ["./module", "json!cities", "json!categories", "select2"], (module, cities, categories, select2) ->
	module.controller "RegisterCtrl", [
		"$scope"
		"$http"
		"$q"
		"$state"
		"cAPI"
		"common"
		"logger"
		($scope, $http, $q, $state, API, common, logger) ->
			$scope.userDetails = {}
			$scope.acceptedTOS = false
			$scope.images = [
				"img/quality.jpg"
				"img/master.jpg"
				"img/approved.jpg"
			]
			$scope.selection = "aa"
			$scope.availableCategories = Object.keys(categories)
				

			findCategory = (value) ->
				if $scope.categories?
					for cat in $scope.categories when cat is value
						return value

			$scope.getCities = (val) ->
				return cities
			
			$scope.register = ->
				if not $scope.acceptedTOS
					return

				curState = $state.current.name
				url = API.registerCraftsman
				if curState is "anon.register.customer"
					url = API.registerCustomer
				
				common.post url, $scope.userDetails
				.success (data) =>
					$scope.reppass = ""
					logger.success "You are now registered"
					logger.log data.msg
					$state.transitionTo "anon.login"
				.error (err) =>
					logger.error err

			
			 $scope.placeholders = {
			 		placeholders: "Select a category"
			 }
			 $scope.selectedCategory = ""

			do activate = ->
				common.activateController [], "RegisterCtrl"
	]