define(["./module", "gmaps"], function(module, GMaps) {
  var map;
  map = null;
  return module.service("gmaps", function() {
    return {
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
            var lat, latlng, long;
            if (status !== "OK") {
              return typeof done === "function" ? done(status) : void 0;
            }
            latlng = results[0].geometry.location;
            lat = latlng.lat();
            long = latlng.lng();
            return map.setCenter(lat, long, function() {
              map.addMarker({
                lat: lat,
                lng: long
              });
              return typeof done === "function" ? done(status, map) : void 0;
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
