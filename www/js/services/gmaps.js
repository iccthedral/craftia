define(["./module", "gmaps"], function(module, GMaps) {
  var map;
  map = null;
  return module.service("gmaps", function() {
    return {
      getCoordinate: function(_arg) {
        var address, container, done;
        address = _arg.address, container = _arg.container, done = _arg.done;
        return GMaps.geocode({
          address: address,
          callback: function(results, status) {
            var coordinates, latlng;
            if (status !== "OK") {
              return typeof done === "function" ? done(status) : void 0;
            }
            latlng = results[0].geometry.location;
            coordinates = {};
            coordinates.lat = latlng.lat();
            coordinates.lng = latlng.lng();
            return coordinates;
          }
        });
      },
      showAddress: function(_arg) {
        var address, container, done;
        address = _arg.address, container = _arg.container, done = _arg.done;
        map = new GMaps({
          div: container,
          lat: 0,
          lng: 0
        });
        GMaps.geocode({
          address: address,
          callback: function(results, status) {
            var lat, latlng, lng;
            if (status !== "OK") {
              return typeof done === "function" ? done(status) : void 0;
            }
            latlng = results[0].geometry.location;
            lat = latlng.lat();
            lng = latlng.lng();
            map.lat = lat;
            map.lng = lng;
            return map.setCenter(lat, lng, function() {
              map.addMarker({
                lat: lat,
                lng: lng,
                title: 'Job',
                infoWindow: {
                  content: '<div class="info-window-div"><p>Map center</p></div>'
                }
              });
              return typeof done === "function" ? done(status, map) : void 0;
            });
          }
        });
        console.log(map.lat);
        return map;
      },
      newMarker: function(_arg) {
        var address, done, map;
        address = _arg.address, map = _arg.map, done = _arg.done;
        GMaps.geocode({
          address: address,
          callback: function(results, status) {
            var lat, latlng, lng;
            if (status !== "OK") {
              return typeof done === "function" ? done(status) : void 0;
            }
            latlng = results[0].geometry.location;
            lat = latlng.lat();
            lng = latlng.lng();
            return map.addMarker({
              lat: lat,
              lng: lng,
              infoWindow: {
                content: '<p>{{address}}</p>'
              }
            });
          }
        });
        return map;
      },
      showRoute: function(routeA, routeB) {
        return "";
      }
    };
  });
});
