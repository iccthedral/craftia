async = require "async"
_ = require "underscore"
JobModel = require "../models/Job"
Messaging = require "./Messaging"

log = console.log.bind console

WINNER_NOTIF = _.template """
Job <%- title %> the <a href="/job/<%- _id %>">{0}</> finished, and you are the winner.
"""

AUTHOR_NOTIF_WINNING = _.template """
	Ovde ide poruka za autora ako job ima winnera
"""

AUTHOR_NOTIF_FINISHED = _.template """
	Ovde ide poruka za autora ako se zavrsio posao
"""

INTERVAL = 1000 * 60 * 5

log "Running job update thread at interval of #{INTERVAL} ms"
do jobUpdate = -> JobModel.find {}, (err, results) ->
	async.map results, (job, clb) ->
		expiredOrClosed = (Date.now() > d.getTime()) or job.status is "closed"
		log "Job expired or closed?", expiredOrClosed, job.status, d
		
		if job.status in ["open", "finished"] or not expiredOrClosed
			return clb(null, null)

		job.status = "finished"
		notifAuthor = {
			receiver: job.author.username
			body:
				if job.winner? then AUTHOR_NOTIF_WINNING job
				else AUTHOR_NOTIF_FINISHED job
		}

		if job.winner?
			notifWinner = {
				receiver: job.winner.username
				body: WINNER_NOTIF job
			}
			Messaging.sendNotification notifWinner
		Messaging.sendNotification notifAuthor
		clb null, job
	, (err, results) ->
		log "Jobs updating finished"
		setTimeout jobUpdate, INTERVAL