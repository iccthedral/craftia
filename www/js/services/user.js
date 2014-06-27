define(["./module"], function(module) {
  return module.service("user", [
    "$rootScope", "$http", "$state", "logger", "cAPI", function($rootScope, $http, $state, logger, API) {
      var out;
      out = {
        username: null,
        notifications: "",
        type: "anon"
      };
      Object.defineProperty(out, "isLoggedIn", {
        get: function() {
          return out.username != null;
        }
      });
      Object.defineProperty(out, "getType", {
        get: function() {
          var _ref;
          return (_ref = out.type) != null ? _ref.toLowerCase() : void 0;
        }
      });
      out.load = function(data) {
        var k, v;
        for (k in data) {
          v = data[k];
          out[k] = v;
        }
        return console.debug(data);
      };
      out.logout = function() {
        return $http.get(API.logout).success((function(_this) {
          return function(data) {
            out = {
              type: "anon"
            };
            return $state.transitionTo("index");
          };
        })(this)).error(function(err) {
          return logger.error(err);
        });
      };
      $rootScope.user = window.user = out;
      return out;
    }
  ]);
});
