var __slice = [].slice;

define(["angular"], function(ng) {
  var modules;
  modules = ng.module("app.customControllers", []);
  return function() {
    var Ctrl, deps, name;
    Ctrl = arguments[0], deps = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    name = Ctrl.name;
    console.log.apply(console, [name].concat(__slice.call(deps)));
    return modules.controller(name, __slice.call(deps).concat([function() {
        var $scope, k, other, out, v, _ref;
        $scope = arguments[0], other = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        out = new Object;
        Ctrl.call(out);
        _ref = new Ctrl;
        for (k in _ref) {
          v = _ref[k];
          console.log(k, v);
          out[k] = v;
          if (typeof out[k] === "funciton") {
            out[k].bind(out);
          }
        }
        for (k in out) {
          v = out[k];
          console.log(k, v);
          $scope[k] = v;
        }
        return out;
      }]));
  };
});
