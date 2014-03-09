UserModel = require ("../models/User")
AddressModel = require ("../models/Address")
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
                AddressModel.populate(usr.createdJobs, path: "address")
                .then (job, address) ->
                    job.address = address
                    res.send(usr)
        else
          res.send(403)

    populateAddress = (j, callback) ->
        return AddressModel
        .populate(j, path: "address")
        .then (job, address) ->
            o = j.toObject()
            callback(null, o)

    fetchJobs = (user, callback) ->
        return async.map(
            user.createdJobs, 
            populateAddress, 
            (err, results) ->
                results = [] if not results?
                results = results.map (job) -> 
                    author = {
                        id: user._id
                        name: user.name
                    }
                    job.author = author
                    return job
                callback(null, results)
        )

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