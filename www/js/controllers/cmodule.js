var __slice = [].slice;

define(["angular"], function(ng) {
  var modules;
  modules = ng.module("app.customControllers", []);
  return function() {
    var Ctrl, deps, instance, name, otherDeps;
    Ctrl = arguments[0], otherDeps = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    deps = ["$scope", "cAPI", "logger"].concat(otherDeps);
    name = Ctrl.name;
    instance = new Ctrl;
    deps.push(function() {
      var $scope, cAPI, dep, k, logger, other, out, v, _i, _len;
      $scope = arguments[0], cAPI = arguments[1], logger = arguments[2], other = 4 <= arguments.length ? __slice.call(arguments, 3) : [];
      out = new Object({
        API: cAPI,
        log: logger
      });
      for (_i = 0, _len = otherDeps.length; _i < _len; _i++) {
        dep = otherDeps[_i];
        name = dep;
        if (dep[0] === "$") {
          name = dep.substr(1);
        }
        out[name] = other.shift();
      }
      for (k in instance) {
        v = instance[k];
        out[k] = v;
        if (typeof out[k] === "funciton") {
          out[k].bind(out);
        }
      }
      for (k in out) {
        v = out[k];
        $scope[k] = v;
      }
      return out;
    });
    modules.controller(name, deps);
    return instance;
  };
});
