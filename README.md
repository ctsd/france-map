# France map

JS plugin to easily embed maps of France.
Uses svg paths with [Raphael](https://github.com/DmitryBaranovskiy/raphael).
It can display either just the map of France, or regions (old and new ones), or departements.

## Install
You can install the package through bower:
```
bower install france-map
```

## Usage

- Include [Raphael](https://github.com/DmitryBaranovskiy/raphael) and france-map.min.js

- Define your map container in HTML
```
<div id="map" style="position: absolute; top: 0; left: 0; width: 750px;"></div>
```

- Init the map plugin
```
FranceMap.init('map', {
  'display': [
    {
      type: 'departements',
      fill: '#00CC00',
      stroke: '#FFFFFF',
      stroke_width: '1',
      onClick: function(dpt) {
        alert(dpt.zipcode + " - " + dpt.name);
      }
    }
  ]
});
```

See an exemple here: [test/index.html](https://github.com/ctsd/france-map/blob/master/test/index.html).

## Documentation

You can use these settings to custom the rendering of your map:
- `fill` : Fill color of the paths (hex)
- `stroke` : Color of the stroke (hex)
- `stroke_width` : Size of the stroke (px)
- `onClick` : Function to bind on click of a path

## Improvements leads
+ Locations defined by lat/lng
+ Animations
+ More paths effects
