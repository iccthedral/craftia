(function() {
  var AUTHOR_NOTIF_FINISHED, AUTHOR_NOTIF_WINNING, JobModel, Messaging, WINNER_NOTIF, async, jobUpdateThread, _;

  async = require("async");

  _ = require("underscore");

  JobModel = require("../models/Job");

  Messaging = require("./Messaging");

  WINNER_NOTIF = _.template("Job <%- title %> the <a href=\"/job/<%- _id %>\">{0}</> finished, and you are the winner.\n");

  AUTHOR_NOTIF_WINNING = _.template("");

  AUTHOR_NOTIF_FINISHED = _.template("<%- %>");

  jobUpdateThread = function() {
    var INTERVAL, jobUpdate;
    INTERVAL = 1000 * 60 * 5;
    console.log("Running job update thread");
    jobUpdate = function() {
      return JobModel.find({}, function(err, results) {
        return async.map(results, function(job, clb) {
          var d, notifAuthor, notifWinner, _ref;
          d = job.dateTo;
          console.log("Date to", d);
          if ((_ref = job.status) === "open" || _ref === "finished") {
            return clb(null, null);
          }
          if (Date.now() > d.getTime()) {
            job.status = "finished";
            notifAuthor = {
              receiver: job.author.username,
              body: job.winner != null ? AUTHOR_NOTIF_WINNING.format(job) : AUTHOR_NOTIF_FINISHED.format(job)
            };
            if (job.winner != null) {
              notifWinner = {
                receiver: job.winner.username,
                body: WINNER_NOTIF.format(job)
              };
              Messaging.sendNotification(notifWinner);
            }
            Messaging.sendNotification(notifAuthor);
            return clb(null, job);
          }
        }, function(err, results) {
          return console.log("Job updating finished");
        });
      });
    };
    return setInterval(jobUpdate, INTERVAL);
  };

  module.exports = jobUpdateThread;

}).call(this);
