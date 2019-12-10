/*global google*/
import * as React from "react";
import { render } from "react-dom";
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

 
export default class Map extends React.Component {
  render() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidmVudWdvcGFhbCIsImEiOiJjazNmZml1bmYwM3FpM25vemh3cnlmOXR0In0.AdnqIyCvzVQYas34CcDwvg';
var map = new mapboxgl.Map({
container: 'root',
style: 'mapbox://styles/mapbox/streets-v10',
zoom: 13,
center: [-122.447303, 37.753574]
});
 
map.on('load', function () {
 
/* Sample feature from the `examples.8fgz4egr` tileset:
{
"type": "Feature",
"properties": {
"ethnicity": "White"
},
"geometry": {
"type": "Point",
"coordinates": [ -122.447303, 37.753574 ]
}
}
*/
map.addLayer({
'id': 'population',
'type': 'circle',
'source': {
type: 'vector',
url: 'mapbox://examples.8fgz4egr'
},
'source-layer': 'sf2010',
'paint': {
// make circles larger as the user zooms from z12 to z22
'circle-radius': {
'base': 1.75,
'stops': [[12, 2], [22, 180]]
},
// color circles by ethnicity, using a match expression
// https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
'circle-color': [
'match',
['get', 'ethnicity'],
'White', '#fbb03b',
'Black', '#223b53',
'Hispanic', '#e55e5e',
'Asian', '#3bb2d0',
/* other */ '#ccc'
]
}
});
});
    return(
      <div id="maps" style={{width: "50%", height: "900px" }}>
      
      </div>
    )
  }
}