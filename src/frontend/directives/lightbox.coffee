define ["./module"], (module) ->

	module.directive "lightbox", [
		"$modal"
		"$log"
		($modal, $log) ->
			ModalInstanceCtrl = ($scope, $modalInstance, images, selectedImageIndex) ->
				$scope.closeModal = ->
					$modalInstance.close "hehe"

				$scope.totalImages = images.length
				$scope.selectedImageIndex = selectedImageIndex + 1
				$scope.selectedImage = images[selectedImageIndex]

				$scope.source = (img) ->
					return img.img

				$scope.hasPrev = ->
					return $scope.selectedImageIndex isnt 0

				$scope.hasNext = ->
					return $scope.selectedImageIndex < images.length - 1

				$scope.next = ->
					$scope.selectedImageIndex += 1
					$scope.selectedImage = images[$scope.selectedImageIndex];

				$scope.prev = ->
					$scope.selectedImageIndex -= 1
					$scope.selectedImage = images[$scope.selectedImageIndex]

			return out = {
				restrict: "E"
				templateUrl: "shared/templates/layout/lightbox.html"
				scope:
					images: "="
				replace: true
				controller: ($rootScope, $scope) ->
					$scope.selectedImageIndex = 0
					$scope.tileWidth = 150
					$scope.tileHeight = 150
					$scope.modalInstance = null
					$scope.open = ->
						$scope.modalInstance = $modal.open {
							templateUrl: "shared/templates/layout/album.html"
							controller: ModalInstanceCtrl
							resolve:
								images: -> $scope.images
								selectedImageIndex: ->
									return $scope.selectedImageIndex
						}

					$scope.displayImage =  (img) ->
						$scope.selectedImageIndex = $scope.images.indexOf img
						$scope.open()
			}
	]