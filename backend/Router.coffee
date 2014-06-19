wrench 		= require("wrench")
module.exports = (app, passport) ->
	# Loads all controllers recursively!
	wrench.readdirSyncRecursive("./backend/controllers")
	.filter (cntrl) -> 
		return cntrl.endsWith(".js")
	.forEach (cntl) ->
		require("../backend/controllers/#{cntl}").setup(app)
