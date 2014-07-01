mongoose        = require "mongoose"
passport        = require "passport"
colors          = require "colors"
util            = require "util"
async           = require "async"
fs              = require "fs"
crypto 					= require "crypto"

UserModel       = require "../models/User"
CityModel       = require "../models/City"
JobModel        = require "../models/Job"
CategoryModel   = require "../models/Category"
Messaging       = require "../modules/Messaging"
_ 							= require "underscore"

AuthLevels      = require "../config/AuthLevels"
UserCtrl				= require "../controllers/User"

module.exports.saveJob = saveJob = (usr, jobData, clb) ->
	if usr.type isnt AuthLevels.CUSTOMER
		return clb "You don't have permissions to create a new job"
	
	async.series [
		findCity jobData.address.city
		findCategory jobData
	]
	, (err, results) ->
		return clb err if err?
		delete jobData._id 
		
		saveJobPhoto = (photo, clb) ->
			base64img = photo.img
			path = crypto.randomBytes(20).toString "hex"
			#console.log base64img
			fs.writeFile path, base64img, {encoding: "base64"}, (err) ->
				clb err, path

		finish = ->
			job = new JobModel jobData
			job.status = "open"
			job.address.zip = results[0].zip
			job.author = usr
			job.save (err, job) ->
				return clb err if err?
				usr.save (err, cnt) ->
					clb err, job, usr
		
		photos = jobData.jobPhotos.slice().filter (photo) -> return photo.img?

		if photos.length > 0
			async.mapSeries photos, saveJobPhoto, (err, urls) ->
				jobData.jobPhotos = jobData.jobPhotos.forEach (photo) ->
					photo.img = urls.shift()
				finish()
		else finish()		

module.exports.bidOnJob = bidOnJob = (usr, jobId, clb) ->
	if not usr? or (usr.type isnt AuthLevels.CRAFTSMAN)
		return clb "You're not authorized"
	
	JobModel
	.findOne _id: jobId
	.exec (err, job) ->
		if job.status in [ "closed", "finished" ]
			return clb "This job is finished"
		job.bidders.push usr
		job.save (err) ->
			return res.status(422).send(err.message) if err?
			Messaging.sendNotification {
				receiver: job.author
				subject: "Someone bidded on your offering"
				type: "job"
				body: """
Craftsman #{usr.username} just bidded on your job offering #{job.title} under #{job.category} category
				"""
			}, (err) -> clb err, job

module.exports.pickWinner = pickWinner = (user, winner, jobId, clb) ->
	if not user? or user.type isnt AuthLevels.CUSTOMER
		return clb "You don't have permissions to pick winning bid"

	JobModel
	.findOne {_id: jobId, bidders: winner}
	.exec (err, job) ->
		return clb "You haven't bidded yet for this job" unless (job? and not err?)
		UserModel
		.findById winner
		.exec (err, winUser) ->
			return clb "No such user #{winner}" if err?
			job.winner = winUser
			job.status = "closed"
			job.save (err, job) ->
				clb err, job

module.exports.findJob = findJob = (req, res, next) ->
	JobModel
	.findOne _id: req.params.id
	.exec (err, job) ->
		return next err if err?
		res.send job

module.exports.findCity = findCity = (cityName) ->
	(clb) ->
		CityModel
		.findOne name: cityName
		.exec (err, city) ->
			if not city?
				clb new Error "No city #{cityName} in database!", null
			else
				clb err, city

module.exports.findCategory = findCategory = (jobdata) ->
	(clb) ->
		CategoryModel
		.findOne category: jobdata.category
		.exec (err, cat) ->
			if not cat?
				return clb new Error "No such category #{jobdata.category}", null
			exists = jobdata.subcategory in cat?.subcategories
			if not exists or err?
				return clb new Error "No subcategory #{jobdata.subcategory} in category #{jobdata.category}", null
			clb err, cat

module.exports.cancelBidOnJob = cancelBidOnJob = (usr, jobId, clb) ->
	if usr.type isnt AuthLevels.CRAFTSMAN or not usr?
		return clb "You're not authorized"
	
	JobModel
	.findOne(_id: jobId)
	.exec (err, job) ->
		if job.status in ["closed", "finished"]
			return clb new Error "Job is finished", null
		bidder = (job.bidders.filter (el) => return el.id is usr.id)[0]
		ind = job.bidders.indexOf(bidder)
		job.bidders.splice(ind, 1)
		job.save (err) ->
			Messaging.sendNotification {
				receiver: job.author
				type: "job"
				body: """
Craftsman #{usr.username} just canceled their bid on your job offering #{job.title} under #{job.category} category
				"""
			}, (err) ->
				clb err, job

module.exports.rateJob = rateJob = (user, jobId, mark, comment, clb) ->
	if user.type isnt AuthLevels.CUSTOMER or not user?
		return clb "You don't have permissions to rate"
	if not (1 < mark < 6)
		return clb "Mark is out of range"

	JobModel.findById jobId
	.exec (err, job) ->
		return clb err if err?
		if job.author isnt user.id
			return clb "You're not the creator of this job"
		if job.status isnt "finished"
			return clb "This job isn't finished and you can't rate the craftsman"

		winner = job.winner
		
		# Has the customer already rated this craftsman?
		alreadyRated = job.rated
		if alreadyRated
			return clb "You've already rated this job"

		job.rated = true

		UserModel.findById winner._id, (err, winnerUser) ->
			winnerUser.rating.jobs.push {
				job: job
				comment: comment
			}

			winnerUser.rating.totalVotes += 1
			winnerUser.rating.avgRate += mark
			winnerUser.rating.avgRate /= winnerUser.rating.totalVotes

			async.series [ winnerUser.save.bind winnerUser, job.save.bind job ], clb

module.exports.fetchOpenJobs = fetchOpenJobs = (user, clb) ->
	jobs = user.createdJobs.filter (job) -> return job.status is "open"
	jobs.map (job) -> job.toObject()
	clb null, jobs

deleteJob = (req, res) ->
	usr = req.user
	return res.send(422) if not usr? or usr.type isnt AuthLevels.CUSTOMER

	JobModel
	.findOne(_id: req.params.id)
	.remove()
	.exec (err, result) ->
		res.send(200)

updateJob = (req, res) ->
	usr     = req.user
	jobData = req.body

	reserved = [
		"status"
		"author"
		"winner"
		"bidders"
		"jobPhotos":
			default: []
	]
	if not usr? or usr.type isnt AuthLevels.CUSTOMER 
		console.log "OH NOEES"
		return res.send(403)

	if jobData.address?.city? 
		checkCity = findCity(jobData.address.city) 
	else
		checkCity = (clb) -> clb(null, null)

	if jobData.category?.subcategory?
		findCat = findCategory(jobDa03)
	else 
		findCat = (clb) -> clb(null, null)

	async.series [
		checkCity,
		findCat
	], (err, results) ->
		id = req.params.id
		JobModel.findByIdAndUpdate(id, jobData)
		.exec (err, results) ->
			console.log err
			return res.send(404) if err? or results < 1
			JobModel
			.findById(id)
			.exec (err, job) ->
				return res.status(422).send(err.message) if err?
				res.send(job)

bidOnJobHandler = (req, res, next) ->
	user = req.user
	jobId = req.params.id

	bidOnJob user, jobId, (err, job) ->
		return res.status(422).send(err) if err?
		res.send job

pickWinnerHandler = (req, res, next) ->
	user        = req.user
	winnerId    = req.params.winner
	jobId 			= req.params.id
	
	pickWinner user, winnerId, jobId, (err, job) -> 
		return next err if err?
		res.send job

cancelBidOnJobHandler = (req, res, next) ->
	jobId = req.params.id
	user = req.user

	cancelBidOnJob user, jobId, (err, job) ->
		return res.status(422).send(err) if err?
		res.send job

rateJobHandler = (req, res, next) -> 
	jobId = req.params.id
	mark = req.params.mark
	comment = req.params.comment
	user = req.user

	rateJob user, jobId, mark, comment, (err, job) ->
		return res.status(422).send(err) if err?
		res.send(job)

listOpenJobsHandler = (req, res) ->
	page = req.params.page or 0
	perPage = 5
	JobModel
	.find status: "open"
	.populate {
		path: "author"
		select: "-password"
		model: "User"
	}
	.limit perPage
	.skip perPage * page
	.exec (err, jobs) ->
		return res.status(422).send err if err?
		out = {}
		out.jobs = jobs
		JobModel.count status:"open", (err, cnt) ->
			return res.status(422).send err if err?
			out.totalJobs = cnt
			res.send out

createNewJobHandler = (req, res, next) ->
	jobData = req.body
	usr     = req.user
	return next "User doesn't exist" if not usr?
	saveJob usr, jobData, (err, job, usr) ->
		return next err if err?
		res.send job

module.exports.setup = (app) ->
	app.post "/job/:id/bid", bidOnJobHandler
	app.post "/job/:id/rate/:mark", rateJobHandler
	app.post "/job/:id/:uid/cancelbid", cancelBidOnJobHandler
	app.post "/job/:id/pickawinner/:winner", pickWinnerHandler
	app.post "/job/new", createNewJobHandler
	app.get "/job/list/:page", listOpenJobsHandler
	app.post "/job/:id/delete", deleteJob
	app.post "/job/:id/update", updateJob
	app.post "/job/:id", findJob

	# app.get "/job/list/open", listOpenJobsHandler

#/listjobs -> /job/list/open