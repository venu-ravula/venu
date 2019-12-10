/*global google*/
import { render } from 'react-dom';
import React from "react"


export default class Maps extends React.Component {
    render() {


        google.load('visualization', '1', {'packages': ['geochart']});
        google.setOnLoadCallback(drawVisualization);
        
        function drawVisualization() {
        
        var data = new google.visualization.DataTable();
        
        data.addColumn('string', 'City');
        data.addColumn('number', 'Value'); 
        
        data.addColumn({type:'string', role:'tooltip'});
        var ivalue = new Array();
        
        data.addRows([[{v:'IN-AP',f:'AP'}, 1,'1']]);
        ivalue['IN-AP'] = 'http://en.wikipedia.org/wiki/Krishna_district';
        
        data.addRows([[{v:'IN-AR',f:'Arunachal Pradesh'},4,'4']]);
        ivalue['IN-AR'] = 'http://en.wikipedia.org/wiki/Arunachal_Pradesh';
        
        data.addRows([[{v:'IN-AS',f:'Assam'},2,'2']]);
        ivalue['IN-AS'] = 'http://en.wikipedia.org/wiki/Assam';
        
        data.addRows([[{v:'IN-BR',f:'Bihar'},3,'3']]);
        ivalue['IN-BR'] = 'http://en.wikipedia.org/wiki/Bihar';
        
        data.addRows([[{v:'IN-CT',f:'Chhattisgarh'},4,'4']]);
        ivalue['IN-CT'] = 'http://en.wikipedia.org/wiki/Chhattisgarh';
        
        data.addRows([[{v:'IN-GA',f:'Goa'},5,'5']]);
        ivalue['IN-GA'] = 'http://en.wikipedia.org/wiki/Goa';
        
        data.addRows([[{v:'IN-GJ',f:'Gujarat'},6,'6']]);
        ivalue['IN-GJ'] = 'http://en.wikipedia.org/wiki/Gujarat';
        
        data.addRows([[{v:'IN-HR',f:'Haryana'},7,'7']]);
        ivalue['IN-HR'] = 'http://en.wikipedia.org/wiki/Haryana';
        
        data.addRows([[{v:'IN-HP',f:'Himachal Pradesh'},7,'3']]);
        ivalue['IN-HP'] = 'http://en.wikipedia.org/wiki/Himachal_Pradesh';
        
        data.addRows([[{v:'IN-JK',f:'Jammu and Kashmir'},3,'3']]);
        ivalue['IN-JK'] = 'http://en.wikipedia.org/wiki/Jammu_and_Kashmir';
        
        data.addRows([[{v:'IN-JH',f:'Jharkhand'},4,'4']]);
        ivalue['IN-JH'] = 'http://en.wikipedia.org/wiki/Jharkhand';
        
        data.addRows([[{v:'IN-KA',f:'Karnataka'},8,'8']]);
        ivalue['IN-KA'] = 'http://en.wikipedia.org/wiki/Karnataka';
        
        data.addRows([[{v:'IN-KL',f:'Kerala'},7,'7']]);
        ivalue['IN-KL'] = 'http://en.wikipedia.org/wiki/Kerala';
        
        data.addRows([[{v:'IN-MP',f:'Madhya Pradesh'},8,'8']]);
        ivalue['IN-MP'] = 'http://en.wikipedia.org/wiki/Madhya_Pradesh';
        
        data.addRows([[{v:'IN-MH',f:'Maharashtra'},9,'9']]);
        ivalue['IN-MH'] = 'http://en.wikipedia.org/wiki/Maharashtra';
        
        data.addRows([[{v:'IN-MN',f:'Manipur'},7,'7']]);
        ivalue['IN-MN'] = 'http://en.wikipedia.org/wiki/Manipur';
        
        data.addRows([[{v:'IN-ML',f:'Meghalaya'},4,'4']]);
        ivalue['IN-ML'] = 'http://en.wikipedia.org/wiki/Meghalaya';
        
        data.addRows([[{v:'IN-MZ',f:'Mizoram'},3,'3']]);
        ivalue['IN-MZ'] = 'http://en.wikipedia.org/wiki/Mizoram';
        
        data.addRows([[{v:'IN-NL',f:'Nagaland'},2,'2']]);
        ivalue['IN-NL'] = 'http://en.wikipedia.org/wiki/Nagaland';
        
        data.addRows([[{v:'IN-OR',f:'Orissa'},4,'4']]);
        ivalue['IN-OR'] = 'http://en.wikipedia.org/wiki/Orissa';
        
        data.addRows([[{v:'IN-PB',f:'Punjab'},5,'5']]);
        ivalue['IN-PB'] = 'http://en.wikipedia.org/wiki/Punjab';
        
        data.addRows([[{v:'IN-RJ',f:'Rajasthan'},7,'7']]);
        ivalue['IN-RJ'] = 'http://en.wikipedia.org/wiki/Rajasthan';
        
        data.addRows([[{v:'IN-SK',f:'Sikkim'},4,'4']]);
        ivalue['IN-SK'] = 'http://en.wikipedia.org/wiki/Sikkim';
        
        data.addRows([[{v:'IN-TN',f:'Tamil Nadu'},8,'8']]);
        ivalue['IN-TN'] = 'http://en.wikipedia.org/wiki/Tamil_Nadu';
        
        data.addRows([[{v:'IN-TR',f:'Tripura'},3,'3']]);
        ivalue['IN-TR'] = 'http://en.wikipedia.org/wiki/Tripura';
        
        data.addRows([[{v:'IN-UT',f:'Uttarakhand'},4,'4']]);
        ivalue['IN-UT'] = 'http://en.wikipedia.org/wiki/Uttarakhand';
        
        data.addRows([[{v:'IN-UP',f:'Uttar Pradesh'},8,'8']]);
        ivalue['IN-UP'] = 'http://en.wikipedia.org/wiki/Uttar_Pradesh';
        
        data.addRows([[{v:'IN-WB',f:'West Bengal'},7,'7']]);
        ivalue['IN-WB'] = 'http://en.wikipedia.org/wiki/West_Bengal';
        
        data.addRows([[{v:'IN-AN',f:'Andaman and Nicobar Islands'},2,'2']]);
        ivalue['IN-AN'] = 'http://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands';
        
        data.addRows([[{v:'IN-CH',f:'Chandigarh'},6,'6']]);
        ivalue['IN-CH'] = 'http://en.wikipedia.org/wiki/Chandigarh';
        
        data.addRows([[{v:'IN-DN',f:'Dadra and Nagar Haveli'},4,'4']]);
        ivalue['IN-DN'] = 'http://en.wikipedia.org/wiki/Dadra_and_Nagar_Haveli';
        
        data.addRows([[{v:'IN-DD',f:'Daman and Diu'},2,'2']]);
        ivalue['IN-DD'] = 'http://en.wikipedia.org/wiki/Daman_and_Diu';
        
        data.addRows([[{v:'IN-DL',f:'Delhi'},10,'10']]);
        ivalue['IN-DL'] = 'http://en.wikipedia.org/wiki/Delhi';
        
        data.addRows([[{v:'IN-LD',f:'Lakshadweep'},1,'1']]);
        ivalue['IN-LD'] = 'http://en.wikipedia.org/wiki/Lakshadweep';
        
        data.addRows([[{v:'IN-PY',f:'Puducherry (Pondicherry)'},6,'6']]);
        ivalue['IN-PY'] = 'http://en.wikipedia.org/wiki/Puducherry';
        
        
        var options = {
        backgroundColor: {fill:'#FFFFFF',stroke:'#FFFFFF' ,strokeWidth:0 },
        colorAxis: {colors: ['yellow','orange', 'red']},
        backgroundColor: {fill:'#FFFFFF',stroke:'#FFFFFF' ,strokeWidth:0 }, 
        datalessRegionColor: '#FFFFFF',
        displayMode: 'regions', 
        enableRegionInteractivity: 'true', 
        resolution: 'provinces',
        magnifyingGlass:{enable: true, zoomFactor:100},
        sizeAxis: {minValue: 50, maxValue:50,minSize:100,  maxSize: 100},
        region:'IN',
        keepAspectRatio: true,
        width:800,
        height:500,
        tooltip: {textStyle: {color: '#444444'}, trigger:'focus'}
        };
        
        var chart = new google.visualization.GeoChart(document.getElementById('visualization')); 
        google.visualization.events.addListener(chart, 'select', function() {
        var selection = chart.getSelection();
        if (selection.length == 1) {
        var selectedRow = selection[0].row;
        var selectedRegion = data.getValue(selectedRow, 0);
        if(ivalue[selectedRegion] != '') { window.open(ivalue[selectedRegion]);  }
        }
        });
        chart.draw(data, options);
        }

        return (
            <div id="visualization" style={{width: "700px", height: "433px"}}></div>
        )
    }
}