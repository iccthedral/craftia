_ = require "underscore"
async = require "async"
db = require "../config/Database"
JobModel = require "../models/Job"
Messaging = require "./Messaging"

log = console.log.bind console

WINNER_NOTIF = _.template """
Job <a href="/job/<%- _id %>"> <%- title %> </a> finished, and you are the winner.
"""

AUTHOR_NOTIF_WINNING = _.template """
  Ovo je title posla: <%- title %>
	Ovde ide poruka za autora ako job ima winnera
"""

AUTHOR_NOTIF_FINISHED = _.template """
	Ovde ide poruka za autora ako se zavrsio posao
"""

INTERVAL = (1000 * 60 * 5) / 10

log "Running job update thread at interval of #{INTERVAL} ms"
do jobUpdate = -> 
	JobModel.find {}
	.exec (err, results) ->
		return if err? or not results? or results.length is 0
		async.map(results , (job, clb) ->
			d = job.dateTo
			expiredOrClosed = (Date.now() > d.getTime())
			log "Job expired:", expiredOrClosed
			log "Job status:", job.status
			log "Job winner:", job.winner
		
			if not expiredOrClosed or job.status is "finished"
				return clb null, null
				
			job.status = "finished"
			notifAuthor = {
				receiver: job.author
				body:
					if job.winner? then AUTHOR_NOTIF_WINNING job
					else AUTHOR_NOTIF_FINISHED job
			}

			if job.winner?
				notifWinner = {
					receiver: job.winner
					body: WINNER_NOTIF job
				}
				Messaging.sendNotification notifWinner
			Messaging.sendNotification notifAuthor
			
			job.save (err, cnt) ->
				return clb err, cnt if err?
				log "Job updated!"
				clb null, job
		, (err, results) ->
				log "Jobs updating finished"
				setTimeout jobUpdate, INTERVAL
		)