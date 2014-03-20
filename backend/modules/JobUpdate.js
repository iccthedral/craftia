(function() {
  var JOB_FINISHED_MESSAGE, JobModel, Messaging, async;

  JobModel = require("../models/Job");

  async = require("async");

  Messaging = require("Messaging");

  JOB_FINISHED_MESSAGE = "Job with the <a href=\"id:{0}\">{0}</> finished.\nWould you like to give Damir a kiss?";

  module.exports = function() {
    var INTERVAL, jobUpdate;
    INTERVAL = 1000 * 60 * 5;
    console.info("Running job update thread");
    jobUpdate = function() {
      return JobModel.find({}, function(err, results) {
        return async.map(results, function(job, clb) {
          var d, _ref;
          d = new Date(JSON.parse(job.dateTo));
          if ((_ref = job.status) === "open" || _ref === "finished") {
            return clb(null, null);
          }
          if (Date.now() > d.getTime()) {
            job.status = "finished";
            if (job.winner != null) {
              Messaging.sendJobMessage(job.author, job.winner, JOB_FINISHED_MESSAGE.f(job.winner));
            }
            return clb(null, job);
          }
        }, function(err, results) {
          return console.log("Job updating finished");
        });
      });
    };
    return setInterval(jobUpdate, INTERVAL);
  };

}).call(this);
