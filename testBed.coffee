cs = require "coffee-script/register"
JobCtrl = require "./backend/controllers/Job"
UserCtrl = require "./backend/controllers/User"
DB = require "./config/Database"
UserModel = require "./backend/models/User"
JobModel = require "./backend/models/Job"
repl = require "repl"

log = console.log.bind console
colors = require "colors"
fixtures = require "./createFixtures"

jobByTitle = (title, clb) ->
	JobModel.findOne title:title, clb

userByEmail = (email, clb) ->
	UserModel.findOne email:email, clb

get = (funcA, funcB, queryA, queryB, clb) ->
	funcA queryA, (err, resA) ->
		return clb err if err?
		funcB queryB, (err, resB) ->
			return clb err if err?
			clb err, resA, resB

chooseWinner = (author, username, title, clb) ->
	get userByEmail, jobByTitle, username, title, (err, user, job) ->
		return clb err if err?
		JobCtrl.pickWinner author, user, job._id, (err, job) ->
			return clb err if err?
			console.log "Winner is #{username}", job.title
			clb err, job

cancelBiddder = (username, title, clb) ->
	get userByEmail, jobByTitle, username, title, (err, user, job) ->
		return clb err if err?
		JobCtrl.cancelBidOnJob user, job._id, (err, job) ->
			return clb err if err?
			console.log "Canceling bidder #{username}", job.title
			clb err, job

bidOnJob = (username, title, clb) ->
	get userByEmail, jobByTitle, username, title, (err, user, job) ->
		return clb err if err?
		JobCtrl.bidOnJob user, job._id, (err, job) ->
			return clb err if err?
			console.log "Bidding on job #{username}", job.title
			clb err, job

rateJob = (username, title, mark, comment, clb) ->
	get userByEmail, jobByTitle, username, title, (err, user, job) ->
		return clb err if err?
		JobCtrl.rateJob user, job._id, mark, comment, (err, winner) ->
			return clb err if err? or not winner?
			console.log "Rating bidder #{winner.username}", job.title
			clb err, job

me = null

global.login = (email) ->
	userByEmail email, (err, user) ->
		return log err.red if err? or not user?
		UserCtrl.populateUser user, (err, user) ->
			return log err.red if err? or not user?
			log "You're logged as #{user.username}".yellow
			me = user
			global.me = me
			return
	return "done"

global.bid = (jobTitle) ->
	bidOnJob me.username, jobTitle, (err, job) ->
		return log err.red if err?
		log "#{me.username} bidded on job!"
	return "done"

global.pickwinner = (craftsmanName, jobTitle) ->
	chooseWinner me, craftsmanName, jobTitle, ->
		return log err.red if err?
		log "#{me.username} picked winner #{craftsmanName}"
	return "done"

global.rate = (jobTitle, mark, comment) ->
	rateJob me.username, jobTitle, mark, comment, (err, job) ->
		return log err.red if err? or not job?
		log "#{me.username} rated #{job.winner.username}"
	return "done"

global.cfixtures = ->
	DB.db.dropDatabase ->
		log "Dropping database".red
		fixtures.create (err, res) ->
			return log err if err? or not res?
			log "Created in total #{res.length} fixtures!".yellow.bold

DB.on "open", ->
	replInstance = repl.start {
		prompt: "> "
		useGlobal: true
	}

	replInstance.on "exit", -> DB.close()

# userByEmail customerName, (err, customer) ->
# chooseWinner customer, craftsmanName, jobTitle, ->
	# console.log "picked winner"
# rateJob customerName, jobTitle, 4, (err, job) ->
	# console.log "rated job"
	# DB.close()

