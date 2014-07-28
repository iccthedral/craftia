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

						map.setCenter lat, lng, ->
							map.addMarker {
								lat:lat, 
								lng: lng, 
								title: 'Job', 
								infoWindow: {
									content: '<div class="info-window-div"><p>Map center</p></div>'
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
						map.addMarker {lat:lat, lng: lng, infoWindow: {
							content: '<p>{{address}}</p>'
						}}
				}
				return map


			showRoute: (routeA, routeB) ->
				return ""	
		}