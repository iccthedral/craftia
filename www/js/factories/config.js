define(["factories/module"], function(module) {
  return module.provider("config", function() {
    this.config = {
      events: {
        ActivateController: "ActivateController",
        ToggleSpinner: "ToggleSpinner"
      },
      toastr: {
        timeOut: 2000,
        positionClass: "toast-bottom-right"
      },
      errorPrefix: "[CRAFTIA ERROR]",
      showErrors: true
    };
    this.$get = function() {
      return this.config;
    };
    return this;
  });
});
