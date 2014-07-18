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

IMG_FOLDER = "#{process.cwd()}/www/img/"

module.exports.bidOnJob = bidOnJob = (usr, jobId, clb) ->
	if not usr? or (usr.type isnt AuthLevels.CRAFTSMAN)
		return clb throw "You're not authorized"
	
	JobModel
	.findOne _id: jobId
	.exec (err, job) ->
		if job.status in [ "closed", "finished" ]
			return clb throw "This job is finished"
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
			}, (err, job) -> 
				clb err, job

module.exports.pickWinner = pickWinner = (user, winner, jobId, clb) ->
	if not user? or user.type isnt AuthLevels.CUSTOMER
		return clb throw "You don't have permissions to pick winning bid"

	JobModel
	.findOne({
		"_id": mongoose.Types.ObjectId jobId
	})
	.populate "bidders"
	.exec (err, job) ->
		return clb "No such job" if not job?
		return clb err if err?
		bidder = job.bidders.filter (bidder) ->
			return bidder._id.equals(mongoose.Types.ObjectId winner)
		
		if not bidder?[0]?
			return clb throw "You haven't bidded yet for this job"

		UserModel
		.findById winner
		.exec (err, winUser) ->
			return clb throw "No such user #{winner}" if err?
			job.winner = winUser
			job.status = "closed"
			job.save (err, job) ->
				clb err, job

module.exports.findJob = findJob = (req, res, next) ->
	query = {"_id": mongoose.Types.ObjectId req.params.id}
	JobModel
	.find query
	.populate ({
		path: "author"
		select : "-password"
		model : "User"
	})
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

module.exports.rateJob = rateJob = (user, jobId, mark, comment, winner, clb) ->
	console.error "AAAAAAAAAAAAAAA"
	if user.type isnt AuthLevels.CUSTOMER or not user?
		return clb "You don't have permissions to rate"
	if not (1 < mark < 6)
		return clb "Mark is out of range"
	JobModel.findById jobId
	# .populate {
	# 	path:"winner"
	# 	select: "-password"
	# 	model: "User"
	# }
	.exec (err, job) ->
		console.error err if err?
		return clb err if err?
		if not job.winner?
			return clb throw "You don't have permission to rate"
		if not job.author.equals user._id
			return clb throw "You're not the creator of this job"
		if job.status isnt "finished"
			return clb throw "This job isn't finished and you can't rate the craftsman"
		UserModel.findById job.winner
		.exec (err, winnerUser) ->
			console.error err if err?
			return clb err if err?
			# Has the customer already rated this craftsman?
			alreadyRated = job.isRated
			if alreadyRated
				return clb throw "You've already rated this job"

			job.isRated = true
			job.rate.mark = mark
			job.rate.comment = comment
			winnerUser.rating.jobs.push {
				job: job
				comment: comment
				mark: mark
			}
			winnerUser.rating.totalVotes += 1
			winnerUser.rating.avgRate += mark
			winnerUser.rating.avgRate /= winnerUser.rating.totalVotes
			winnerUser.save (err, winnerUser) ->
				console.error err if err?
				return clb err if err?
				job.save (err, job) ->
					console.error err if err?
					clb err, job


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
	console.error "CCCCCCCCCCCCC"
	jobId = req.body.jobId
	mark = req.body.mark
	comment = req.body.comment
	user = req.user
	winner = req.winner
	
	rateJob user, jobId, mark, comment, winner, (err, job) ->
		console.error "BBBBBBBBBBBBBBB"
		# return res.send(err) if err?
		res.send(job)

listOpenJobsHandler = (req, res) ->
	page = req.params.page or 0
	perPage = 5
	populateQuery = [
		{
			path: "author",
			select:"-password",
			model:"User"
		},
		{
			path:"bidders",
			select:"-password",
			model:"User"}
	]	
	JobModel
	.find status: "open"
	.populate populateQuery
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
	jobData 	= req.body
	user     	= req.user
	if user.type isnt AuthLevels.CUSTOMER
		throw "You don't have permissions to create a new job"
	jobData.author = user
	job = new JobModel jobData
	job.save (err, job) ->
		return next err if err?
		res.send job

queryHandler = (req, res) ->
	data = req.body

	page = data.page
	query = {
		"status": "open"
	}
	if data.city?
		console.error "city"
		query["address.city.name"] = data.city.name 
		query["address.city.zip"] = data.city.zip
	if data.category? 
		console.error "cat"
		query.category = data.category
	if data.subcategory? 
		console.error "subcat"
		query.subcategory = data.subcategory
	title = data.title
	if title?
		console.error "title", title
		re = new RegExp("^.*#{title}.*$", "i")
		query.title = re

	perPage = 5
	JobModel
	.find query
	.populate {
		path: "author"
		select : "-password"
		model : "User"
	}
	.limit perPage
	.skip perPage * page
	.exec (err, jobs) ->
		return res.status(422).send err if err?
		out = {}
		out.jobs = jobs
		JobModel.count query, (err, cnt) ->
			return res.status(422).send err if err?
			out.totalJobs = cnt
			res.send out

module.exports.setup = (app) ->
	app.post "/job/:id/bid", bidOnJobHandler
	app.post "/job/rate", rateJobHandler
	app.post "/job/:id/:uid/cancelbid", cancelBidOnJobHandler
	app.post "/job/:id/pickawinner/:winner", pickWinnerHandler
	app.post "/job/new", createNewJobHandler
	app.get "/job/list/:page", listOpenJobsHandler
	app.post "/job/:id/delete", deleteJob
	app.post "/job/:id/update", updateJob
	app.post "/job/query", queryHandler
	app.get "/job/:id", findJob
