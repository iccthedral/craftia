mongoose        = require "mongoose"
passport        = require "passport"
colors          = require "colors"
util            = require "util"
async           = require "async"
fs              = require "fs"
UserModel       = require "../models/User"
CityModel       = require "../models/City"
JobModel        = require "../models/Job"
CategoryModel   = require "../models/Category"
Messaging       = require "../modules/Messaging"

AuthLevel       = require("../../config/Passport").AUTH_LEVEL

module.exports.saveJob = saveJob = (usr, jobData, res) ->
	if usr.type isnt AuthLevel.CUSTOMER
		throw "You don't have permissions to create a new job"

	async.series [
		findCity jobData.address.city
		findCategory jobData
	]
	, (err, results) ->
		throw err if err?
		delete jobData._id
		job = new JobModel(jobData)
		job.status = "open"
		job.address.zip = results[0].zip
		job.author =
			id: usr._id
			username: usr.username
		job.save (err, job) ->
			throw err if err?
			usr.createdJobs.push job._id
			usr.save()
			res.send job

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

createNewJob = (req, res, next) ->
	jobData = req.body
	usr     = req.user
	return next "User doesn't exist" if not usr?
	try
		saveJob usr, jobData, res
	catch e
		next e

deleteJob = (req, res) ->
	usr = req.user
	return res.send(422) if not usr? or usr.type isnt AuthLevel.CUSTOMER

	JobModel
	.findOne(_id: req.params.id)
	.remove()
	.exec (err, result) ->
		res.send(200)

updateJob = (req, res) ->
	usr     = req.user
	jobData = req.body

	if not usr? or usr.type isnt AuthLevel.CUSTOMER 
		return res.send(422)

	if jobData.address?.city? 
		checkCity = findCity(jobData.address.city) 
	else
		checkCity = (clb) -> clb(null, null)

	if jobData.category?.subcategory?
		findCat = findCategory(jobData)
	else 
		findCat = (clb) -> clb(null, null)

	async.series [
		checkCity,
		findCat
	], (err, results) ->
		id = req.params.id
		JobModel.findByIdAndUpdate(id, jobData)
		.exec (err, results) ->
			return res.send(422) if err? or results < 1
			JobModel
			.findById(id)
			.exec (err, job) ->
				return res.status(422).send(err.message) if err?
				res.send(job)

bidOnJob = (req, res) ->
	usr = req.user
	return res.send(422) if not usr? or usr.type isnt AuthLevel.CRAFTSMAN 

	JobModel
	.findOne(_id: req.params.id)
	.exec (err, job) ->
		job.bidders.push
			id: usr._id
			username: usr.username
			name: usr.name
			surname: usr.surname
			email: usr.email
			rating: usr.rating.toObject()
			pic: usr.profilePic
		job.save (err) ->
			return res.status(422).send(err.message) if err?
			Messaging.sendMessage({
				sender: usr.username #bice admin
				receiver: job.author.username
				subject: "Someone bidded on your offering"
				type: "job"
				data: {
					jobid: job._id,
					subtype: "bid_for_job"
				}
				body: """
Craftsman #{usr.username} just bidded on your job offering #{job.title} under #{job.category} category
				"""
			}, () ->
				res.send(job)
			)

cancelBidOnJob = (req, res) ->
	usr = req.user
	return res.send(422) if not usr? or usr.type isnt AuthLevel.CRAFTSMAN 

	JobModel
	.findOne(_id: req.params.id)
	.exec (err, job) ->
		bidder = (job.bidders.filter (el) => return el.id is req.params.uid)[0]
		ind = job.bidders.indexOf(bidder)
		job.bidders.splice(ind, 1)
		job.save (err) ->
			return res.status(422).send(err.message) if err?
			Messaging.sendMessage({
				sender: usr.username #bice admin
				receiver: job.author.username
				subject: "Someone canceled on your offering"
				type: "job"
				data: {
					jobid: job._id,
					subtype : "cancel_job"
				}
				body: """
				Craftsman #{usr.username} just canceled their bid on your job offering #{job.title} under #{job.category} category
				"""
			}, () ->
				res.send(job)
			)
			
rateJob = (req, res) ->
	user = req.user
	if user.type isnt AuthLevel.CUSTOMER
		return res.status(422).send("You don't have permissions to rate")

	JobModel.findById(req.params.id)
	.exec (err, job) ->
		return res.send(422) if job.status isnt "finished" or not job.winner? or err?
		UserModel.findById(job.winner)
		.exec (err, winner) ->
			return res.send(422) if err?
			winner.rating.totalVotes++
			winner.rating.avgRate += req.params.mark
			winner.rating.avgRate /= winner.rating.totalVotes
			res.send(winner)

pickWinnerBid = (req, res) ->
	user        = req.user
	winnerId    = req.params.winner
	if user.type isnt AuthLevel.CUSTOMER
		return res.status(422).send("You don't have permissions to pick winning bid")

	UserModel.findById(req.params.winner)
	.exec (err, winner) ->
		return res.send(422) if err?
		JobModel.findById(req.params.id)
		.exec (err, job) ->
			return res.send(422) if err?
			job.winner = winner._id
			job.status = "closed"
			job.save (err, job) ->
				res.send(job)

module.exports = (app) ->
	app.post "/job/new", createNewJob
	app.post "/job/:id/delete", deleteJob
	app.post "job/:id/update", updateJob
	app.post "/job/:id/bid", bidOnJob
	app.post "/job/:id/:uid/cancelbid", cancelBidOnJob
	app.post "/job/:id/rate/:mark", rateJob
	app.post "/job/:id/pickawinner/:winner", pickWinnerBid
	app.post "/job/:id", findJob