define(["factories/module"], function(module) {
  return module.factory("config", function() {
    var config;
    config = {
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
    return config;
  });
});
