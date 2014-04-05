async       = require "async"
UserModel   = require "../models/User"
AuthLevel   = require("../../config/Passport").AUTH_LEVEL
findCity    = require("./Job").findCity

module.exports = (app) ->
    app.get "/", module.exports.showIndexPage
    app.get "/listcraftsmen", module.exports.listAllCraftsmen
    app.get "/listjobs", module.exports.listOpenJobs
    app.post "/register-craftsman", module.exports.registerCrafsman
    app.post "/register-customer", module.exports.registerCustomer 

module.exports.fetchJobs = (user, callback) ->
    jobs = user.createdJobs.filter (job) -> return job.status is "open"
    jobs.map (job) ->
        job = job.toObject()
        job.author = 
            id: user._id
            name: user.name
        return job
    callback(null, jobs)

module.exports.saveUser = (user, res) ->
    user.save (err) ->
        return res.status(422).send("Registering failed!") if err?
        res.status(200).send(user: user, msg: "Registering succeeded!")

module.exports.showIndexPage = (req, res) ->
    res.render("main", user: req.user)

module.exports.listAllCraftsmen = (req, res) ->
    UserModel
    .find(type: AuthLevel.CRAFTSMAN)
    .exec (err, out) ->
        return res.send(422, err.message) if err?
        res.send(out)

module.exports.listOpenJobs = (req, res) ->
    UserModel
    .find()
    .populate("createdJobs")
    .exec (err, results) ->
        async.map results, module.exports.fetchJobs, (err, results) ->
            out = [].concat.apply [], results
            res.send out

module.exports.registerCrafsman = (req, res) ->
    data        = req.body
    data.type   = AuthLevel.CRAFTSMAN
    user        = new UserModel(data)
    
    resolveCity = (clb) -> clb()
    if data.address?.city?
        resolveCity = findCity(data.address.city)

    resolveCity((err, city) ->
        data.address.zip = city.zip
        module.exports.saveUser(user, res)
    )

module.exports.registerCustomer = (req, res) ->
    data        = req.body
    data.type   = AuthLevel.CUSTOMER
    user        = new UserModel(data)

    resolveCity = (clb) -> clb()
    if data.address?.city?
        resolveCity = findCity(data.address.city)

    resolveCity((err, city) ->
        data.address.zip = city.zip
        module.exports.saveUser(user, res)
    )