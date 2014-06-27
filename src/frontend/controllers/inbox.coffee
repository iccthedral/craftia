define [ "./module" ], (module) ->

	module.controller "InboxCtrl", [
		"$scope"
		"$http"
		"$state"

		"user"
		"cAPI"
		"dialog"
		"logger"
		"common"
		"config"
		
		($scope, $http, $state, user, API, dialog, log, common, config) ->

			state = "#{user.type.toLowerCase()}.messages"
			apiURL = API.receivedMessages
			page = ".received"

			allReceived = user.inbox.received
			allSent = user.inbox.sent

			$scope.totalLength = allReceived.length
			$scope.searchQuery = ""
			$scope.sizePerPage = 5
			$scope.selectedPage = 0
			$scope.currentPage = 0
			
			getPage = (pageIndex) ->
				common.broadcast config.events.ToggleSpinner, show:true
				$http.get apiURL.format("#{pageIndex}")
				.success (data) ->
					$scope.messages = data
					$scope.filteredMessages = data.slice()
					$state.transitionTo "#{state}#{page}"
				.then ->
					common.broadcast config.events.ToggleSpinner, show:false
			
			$scope.pageSelected = (page) ->
				getPage (page.page - 1)
			
			$scope.search = ->
				text = $scope.searchQuery
				$scope.filteredMessages = $scope.messages.filter (msg) ->
					msg.subject.indexOf(text) isnt -1 or msg.message.indexOf(text) isnt -1

			$scope.showInbox = ->
				console.log $scope.totalLength
				apiURL = API.receivedMessages
				page = ".received"
				$scope.totalLength = allReceived.length
				getPage 0

			$scope.showOutbox = ->
				apiURL = API.sentMessages
				page = ".sent"
				$scope.totalLength = allSent.length
				getPage 0
			
			$scope.newMessage = ->
				scope = {
					body: "msg body"
					sender: user.username
					receiver: ""
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
							log.success "Message sent!"
						.error (err) ->
							log.error err
						.then ->
							common.broadcast config.events.ToggleSpinner, show:false
						console.log "Send", scope

					onCancel: ->
						console.log "Cancel", scope
				}

			$scope.showInbox()
	]