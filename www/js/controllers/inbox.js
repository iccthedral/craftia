define(["./module"], function(module) {
  return module.controller("InboxCtrl", [
    "$scope", "$http", "$state", "appUser", "cAPI", "dialog", "logger", "common", "config", function($scope, $http, $state, appUser, API, dialog, log, common, config) {
      var allReceived, allSent, apiURL, getPage, page, state;
      state = "" + (appUser.type.toLowerCase()) + ".messages";
      apiURL = API.receivedMessages;
      page = ".received";
      allReceived = appUser.inbox.received;
      allSent = appUser.inbox.sent;
      $scope.totalLength = allReceived.length;
      $scope.searchQuery = "";
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      getPage = function(pageIndex) {
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(apiURL.format("" + pageIndex)).success(function(data) {
          $scope.messages = data;
          $scope.filteredMessages = data.slice();
          return $state.transitionTo("" + state + page);
        })["finally"](function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.search = function() {
        var text;
        text = $scope.searchQuery;
        return $scope.filteredMessages = $scope.messages.filter(function(msg) {
          return msg.subject.indexOf(text) !== -1 || msg.message.indexOf(text) !== -1;
        });
      };
      $scope.showInbox = function() {
        console.log($scope.totalLength);
        apiURL = API.receivedMessages;
        page = ".received";
        $scope.totalLength = allReceived.length;
        return getPage(0);
      };
      $scope.showOutbox = function() {
        apiURL = API.sentMessages;
        page = ".sent";
        $scope.totalLength = allSent.length;
        return getPage(0);
      };
      $scope.newMessage = function(receiver, index) {
        var msg, scope;
        msg = $scope.filteredMessages[index];
        scope = {
          body: "msg body",
          subject: "RE: " + msg.subject,
          receiver: receiver
        };
        return dialog.confirmationDialog({
          title: "Send message",
          template: "sendMessage",
          okText: "Send",
          scope: scope,
          onOk: function() {
            $http.post(API.sendMessage, scope).success(function() {
              common.broadcast(config.events.ToggleSpinner, {
                show: true
              });
              return log.success("Message sent!");
            }).error(function(err) {
              return log.error(err);
            })["finally"](function() {
              return common.broadcast(config.events.ToggleSpinner, {
                show: false
              });
            });
            return console.log("Send", scope);
          },
          onCancel: function() {
            return console.log("Cancel", scope);
          }
        });
      };
      return $scope.showInbox();
    }
  ]);
});
