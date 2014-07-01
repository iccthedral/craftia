wrench 		= require("wrench")
module.exports = (app, passport) ->
	# Loads all controllers recursively!
	wrench.readdirSyncRecursive("./src/backend/controllers")
	.filter (cntrl) -> 
		return cntrl.endsWith(".coffee")
	.forEach (cntl) ->
		require("./controllers/#{cntl}").setup(app)
