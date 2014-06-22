var AUTHOR_NOTIF_FINISHED, AUTHOR_NOTIF_WINNING, INTERVAL, JobModel, Messaging, WINNER_NOTIF, async, db, jobUpdate, log, _;

async = require("async");

db = require("../../config/Database");

_ = require("underscore");

JobModel = require("../models/Job");

Messaging = require("./Messaging");

log = console.log.bind(console);

WINNER_NOTIF = _.template("Job <a href=\"/job/<%- _id %>\"> <%- title %> </a> finished, and you are the winner.");

AUTHOR_NOTIF_WINNING = _.template("  Ovo je title posla: <%- title %>\nOvde ide poruka za autora ako job ima winnera");

AUTHOR_NOTIF_FINISHED = _.template("Ovde ide poruka za autora ako se zavrsio posao");

INTERVAL = (1000 * 60 * 5) / 10;

log("Running job update thread at interval of " + INTERVAL + " ms");

(jobUpdate = function() {
  return JobModel.find({}, function(err, results) {
    return async.map(results, function(job, clb) {
      var d, expiredOrClosed, notifAuthor, notifWinner;
      d = job.dateTo;
      expiredOrClosed = Date.now() > d.getTime();
      log("Job expired or closed?", expiredOrClosed, job.status, job.winner != null);
      if (!expiredOrClosed || job.status === "finished") {
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
      job.save(function(err, cnt) {
        if (err != null) {
          clb(err, cnt);
        }
        return log("Job updated!");
      });
      return clb(null, job);
    }, function(err, results) {
      log("Jobs updating finished");
      return setTimeout(jobUpdate, INTERVAL);
    });
  });
})();
