passport = require "passport"
AuthLevel = require("../../config/Passport").AUTH_LEVEL
mongoose = require "mongoose"
UserModel = mongoose.model("User")

module.exports = (app) ->
    app.get("/logout", (req, res, next) ->
        # req.user = null
        # req.session.cookie.expires = false
        # passport.deserializeUser()
        req.logout()
        res.redirect(200, "/")
    )

    app.post('/login', (req, res, next) ->
        console.dir req.body
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
                    return res.send(user)
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
        saveUser(user, res)
    )

    saveUser = (user, res) ->
        user.save (err) ->
            console.log err
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

