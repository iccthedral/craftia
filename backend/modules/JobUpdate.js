(function() {
  var AUTHOR_NOTIF_FINISHED, AUTHOR_NOTIF_WINNING, INTERVAL, JobModel, Messaging, WINNER_NOTIF, async, jobUpdate, log, _;

  async = require("async");

  _ = require("underscore");

  JobModel = require("../models/Job");

  Messaging = require("./Messaging");

  log = console.log.bind(console);

  WINNER_NOTIF = _.template("Job <%- title %> the <a href=\"/job/<%- _id %>\">{0}</> finished, and you are the winner.");

  AUTHOR_NOTIF_WINNING = _.template("Ovde ide poruka za autora ako job ima winnera");

  AUTHOR_NOTIF_FINISHED = _.template("Ovde ide poruka za autora ako se zavrsio posao");

  INTERVAL = 1000 * 60 * 5;

  log("Running job update thread at interval of " + INTERVAL + " ms");

  (jobUpdate = function() {
    return JobModel.find({}, function(err, results) {
      return async.map(results, function(job, clb) {
        var expiredOrClosed, notifAuthor, notifWinner, _ref;
        expiredOrClosed = (Date.now() > d.getTime()) || job.status === "closed";
        log("Job expired or closed?", expiredOrClosed, job.status, d);
        if (((_ref = job.status) === "open" || _ref === "finished") || !expiredOrClosed) {
          return clb(null, null);
        }
        job.status = "finished";
        notifAuthor = {
          receiver: job.author.username,
          body: job.winner != null ? AUTHOR_NOTIF_WINNING(job) : AUTHOR_NOTIF_FINISHED(job)
        };
        if (job.winner != null) {
          notifWinner = {
            receiver: job.winner.username,
            body: WINNER_NOTIF(job)
          };
          Messaging.sendNotification(notifWinner);
        }
        Messaging.sendNotification(notifAuthor);
        return clb(null, job);
      }, function(err, results) {
        log("Jobs updating finished");
        return setTimeout(jobUpdate, INTERVAL);
      });
    });
  })();

}).call(this);
