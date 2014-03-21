mongoose = require "mongoose"
bcrypt = require "bcrypt-nodejs"
JobModel = require "./Job"
MessageModel = require "./Message"
async = require "async"

schema = mongoose.Schema
    username:
        type: String
        required: true
        unique: true

    email:
        type: String
        required: true
        unique: true

    password: 
        type: String
        required: true

    accessToken:
        type: String

    name:
        type: String
        required: true

    surname: 
        type: String
        required: true

    type:
        type: String
        enum: ["Admin", "Craftsman", "Customer"]
        required: true

    telephone:
        type: String
        required: true

    createdJobs: [
        type: mongoose.Schema.Types.ObjectId
        ref: "Job"
        default: []
    ]

    rating:
        comments: [{
            jobId: mongoose.Schema.Types.ObjectId
            message: String
        }],

        totalVotes: { type: Number, default: 0 }
        avgRate: { type: Number, default: 0, min: 0, max: 5 }

    profilePic: 
        type: String
        default: "img/default_user.jpg"

    inbox:
        system: [
            type: mongoose.Schema.Types.ObjectId
            ref: "Message"
        ]

        job: [
            type: mongoose.Schema.Types.ObjectId
            ref: "Message"
        ]

        contact: [
            type: mongoose.Schema.Types.ObjectId
            ref: "Message"
        ]

        sent: [
            type: mongoose.Schema.Types.ObjectId
            ref: "Message"
        ]

schema.pre "save", (next) ->
    user = @
    if not user.isModified("password")
        return next()

    bcrypt.genSalt(
        10,
        (err, salt) ->
            if err?
                return next(err)
            bcrypt.hash(
                user.password,
                salt,
                () ->
                    #progress
                (err, hash) ->
                    #after callback
                    if err?
                        return next(err)
                    user.password = hash
                    next()
            )
    )

schema.methods.comparePassword = (password, cb) ->
    bcrypt.compare(password, this.password, (err, isMatch) ->
        if err?
            return cb(err)
        cb(null, isMatch)
    )

schema.methods.generateRandomToken = () ->
    user = @
    chars = "_!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    token = new Date().getTime() + "_"
    for x in [0...16]
        i = Math.floor(Math.random() * 62)
        token += chars.charAt(i)
    return token

UserModel = mongoose.model("User", schema)

schema.statics.sendMessage = (type, msg, fromId, toId, callb) ->
    UserModel.findById(fromId)
    .exec (err, sender) ->
        UserModel.findById(toId)
        .exec (err, receiver) ->
            msg = new MessageModel(
                type: type
                msg: msg
                from: myself
            )
            receiver.inbox[type].push(msg)
            sender.inbox.sent.push(msg)

            async.series([
                receiver.save().exec
                sender.save().exec
            ], (err, res) ->
                callb(err, res)
            )

# schema.methods.createNewJob = (job) ->
#   try
#       @createdJobs.push(JobModel.newJob(job))
#       @save()
#   catch e
#       throw new Error(e)

module.exports = UserModel
