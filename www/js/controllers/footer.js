define(["./module"], function(module) {
  return module.controller("FooterCtrl", [
    function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
          $("footer").slideDown();
        }
        if ($(window).scrollTop() + $(window).height() < $(document).height() - 50) {
          $("footer").slideUp();
        }
        if ($(window).scrollTop() >= 300) {
          $("#navSubMenu").slideUp();
        }
        if ($(window).scrollTop() < 100) {
          return $("#navSubMenu").slideDown();
        }
      });
      return $(document).ready(function() {
        if ($("body").height() <= $(window).height()) {
          return $("footer").hide();
        } else {
          return $("footer").show();
        }
      });
    }
  ]);
});
