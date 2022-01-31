var noticias = tns({
    "items": 1,
    "controls": true,
    "responsive": {
    //   "350": {
    //     "items": 3,
    //     "controls": true,
    //     "edgePadding": 0
    //   },
      "500": {
        "items": 1
      }
    },
    "container": ".container-noticias",
    "swipeAngle": false,
    "nav": false,
    "arrowKeys": true,
    "speed": 400,
    "controlsPosition": "bottom",
    "controlsContainer": ".container-controller",
    // "gutter": 20
  });
  
  console.log(slider.getInfo())