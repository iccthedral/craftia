module.exports = (app) ->
  app.get "/", (req, res) ->
    res.render("main", user: req.user)

  app.get "/isAuthenticated", (req, res) ->
    console.dir(req.user)
    if req.user?
      res.status(200).send(req.user.populate("createdJobs"))
    else
      res.send(403)
  
 title: "Blabla",
 description: "Ovo je description",
 materialProvider: "Customer",
 budget: 50000,
 address: {
 	zip: 11000,
 	line1: "Holy Shit",
 	line2: "True Det"
 },
 category: "Cars",
 subcategory: "Driver",
 dateFrom: new Date(),
 dateTo: new Date()