define ["./module"], (module) ->

	module.factory "dialog", [
		"$modal"
		($modal) ->

			ModalController = [
				"$scope"
				"$modalInstance"
				"options"
				($scope, $modalInstance, {template, message, title, okText, cancelText, onOk, onCancel, scope}) ->
					$scope.scope = scope
					$scope.title = title or "Title"
					$scope.message = message or ""
					$scope.okText = okText or "OK"
					$scope.cancelText = cancelText or "Cancel"
					$scope.template = template or "basic"

					$scope.ok = ->
						$modalInstance.close "ok"
						console.log $scope.msgContent, $scope.emailTo
						onOk?()

					$scope.cancel = ->
						$modalInstance.dismiss "cancel"
						onCancel?()
			]

			return {
				confirmationDialog: ({title, message, okText, cancelText, onOk, onCancel, template, scope}) ->
					modalOptions =
						templateUrl: "shared/templates/dialogs/basic.html"
						controller: ModalController
						keyboard: true
						resolve: options: ->
							return {
								title
								message
								scope
								okText
								template
								cancelText
								onOk: onOk
								onCancel: onCancel
							}

					return $modal.open(modalOptions).result

				deleteDialog: (itemName) ->
					title = "Confirm Delete"
					itemName or= "item"
					message = "Delete #{itemName}?"
					return confirmationDialog {title, message}
			}
	]