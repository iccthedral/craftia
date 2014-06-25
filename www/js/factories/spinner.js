define(["factories/module"], function(module) {
  return module.factory("spinner", [
    "common", "config", function(common, config) {
      var out;
      out = {
        toggle: function(show) {
          return common.broadcast(config.events.ToggleSpinner, {
            show: show
          });
        },
        hide: function() {
          return out.toggle(false);
        },
        show: function() {
          return out.toggle(true);
        }
      };
      return out;
    }
  ]);
});
