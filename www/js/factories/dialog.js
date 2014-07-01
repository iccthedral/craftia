define(["./module"], function(module) {
  return module.factory("dialog", [
    "$modal", function($modal) {
      var ModalController;
      ModalController = [
        "$scope", "$modalInstance", "options", function($scope, $modalInstance, _arg) {
          var cancelText, message, okText, onCancel, onOk, scope, template, title;
          template = _arg.template, message = _arg.message, title = _arg.title, okText = _arg.okText, cancelText = _arg.cancelText, onOk = _arg.onOk, onCancel = _arg.onCancel, scope = _arg.scope;
          $scope.scope = scope;
          $scope.title = title || "Title";
          $scope.message = message || "";
          $scope.okText = okText || "OK";
          $scope.cancelText = cancelText || "Cancel";
          $scope.template = template || "basic";
          $scope.ok = function() {
            $modalInstance.close("ok");
            console.log($scope.msgContent, $scope.emailTo);
            return typeof onOk === "function" ? onOk() : void 0;
          };
          return $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
            return typeof onCancel === "function" ? onCancel() : void 0;
          };
        }
      ];
      return {
        confirmationDialog: function(_arg) {
          var cancelText, message, modalOptions, okText, onCancel, onOk, scope, template, title;
          title = _arg.title, message = _arg.message, okText = _arg.okText, cancelText = _arg.cancelText, onOk = _arg.onOk, onCancel = _arg.onCancel, template = _arg.template, scope = _arg.scope;
          modalOptions = {
            templateUrl: "shared/templates/dialogs/basic.html",
            controller: ModalController,
            keyboard: true,
            resolve: {
              options: function() {
                return {
                  title: title,
                  message: message,
                  scope: scope,
                  okText: okText,
                  template: template,
                  cancelText: cancelText,
                  onOk: onOk,
                  onCancel: onCancel
                };
              }
            }
          };
          return $modal.open(modalOptions).result;
        },
        deleteDialog: function(itemName) {
          var message, title;
          title = "Confirm Delete";
          itemName || (itemName = "item");
          message = "Delete " + itemName + "?";
          return confirmationDialog({
            title: title,
            message: message
          });
        }
      };
    }
  ]);
});
