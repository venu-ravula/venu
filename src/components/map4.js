/*global google*/
import * as React from "react";
import { render } from "react-dom";
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

 
export default class Map extends React.Component {
    componentDidMount(){
        
    }
  render() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidmVudWdvcGFhbCIsImEiOiJjazNmZml1bmYwM3FpM25vemh3cnlmOXR0In0.AdnqIyCvzVQYas34CcDwvg';



    var map = new mapboxgl.Map({
        container: 'root',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [75.420679, 24.772537],
        minZoom: 2,
        zoom: 3
        });
        var zoomThreshold = 4;
        map.on('load', function() {
         
        map.addSource('population', {
        'type': 'vector',
        //'url': 'mapbox://mapbox.660ui7x6'
        "data": {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [74.0323, 25.9131]
            },
            "properties": {
                "title": "Mapbox DC",
                "marker-symbol": "monument"
            }
        }
        });
         
        map.addLayer({
        'id': 'state-population',
        'source': 'population',
        'source-layer': 'state_county_population_2014_cen',
        'maxzoom': zoomThreshold,
        'type': 'fill',
        'filter': ['==', 'isState', true],
        'paint': {
        'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'population'],
        0, '#F2F12D',
        500000, '#EED322',
        750000, '#E6B71E',
        1000000, '#DA9C20',
        2500000, '#CA8323',
        5000000, '#B86B25',
        7500000, '#A25626',
        10000000, '#8B4225',
        25000000, '#723122'
        ],
        'fill-opacity': 0.75
        }
        }, 'waterway-label');
         
        map.addLayer({
        'id': 'county-population',
        'source': 'population',
        'source-layer': 'state_county_population_2014_cen',
        'minzoom': zoomThreshold,
        'type': 'fill',
        'filter': ['==', 'isCounty', true],
        'paint': {
        'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'population'],
        0, '#F2F12D',
        100, '#EED322',
        1000, '#E6B71E',
        5000, '#DA9C20',
        10000, '#CA8323',
        50000, '#B86B25',
        100000, '#A25626',
        500000, '#8B4225',
        1000000, '#723122'
        ],
        'fill-opacity': 0.75
        }
        }, 'waterway-label');
         
        });
         
        var stateLegendEl = document.getElementById('state-legend');
        var countyLegendEl = document.getElementById('county-legend');
        map.on('zoom', function() {
        if (map.getZoom() > zoomThreshold) {
        //stateLegendEl.style.display = 'none';
        //countyLegendEl.style.display = 'block';
        } else {
        //stateLegendEl.style.display = 'block';
        //countyLegendEl.style.display = 'none';
        }
        });
         
    
    return(
        <div>
<div id='map'></div>
<div class='map-overlay' id='features'><h2>US population density</h2><div id='pd'><p>Hover over a state!</p></div></div>
<div class='map-overlay' id='legend'></div>      
      </div>
    )
  }
}