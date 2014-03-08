passport = require "passport"
AuthLevel = require("../../config/Passport").AUTH_LEVEL
mongoose = require "mongoose"
colors = require "colors"
UserModel = require ("../models/User")
CityModel = require ("../models/City")
JobModel = require ("../models/Job")
AddressModel = require ("../models/Address")
CategoryModel = require ("../models/Category")

module.exports = (app) ->

    app.get("/logout", (req, res, next) ->
        # req.user = null
        # req.session.cookie.expires = false
        # passport.deserializeUser()
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

    app.post('/register-craftsman', (req, res, next) ->
        data = req.body
        data.type = AuthLevel.CRAFTSMAN
        user = new UserModel(data)
        saveUser(user, res)
    )

    app.post('/register-customer', (req, res, next) ->
        data = req.body
        data.type = AuthLevel.CUSTOMER
        user = new UserModel(data)
        saveUser(
            user.populate("createdJobs"), 
            res
        )
    )

    app.post("/job/new", (req, res, next) ->
        jobData = req.body
        usr = req.user
        if not usr?
            console.log("You're nog logged in")
            res.send(422)
        else
            try
                saveJob(usr, jobData, res)
            catch e
                console.error e.message.red
                res.status(422).send(e.message)
    )

    saveJob = (usr, jobData, res) ->
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
            console.dir job
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

