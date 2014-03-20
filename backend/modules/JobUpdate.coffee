JobModel = require "../models/Job"
async = require "async"
Messaging = require "Messaging"

JOB_FINISHED_MESSAGE = """
Job with the <a href="id:{0}">{0}</> finished.
Would you like to give Damir a kiss?
"""

module.exports = () ->
	INTERVAL = 1000 * 60 * 5
	console.info "Running job update thread"
	jobUpdate = () ->
		JobModel.find {}, (err, results) ->
			async.map(results,
				(job, clb) ->
					d = new Date(JSON.parse(job.dateTo))
					if job.status in ["open", "finished"]
						return clb(null, null)

					if (Date.now() > d.getTime())
						job.status = "finished"
						if job.winner?
							Messaging.sendJobMessage(job.author, job.winner, JOB_FINISHED_MESSAGE.f(job.winner))
						clb(null, job)

				(err, results) ->
					console.log "Job updating finished"
			)

	setInterval(jobUpdate, INTERVAL)