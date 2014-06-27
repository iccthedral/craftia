define(["app"], function(app) {
  return app.constant("cAPI", {
    login: "/login",
    logout: "/logout",
    tryLogin: "/isAuthenticated",
    registerCraftsman: "/user/registerCraftsman",
    registerCustomer: "/user/registerCustomer",
    createJob: "/job/new",
    updateJob: "/job/{0}/update",
    sendMessage: "/inbox/sendMessage",
    receivedMessages: "/inbox/received/{0}",
    sentMessages: "/inbox/sent/{0}",
    craftsmen: "/user/craftsmen",
    getPagedOpenJobs: "/job/list/{0}"
  });
});
