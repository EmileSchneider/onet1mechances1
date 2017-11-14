import React,  { Component } from 'react';
import './index.css';

import Paper from 'material-ui/Paper';

class UnderConstruction extends Component {
  render() {
    return (
      <div className="UnderConstructionDiv">
        <Paper id="papier" zDepth={5}>
          <h1>Under Construction</h1>
          <p>Dear Visitor, we have groups of trained monekeys working really hard on providing you with our services</p>
        </Paper>
      </div>
    );
  }
}
export default UnderConstruction;
