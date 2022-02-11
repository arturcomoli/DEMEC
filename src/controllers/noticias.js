var noticias = tns({
  items: 1,
  controls: true,
  responsive: {
    //   "350": {
    //     "items": 3,
    //     "controls": true,
    //     "edgePadding": 0
    //   },
    500: {
      items: 3,
    },
  },
  container: ".container-noticias",
  slideBy: "page",
  swipeAngle: false,
  nav: false,
  arrowKeys: true,
  speed: 400,
  controls: true,
  controlsPosition: "bottom",
  controlsContainer: ".container-controller",
  gutter: 20,
  edgePadding: 50,
  // loop: false,
});

// console.log(slider.getInfo());
