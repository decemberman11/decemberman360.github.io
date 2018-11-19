$(document).ready(function() {
  $("#header, .info").ripples({
    dropRadius: 20,
    perturbance: 0.03
  });

  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
    // other options
  });
});

/* Slider*/

jQuery(document).ready(function() {
  "use strict";

  $("#slider-c").carouFredsel({
    responsive: true,
    width: "100%;",
    circular: true,

    scroll: {
      items: 1,
      duration: 500,
      pouseOnHover: true
    },

    auto: true,
    items: {
      visible: {
        min: 1,
        max: 1
      },

      height: "variable"
    },

    pagination: {
      container: ".sliderpager",
      pageAnchorBuilder: false
    }
  });
});
