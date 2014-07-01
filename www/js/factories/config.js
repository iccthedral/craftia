define(["factories/module"], function(module) {
  return module.provider("config", function() {
    this.config = {
      events: {
        ToggleSpinner: "ToggleSpinner"
      },
      toastr: {
        positionClass: "toast-bottom-right",
        "fadeIn": 300,
        "fadeOut": 1000,
        "timeOut": 3000,
        "extendedTimeOut": 0
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
