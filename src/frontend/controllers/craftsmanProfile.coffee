define [ "./module" ], (module) ->

	module.controller "CraftsmanProfileCtrl", [ 
		"$scope"
		"$http"
		"$upload"
		"appUser"
		"common"
		"config"
		"logger"
		"cAPI"
		
		($scope, $http, $upload, appUser, common, config, log, API) ->
			spinnerEv = config.events.ToggleSpinner

			$scope.editing = false

			$scope.uploadPhoto = (files) ->
				common.broadcast spinnerEv, show:true
				$scope.upload = ($upload.upload {
					url: "user/uploadpicture"
					file: files[0]
				})
				.success (picurl) ->
					appUser.profilePic = picurl
				.then ->
					common.broadcast spinnerEv, show:false
			
			$scope.editProfile = ->
				$scope.editing = true

			$scope.updateProfile = ->
				$scope.editing = false
				$http.post API.updateProfile, appUser
				.success ->
					log.success "Profile updated"
				.error (e) ->
					log.error e
	]