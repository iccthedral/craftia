define ["./module", "gmaps"], (module, GMaps) ->
	map = null
	module.service "gmaps", ->
		return {
			showAddress: ({address, container, done}) ->
				map = new GMaps {
					div: container
					lat: 0
					lng: 0
				}

				GMaps.geocode {
					address: address
					callback: (results, status) ->
						return done?(status) unless status is "OK"
						latlng = results[0].geometry.location
						lat = latlng.lat()
						long = latlng.lng()
						map.setCenter lat, long, ->
							map.addMarker {lat:lat, lng: long}
							done? status, map
				}

				return map

			showRoute: (routeA, routeB) ->
				return ""	
		}