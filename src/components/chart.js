import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Chart } from "react-google-charts";

export default class MyChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
<div>
<h1>Chart....</h1>

<Chart
          chartType="ScatterChart"
          data={[["Age", "Weight"], [4, 5.5],[5, 6.5], [8, 12]]}
          width="100%"
          height="400px"
          legendToggle
        />
</div>
    )}


}