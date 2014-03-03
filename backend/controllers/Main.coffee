module.exports = (app) ->
  app.get "/", (req, res) ->
    res.render("main", user: req.user)

  app.get "/isAuthenticated", (req, res) ->
    console.dir(req.user)
    if req.user?
      res.status(200).send(req.user)
    else
      res.send(403)
  