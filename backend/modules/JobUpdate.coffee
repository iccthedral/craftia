async = require "async"
_ = require "underscore"
JobModel = require "../models/Job"
Messaging = require "./Messaging"

WINNER_NOTIF = _.template """
Job <%- title %> the <a href="/job/<%- _id %>">{0}</> finished, and you are the winner.

"""

AUTHOR_NOTIF_WINNING = _.template """

"""

AUTHOR_NOTIF_FINISHED = _.template """
<%- %>
"""

jobUpdateThread = ->
	INTERVAL = 1000 * 60 * 5
	console.log "Running job update thread"
	jobUpdate = ->
		JobModel.find {}, (err, results) ->
			async.map results
				, (job, clb) ->
						d = job.dateTo
						console.log "Date to", d
						if job.status in ["open", "finished"]
							return clb(null, null)

						if Date.now() > d.getTime()
							job.status = "finished"
							notifAuthor = {
								receiver: job.author.username
								body: 
									if job.winner? then AUTHOR_NOTIF_WINNING.format job
									else AUTHOR_NOTIF_FINISHED.format job
							}

							if job.winner?
								notifWinner = {
									receiver: job.winner.username
									body: WINNER_NOTIF.format job
								}
								Messaging.sendNotification notifWinner
							Messaging.sendNotification notifAuthor
							clb null, job
				, (err, results) ->
					console.log "Job updating finished"

	setInterval jobUpdate, INTERVAL

module.exports = jobUpdateThread