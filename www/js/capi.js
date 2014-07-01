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
    craftsmen: "/user/craftsmen/{0}",
    getPagedOpenJobs: "/job/list/{0}",
    getMyJobs: "/user/getMyJobs/{0}/{1}",
    bidOnJob: "job/{0}/bid",
    pickWinner: "job/{0}/pickawinner/{1}",
    getNotifications: "/user/getNotifications/{0}"
  });
});
