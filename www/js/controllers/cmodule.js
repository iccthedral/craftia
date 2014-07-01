var __slice = [].slice;

define(["angular"], function(ng) {
  var modules;
  modules = ng.module("app.customControllers", []);
  return function() {
    var Ctrl, controller, deps, name, otherDeps;
    Ctrl = arguments[0], otherDeps = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    deps = ["$scope", "cAPI", "logger", "$rootScope", "$state", "$http"].concat(otherDeps);
    name = Ctrl.name;
    deps.push(function() {
      var $http, $rootScope, $scope, $state, cAPI, dep, instance, k, logger, other, v, _i, _len, _ref;
      $scope = arguments[0], cAPI = arguments[1], logger = arguments[2], $rootScope = arguments[3], $state = arguments[4], $http = arguments[5], other = 7 <= arguments.length ? __slice.call(arguments, 6) : [];
      instance = new Ctrl;
      instance = $.extend(instance, {
        API: cAPI,
        state: $state,
        log: logger,
        http: $http,
        root: $rootScope,
        name: name
      });
      for (_i = 0, _len = otherDeps.length; _i < _len; _i++) {
        dep = otherDeps[_i];
        name = dep;
        if (dep[0] === "$") {
          name = dep.substr(1);
        }
        instance[name] = other.shift();
      }
      for (k in instance) {
        v = instance[k];
        if (typeof v === "funciton") {
          instance[k].bind(instance);
        }
      }
      _ref = Ctrl.prototype;
      for (k in _ref) {
        v = _ref[k];
        instance[k] = v;
        if (typeof v === "function") {
          instance[k].bind(instance);
        }
      }
      for (k in instance) {
        v = instance[k];
        $scope[k] = v;
      }
      $scope["scope"] = $scope;
      instance["scope"] = $scope;
      return instance;
    });
    controller = modules.controller(name, deps);
    return controller;
  };
});
