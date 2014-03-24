UserModel = require ("../models/User")
JobModel = require ("../models/Job")
async = require "async"

module.exports = (app) ->
    app.get "/", (req, res) ->
        res.render("main", user: req.user)

    app.get "/isAuthenticated", (req, res) ->
        user = req.user
        if user?
            UserModel
            .find(_id: user._id)
            .populate("createdJobs")
            .exec (err, result) ->
                usr = result[0]
                res.send(usr)
        else
          res.send(403)

    # populateAddress = (j, callback) ->
    #     return AddressModel
    #     .populate(j, path: "address")
    #     .then (job, address) ->
    #         o = j.toObject()
    #         callback(null, o)

    fetchJobs = (user, callback) ->
        jobs = user.createdJobs.filter(
            (job) ->
                return job.status is "open"
        ).map (job) ->
            author = {
                id: user._id
                name: user.name
            }
            job.author = author
            return job
        console.log(jobs);
        callback(null, jobs)

    app.get "/listjobs", (req, res) ->
        UserModel
        .find()
        .populate("createdJobs")
        .exec (err, results) ->
            out = []
            async.map(results, fetchJobs, (err, results) ->
                out = []
                out = out.concat.apply(out, results)
                res.send out
            )