define ["./cmodule"], (cmodule) ->

	class AnonCtrl
		constructor: ->
			@slide =
				images: ["img/carousel/Franchise-Handwerk.jpg"]
   	
	return (cmodule AnonCtrl).instance