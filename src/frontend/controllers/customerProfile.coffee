define [ "./module" ], (module) ->

	module.controller "CustomerProfileCtrl", [ 
		"$scope"
		"$http"
		"$upload"
		"user"
		"common"
		"config"
		"logger"
		"cAPI"
		
		($scope, $http, $upload, user, common, config, log, API) ->
			spinnerEv = config.events.ToggleSpinner

			$scope.uploadPhoto = (files) ->
				common.broadcast spinnerEv, show:true
				$scope.upload = ($upload.upload {
					url: "user/uploadpicture"
					file: files[0]
				})
				.success (picurl) ->
					user.profilePic = picurl
				.then ->
					common.broadcast spinnerEv, show:false
			
			$scope.updateProfile = ->
				$http.post API.updateProfile
				.success ->
					log.success "Profile updated"
				.error (e) ->
					log.error e
	]

