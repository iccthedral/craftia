define(["./module"], function(module) {
  return module.service("appUser", [
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
        var k, v, _results;
        _results = [];
        for (k in data) {
          v = data[k];
          _results.push(out[k] = v);
        }
        return _results;
      };
      out.logout = function() {
        return $http.get(API.logout).success((function(_this) {
          return function(data) {
            return out = {
              type: "anon"
            };
          };
        })(this)).error(function(err) {
          return logger.error(err);
        })["finally"](function() {
          return $state.go("anon");
        });
      };
      $rootScope.appUser = out;
      return out;
    }
  ]);
});
