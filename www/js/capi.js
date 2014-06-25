define(["app"], function(app) {
  return app.constant("cAPI", {
    login: "/login",
    logout: "/logout",
    tryLogin: "/isAuthenticated",
    registerCraftsman: "/user/registerCraftsman",
    registerCustomer: "/user/registerCustomer",
    createJob: "/job/new"
  });
});
