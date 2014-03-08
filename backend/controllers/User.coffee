passport = require "passport"
AuthLevel = require("../../config/Passport").AUTH_LEVEL
mongoose = require "mongoose"
colors = require "colors"
UserModel = require ("../models/User")
CityModel = require ("../models/City")
JobModel = require ("../models/Job")
AddressModel = require ("../models/Address")
CategoryModel = require ("../models/Category")
util = require "util"

module.exports = (app) ->

    app.get("/logout", (req, res) ->
        req.logout()
        res.redirect(200, "/")
    )

    app.post('/login', (req, res, next) ->
        if req.body.rememberme
            req.session.cookie.maxAge = 30*24*60*60*1000
        else
            req.session.cookie.expires = false

        passport.authenticate("local",
            (err, user, info) ->
                if err
                    return next(err)
                if not user
                    req.session.messages = [info.message]
                    return res.status(401).send(info.message)
                req.logIn(user, (err) ->
                    if err
                        return next(err)
                    UserModel
                    .find(_id: user._id)
                    .populate("createdJobs")
                    .exec (err, result) ->
                        usr = result[0]
                        AddressModel.populate(usr.createdJobs, path: "address")
                        .then (job, address) ->
                            job.address = address
                            return res.send(usr)
                )
        )(req, res, next)
    )

    app.post('/register-craftsman', (req, res) ->
        data = req.body
        data.type = AuthLevel.CRAFTSMAN
        data.rating = 0
        data.numVotes = 0
        user = new UserModel(data)
        saveUser(user, res)
    )

    app.post('/register-customer', (req, res) ->
        data = req.body
        data.type = AuthLevel.CUSTOMER
        user = new UserModel(data)
        saveUser(
            user.populate("createdJobs"), 
            res
        )
    )

    # app.post("user/:id/rate/:rating", (req, res) ->
    #     UserModel
    #     .findOne(_id: req.params.id)
    #     .exec (err, user) ->
    #         rate = req.params.rating
    #         try
    #             throw Error("Not a number") if not util.isNumber(rate)
    #             rate = rate.clamp(1, 5)
    #             numvotes = user.numVotes
    #             user.numVotes += 1
    #         catch e
    #             res.status(422)
    # )

    app.post("/job/new", (req, res) ->
        jobData = req.body
        usr = req.user
        if not usr?
            res.send(422)
        else
            try
                saveJob(usr, jobData, res)
            catch e
                console.log e.message
                res.status(422).send(e.message)
    )

    app.post("/job/:id/delete", (req, res) ->
        usr = req.user
        if not usr? or usr.type isnt AuthLevel.CUSTOMER 
            res.send(422)
            return
        JobModel
        .findOne(_id: req.params.id)
        .remove()
        .exec (err, result) ->
            res.send(200)
    )

    app.post("/job/:id/update", (req, res) ->
        usr = req.user
        if not usr? or usr.type isnt AuthLevel.CUSTOMER 
            res.send(422)
            return
        JobModel
        .findByIdAndUpdate(req.params.id, { $set: req.body })
        .exec (err, job) ->
            job.save(req.body)
            res.send(200)
    )

    app.post("/job/:id/bid", (req, res) ->
        usr = req.user
        console.dir usr
        if not usr? or usr.type isnt AuthLevel.CRAFTSMAN 
            res.send(422)
            return
        JobModel
        .findOne(_id: req.params.id)
        .exec (err, job) ->
            job.bidders.push(
                id: usr._id,
                username: usr.username
                name: usr.name
                surname: usr.surname
                email: usr.email
            )
            job.save()
            res.send(200)
    )

    saveJob = (usr, jobData, res) ->
        if usr.type isnt AuthLevel.CUSTOMER
            throw new Error("You don't have permissions to create a new job")
        address = new AddressModel()
        job = new JobModel()
        address.newAddress(jobData.address)
        .then () ->
            job.address = address._id
        .then () ->
        CategoryModel
        .findOne(category: jobData.category)
        .exec (err, cat) ->
            if cat?.subcategories[jobData.subcategory]? or err?
                throw new Error("No such subcategory in category #{job.category}")
            job.category = jobData.category
            job.subcategory = jobData.subcategory
            job.budget = jobData.budget
            job.dateFrom = jobData.dateFrom
            job.dateTo = jobData.dateTo
            job.materialProvider = jobData.materialProvider
            job.title = jobData.title
            job.description = jobData.description
            job.save()
            job.populate("address")
            usr.createdJobs.push(job._id)
            usr.save()
            res.send(job)

    saveUser = (user, res) ->
        user.save (err) ->
            if err?
                res
                .status(422)
                .send("Registering failed!")
            else
                res
                .status(200)
                .send(
                    user: user
                    msg: "Registering succeeded!"
                )

