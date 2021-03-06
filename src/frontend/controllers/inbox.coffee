define [ "./module" ], (module) ->

	module.controller "InboxCtrl", [
		"$scope"
		"$http"
		"$state"
		"appUser"
		"cAPI"
		"dialog"
		"logger"
		"common"
		"config"
		
		($scope, $http, $state, appUser, API, dialog, log, common, config) ->

			state = "#{appUser.type.toLowerCase()}.messages"
			apiURL = API.receivedMessages
			page = ".received"
			
			allReceived = appUser.inbox.received
			allSent = appUser.inbox.sent

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
				.finally ->
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
			
			$scope.newMessage = (receiver, index) ->
				msg = $scope.filteredMessages[index]
				scope = {
					body: "msg body"
					subject: "RE: "+ msg.subject 
					receiver: receiver
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
						.finally ->
							common.broadcast config.events.ToggleSpinner, show:false
						
					onCancel: ->
				}

			$scope.showInbox()
	]