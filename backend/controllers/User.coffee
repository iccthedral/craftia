passport = require "passport"
AuthLevel = require("../../config/Passport").AUTH_LEVEL
mongoose = require "mongoose"
colors = require "colors"
UserModel = require ("../models/User")
CityModel = require ("../models/City")
JobModel = require ("../models/Job")
CategoryModel = require ("../models/Category")
util = require "util"
async = require "async"
fs = require "fs"

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
                    console.log "what the fuck"
                    UserModel
                    .find(_id: user._id)
                    .populate("createdJobs")
                    .exec (err, result) ->
                        usr = result[0]
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

    app.get("/listcraftsmen", (req, res) ->
        UserModel
        .find(type: AuthLevel.CRAFTSMAN)
        .exec (err, out) ->
            return res.send(422, err.message) if err?
            res.send(out);
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
        jobData = req.body
        if not usr? or usr.type isnt AuthLevel.CUSTOMER 
            return res.send(422)
        checkCity = if jobData.address?.city? then findCity(jobData.address.city) else (clb) -> clb(null, null)
        findCat = if jobData.category?.subcategory? then findCategory(jobData) else (clb) -> clb(null, null)
        async.series([
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
        )
    )

    app.post("/user/update", (req, res) ->
        usr = req.user
        if not usr?
            return res.status(422).send "You're not logged in"
        UserModel
        .findByIdAndUpdate(req.user._id, { $set: req.body })
        .exec (err, user) ->
            user.save(req.body)
            res.send(200)
    )

    app.post("/user/uploadpicture", (req, res) ->
        usr = req.user
        if not usr?
            return res.status(422).send "You're not logged in"
        UserModel
        .findById(req.user._id)
        .exec (err, user) ->
            file = req.files.file
            fs.readFile(file.path, (err, data) ->
                imguri = "img/#{usr.username}.png"
                newPath = "www/#{imguri}"
                fs.writeFile(newPath, data, (err) =>
                    console.log err
                    return res.send(422) if err?
                    user.profilePic = imguri
                    user.save()
                    res.send(imguri)
                )
            )
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
            job.save (err) ->
                return res.status(422).send(err.message) if err?
                res.send(job)
    )

    app.post("/job/:id/:uid/cancelbid", (req, res) ->
        usr = req.user
        console.dir usr
        if not usr? or usr.type isnt AuthLevel.CRAFTSMAN 
            res.send(422)
            return
        JobModel
        .findOne(_id: req.params.id)
        .exec (err, job) ->
            bidder = (job.bidders.filter (el) => return el.id is req.params.uid)[0]
            ind = job.bidders.indexOf(bidder)
            job.bidders.splice(ind, 1)
            job.save (err) ->
                return res.status(422).send(err.message) if err?
                res.send(job)
    )

    app.post("/job/:id/rate/:mark", (req, res) ->
        user = req.user
        if user.type isnt AuthLevel.CUSTOMER
            throw new Error("You don't have permissions to rate")
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
    )

    app.post("/job/:id/pickawinner/:winner", (req, res) ->
        user = req.user
        winnerId = req.params.winner
        if user.type isnt AuthLevel.CUSTOMER
            throw new Error("You don't have permissions to rate")
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
    )
    
    saveJob = (usr, jobData, res) ->
        if usr.type isnt AuthLevel.CUSTOMER
            throw new Error("You don't have permissions to create a new job")
        async.series([
            findCity(jobData.address.city),
            findCategory(jobData),
        ], (err, results) ->
            console.log(err)
            delete jobData._id
            job = new JobModel(jobData)
            job.author = usr._id
            job.status = "open"
            job.address.zip = results[0].zip
            return res.send(422, err.message) if err?
            job.save (err, job) ->
                console.log(err)
                return res.status(422).send(err.messsage) if err?
                usr.createdJobs.push(job._id)
                usr.save()
                res.send(job)
        )

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

    findCity = (city) ->
        return (clb) ->
            CityModel
            .findOne(name: city)
            .exec (err, city) ->
                clb(err, city)

    findCategory = (jobdata) ->
        return (clb) ->
            CategoryModel
            .findOne(category: jobdata.category)
            .exec (err, cat) ->
                if cat?.subcategories[jobdata.subcategory]? or err?
                    clb(new Error("No such subcategory in category #{jobdata.category}"), null)
                clb(err, cat)