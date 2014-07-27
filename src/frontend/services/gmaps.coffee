define ["./module", "gmaps"], (module, GMaps) ->
	map = null
	module.service "gmaps", ->
		return {

			getCoordinate: ({address, container, done}) ->
				GMaps.geocode {
					address: address
					callback: (results, status) ->
						return done?(status) unless status is "OK"
						latlng = results[0].geometry.location
						coordinates = {}
						coordinates.lat = latlng.lat()
						coordinates.lng = latlng.lng()
						return coordinates
				}

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
						lng = latlng.lng()
						map.lat = lat
						map.lng = lng
						console.log address, "Job address"
						console.log map.lat, "Job lat"
						console.log map.lng, "Job lat"
						alert "The coordinates for your address are: \n" + lat+ "\n" + lng
						map.setCenter lat, lng, ->
							map.addMarker {
								lat:lat, 
								lng: lng, 
								title: 'Job', 
								infoWindow: {
									content: '<p>Is this the right location?</p>'
								}	
							}
							done? status, map
				}
				console.log map.lat
				return map

			newMarker: ({address, map, done}) ->
				GMaps.geocode {
					address: address
					callback: (results, status) ->
						return done?(status) unless status is "OK"
						latlng = results[0].geometry.location
						lat = latlng.lat()
						lng = latlng.lng()
						console.log address, "Home address"
						console.log lat, "Home lat"
						console.log lng, "Home long"
						map.addMarker {lat:lat, lng: lng, infoWindow: {
							content: '<p>This is your address</p>'
						}}
				}
				return map


			showRoute: (routeA, routeB) ->
				return ""	
		}