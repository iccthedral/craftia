mongoose        = require "mongoose"
passport        = require "passport"
colors          = require "colors"
util            = require "util"
async           = require "async"
fs              = require "fs"
AuthLevel       = require("../../config/Passport").AUTH_LEVEL
UserModel       = require ("../models/User")
CityModel       = require ("../models/City")
JobModel        = require ("../models/Job")
CategoryModel   = require ("../models/Category")

module.exports = (app) ->
    # logout user
    app.get "/logout", module.exports.logMeOut

    # login user
    app.post "/login", module.exports.logMeIn

    # update user details
    app.post "/user/update", module.exports.updateMe

    # uploads profile picture
    app.post "/user/uploadpicture", module.exports.uploadProfilePicture

    # Is current session holder authenticated?
    app.get "/isAuthenticated", module.exports.isUserAuthenticated

module.exports.isUserAuthenticated = (req, res) ->
    user = req.user
    return res.send(403) if not user?
    UserModel
    .find(_id: user._id)
    .populate("createdJobs biddedJobs inbox.sent inbox.received")
    .exec (err, result) ->
        res.send(result[0])

module.exports.logMeOut = (req, res) ->
    req.logout()
    res.redirect(200, "/")

module.exports.logMeIn = (req, res, next) ->
    if req.body.rememberme
        req.session.cookie.maxAge = 30*24*60*60*1000
    else
        req.session.cookie.expires = false
    pass = passport.authenticate "local", (err, user, info) ->
        return next(err) if err?
        return res.status(401).send(info.message) if not user?
        req.logIn user, (err) ->
            return next(err) if err?
            UserModel
            .find _id: user._id
            .populate "createdJobs biddedJobs inbox.sent inbox.received"
            .exec (err, result) ->
                res.send(result[0])
    pass(req, res, next)

module.exports.updateMe = (req, res) ->
    usr = req.user
    console.log usr
    return res.status(422).send "You're not logged in" if not usr?
    data = req.body
    delete data._id
    UserModel
    .findByIdAndUpdate(usr._id, data)
    .exec (err, cnt) ->
        console.log(err);
        return res.status(422).send(err.message) if err?
        res.send(200)

module.exports.uploadProfilePicture = (req, res) ->
    usr = req.user
    return res.status(422).send "You're not logged in" if not usr?
    UserModel
    .findById(req.user._id)
    .exec (err, user) ->
        console.log req.files
        file = req.files.file
        fs.readFile file.path, (err, data) ->
            imguri  = "img/#{usr.username}.png"
            newPath = "www/#{imguri}"
            fs.writeFile newPath, data, (err) =>
                return res.send(422) if err?
                user.profilePic = imguri
                user.save()
                res.send(imguri)

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