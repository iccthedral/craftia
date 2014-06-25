define(["./cmodule"], function(cmodule) {
  var AnonCtrl;
  AnonCtrl = (function() {
    function AnonCtrl() {
      this.slide = {
        images: ["img/carousel/Franchise-Handwerk.jpg"]
      };
    }

    return AnonCtrl;

  })();
  return (cmodule(AnonCtrl)).instance;
});
