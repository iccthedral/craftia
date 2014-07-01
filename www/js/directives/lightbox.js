define(["./module"], function(module) {
  return module.directive("lightbox", [
    "$modal", "$log", function($modal, $log) {
      var ModalInstanceCtrl, out;
      ModalInstanceCtrl = function($scope, $modalInstance, images, selectedImageIndex) {
        $scope.closeModal = function() {
          return $modalInstance.close("hehe");
        };
        $scope.totalImages = images.length;
        $scope.selectedImageIndex = selectedImageIndex + 1;
        $scope.selectedImage = images[selectedImageIndex];
        $scope.source = function(img) {
          return img.img;
        };
        $scope.hasPrev = function() {
          return $scope.selectedImageIndex !== 0;
        };
        $scope.hasNext = function() {
          return $scope.selectedImageIndex < images.length - 1;
        };
        $scope.next = function() {
          $scope.selectedImageIndex += 1;
          return $scope.selectedImage = images[$scope.selectedImageIndex];
        };
        return $scope.prev = function() {
          $scope.selectedImageIndex -= 1;
          return $scope.selectedImage = images[$scope.selectedImageIndex];
        };
      };
      return out = {
        restrict: "E",
        templateUrl: "shared/templates/layout/lightbox.html",
        scope: {
          images: "="
        },
        replace: true,
        controller: function($rootScope, $scope) {
          $scope.selectedImageIndex = 0;
          $scope.tileWidth = 150;
          $scope.tileHeight = 150;
          $scope.modalInstance = null;
          $scope.open = function() {
            return $scope.modalInstance = $modal.open({
              templateUrl: "shared/templates/layout/album.html",
              controller: ModalInstanceCtrl,
              resolve: {
                images: function() {
                  return $scope.images;
                },
                selectedImageIndex: function() {
                  return $scope.selectedImageIndex;
                }
              }
            });
          };
          return $scope.displayImage = function(img) {
            $scope.selectedImageIndex = $scope.images.indexOf(img);
            return $scope.open();
          };
        }
      };
    }
  ]);
});
