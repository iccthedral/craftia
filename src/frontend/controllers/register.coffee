define ["./module", "json!cities", "json!categories"], (module, cities, categories) ->
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

			$scope.select2Options =
				'multiple': true
				'simple_tags': true
				'tags': []

			$scope.categories = categories

			$scope.multi = 
				multiple: true
				query: (query) -> 
					query.callback({ results: categories })

			$scope.allTags = $scope.select2Options.tags

			do $scope.fetchTags = ->
				return $q.all ($http.get "shared/resources/categories/#{v}.json" for k, v of $scope.categories)
				.then (data) =>
					data.forEach (cat) =>
						catName = cat.data.category
						tags = cat.data.subcategories.map (subcat) ->
							return "#{catName} > #{subcat}"
						$scope.allTags = $scope.allTags.concat tags
						
			$scope.getCities = (val) ->
				return cities
			
			$scope.register = ->
				if not $scope.acceptedTOS
					logger.error "Please check whether you agree with the terms & conditions"
					return

				curState = $state.current.name
				url = API.registerCraftsman
				if curState is "anon.register.customer"
					url = API.registerCustomer
				
				common.post url, $scope.userDetails
				.success (data) =>
					logger.success "You are now registered"
					logger.log data.msg
					$state.transitionTo "anon.login"
				.error (err) =>
					logger.error err

			$("input").bind "keyup change", -> 
				$t = $(this)
				$par = $t.parent()
				min = $t.attr("data-valid-min")
				match = $t.attr("data-valid-match")
				pattern = $t.attr("pattern")
           
				if (typeof match!="undefined")
					if ($t.val()!=$('#'+match).val()) 
						$par.removeClass('has-success').addClass('has-error')
					else 
						$par.removeClass('has-error').addClass('has-success')

				else if (!this.checkValidity()) 
					$par.removeClass('has-success').addClass('has-error')
				else 
					$par.removeClass('has-error').addClass('has-success')

				if ($par.hasClass("has-success")) 
					$par.find('.form-control-feedback').removeClass('fade')
				else 
					$par.find('.form-control-feedback').addClass('fade')

			do activate = ->
				common.activateController [$scope.fetchTags()], "RegisterCtrl"
	]