define [ "./module" ], (module) ->

	module.controller "NotificationsCtrl", [
		"$scope"
		"$http"
		"$state"
		"user"
		"cAPI"
		"common"
		"config"
		"logger"
		($scope, $http, $state, user, API, common, config, logger) ->

			$scope.searchQuery = ""
			$scope.sizePerPage = 5
			$scope.selectedPage = 0
			$scope.currentPage = 0
			$scope.notifications = []
			$scope.filteredNotifications = []
			state = "#{user.type.toLowerCase()}"
			page = ".notifications"

			
			getPage = (pageIndex) ->
				common.broadcast config.events.ToggleSpinner, show:true
				$http.get API.getNotifications.format("#{pageIndex}")
				.success (data) ->
					$scope.notifications = data.notifications
					$state.transitionTo "#{state}#{page}"
				.error (err) ->
					logger.error err
				.finally ->
					common.broadcast config.events.ToggleSpinner, show:false

			$scope.pageSelected = (page) ->
				getPage (page.page - 1)
			
			$scope.search = ->
				text = $scope.searchQuery
				$scope.filteredNotifications = $scope.notifications.filter (msg) ->
					msg.type.indexOf(text) isnt -1 or msg.message.indexOf(text) isnt -1	

			getPage 0			
	]