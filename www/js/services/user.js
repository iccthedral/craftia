define(["./module"], function(module) {
  return module.service("user", [
    "$rootScope", "$http", "$state", "logger", "cAPI", function($rootScope, $http, $state, logger, API) {
      var out;
      out = {
        username: null,
        notifications: ""
      };
      Object.defineProperty(out, "isLoggedIn", {
        get: function() {
          return out.username != null;
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
        return $http.get(API.logout).success(function(data) {
          out = {};
          return $state.transitionTo("anon");
        }).error(function(err) {
          return logger.error(err);
        });
      };
      $rootScope.user = out;
      return out;
    }
  ]);
});
