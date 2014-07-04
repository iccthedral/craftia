define ["./module"], (module) ->
	module.directive "ccUploadPhotos", [
		"$rootScope"
		"$window"
		"$timeout"
		"logger"
		($rootScope, $window, $timeout, logger) ->
			addHandler = (obj, evt, handler) ->
				if obj.addEventListenr
					obj.addEventListenr evt, handler, false
				else if obj.attachEvent
					obj.attachEvent "on#{evt}", handler
				else 
					obj["on#{evt}"] = handler

			dndDisabled = false

			directive =
				restrict: "AE"
				scope: 
					num: "="
					onUpload: "&upload"
					photos: "="	

				templateUrl: "shared/templates/forms/uploadPhotos.html"
				compile: (element, attrs, transclude) ->
					acceptedTypes = ["image/png", "image/jpeg", "image/jpg"]
					pre = (scope, element, attrs) ->
						scope.photos or= []
						for i in [0...scope.num]
							scope.photos.push {
								src: null
								description: ""
							}
						scope.inFocus = false

						if not $window.FileReader?
							scope.dndDisabled = true
						else
							scope.dndDisabled = false
						dndDisabled = scope.dndDisabled

					post = (scope, element, attrs) ->

						scope.onClick = (photo) ->
							return if not photo?.src?
							scope.focused = photo

						cancel = (e) ->
							e.preventDefault?()
							return false

						setupClassic = ->
							return false

						setupDnD = ->
							parent = $(element).find(".photo-uploader")
							holders = parent.find(".photo-holder")
							previewFile = (holder, file) ->
								return if file.type not in acceptedTypes
								reader = new FileReader()
								holder = $(holder)
								reader.onload = (event) ->
									rawImg = event.target.result
									if ((rawImg.length - 814) / 1.37) > 128*1024
										return alert("Images greater than 128 kilobytes are not allowed")
									scope.onUpload?({file, rawImg})
									photo = scope.photos[holder.attr("photo-id")]
									holder.find("img").attr("src", rawImg)
									photo.src = rawImg
									scope.focused = photo
									scope.$apply ->
										scope.inFocus = true
								reader.readAsDataURL(file)
							
							readFile = (holder, files) ->
								formData = new FormData()
								for file in files
									name = file.name
									size = file.size
									formData.append "file", file
									previewFile holder, file

							holders.each (k, v) ->
								droppable = $(v)

								droppable.on "dragleave", (ev) ->
									cancel(ev)
									$(@).removeClass "photo-holder-hover"

								droppable.on "dragend", (ev) ->
									cancel(ev)
									$(@).removeClass "photo-holder-hover"

								droppable.on "dragover", (ev) ->
									cancel(ev)
									$(@).addClass "photo-holder-hover", 500
								
								addHandler v, "drop", (ev) ->
									dt = ev.dataTransfer
									cancel(ev)
									readFile(@, dt.files)
									$(@).removeClass "photo-holder-hover"

						if dndDisabled
							logger.error "HTML5 Drag and Drop isnt supported"
							setupClassic()
						else 
							$timeout setupDnD, 0

					return {pre, post}
	]
