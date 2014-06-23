define ["controllers/module"], (module) ->

	module.controller "shellCtrl", ["$scope", "common", ($scope, common) ->
		$scope.busyMessage = "Loading..."
		$scope.isBusy = false
		$scope.spinnerOptions =
			radius: 40
			lines: 7
			length: 0
			width: 30
			speed: 1.7
			corners: 1.0
			trail: 100
			color: "#F58A00"
	]