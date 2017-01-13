var FranceMapConfig = null;

function checkPathConfig(elem) {
  if (elem.fill == undefined)
    elem.fill = '#FFFFFF';
  if (elem.stroke == undefined)
    elem.stroke = '#000000';
  if (elem.stroke_width == undefined)
    elem.stroke_width = '1';
}

var FranceMap = {

  resizeElement: function(config) {
      var cfg = FranceMapConfig;
      var h = config.width * cfg.viewbox.height / cfg.viewbox.width;
      var e = document.getElementById(cfg.element.id);
      e.style.height = h;
  },

  init: function(elementID, config) {
    FranceMapConfig = config;

    config.element = {
      width: document.getElementById(elementID).clientWidth,
      height: document.getElementById(elementID).clientHeight,
      id: elementID,
    };

    config.viewbox = { width: 507, height: 553 };

    var rsr = Raphael(elementID);
    rsr.setSize('100%', '100%');
    rsr.canvas.setAttribute('preserveAspectRatio', 'xMidYMid');

    FranceMap.resizeElement({ width: config.width });

    config.display.every(function(elem) {

      switch (elem.type) {
        case "departements":
          checkPathConfig(elem);
          displayDepartements(rsr, elem, config);
          break;
        case "old-regions":
          checkPathConfig(elem);
          displayOldRegions(rsr, elem, config);
          break;
        case "regions":
          checkPathConfig(elem);
          displayRegions(rsr, elem, config);
          break;
        case "france":
          checkPathConfig(elem);
          displayFrance(rsr, elem, config);
          break;
      }

      return true;
    });

  }

};
