(function() {
	"use strict";
	var serviceId = "gmaps";
	var app = angular.module("app");

	app.service(serviceId, [function() {
		var gmaps = {};

		window["initializeGmaps"] = function (data) {
	        gmaps.directionsDisplay = null;
	        gmaps.directionsService = new google.maps.DirectionsService();
	        gmaps.map = null;
	        gmaps.directionsDisplay = new google.maps.DirectionsRenderer();
	        // var chicago = new google.maps.LatLng(41.850033, -87.6500523);
	    }

	    gmaps.initGmapsAPI = function() {
	        var prom = ($.ajax({
	            url: "http://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC8x39I4Aa4jYbZuTGkoGlFm5Cm4sZD1E0&sensor=false&callback=initializeGmaps",
	            dataType: "jsonp",
	            jsonp: "initializeGmaps",
	            success: function (data) {}
	        }));
	        return prom;
	    }

		gmaps.calcRoute = function (start, end) {
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            var mapOptions = {
	            zoom: 7
	        }
	        gmaps.map_canvas = $(document.getElementById('map-canvas'));
	        gmaps.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	        gmaps.directionsDisplay.setMap(gmaps.map);
            gmaps.directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                  	gmaps.directionsDisplay.setDirections(response);
                  	gmaps.map_canvas.show();
                }
            });
        }

	    return gmaps;
	}]);
})();