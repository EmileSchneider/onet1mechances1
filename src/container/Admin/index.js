import React, { Component } from 'react';

import Item from '../../presentational/Item';
import Itemeditor from '../../presentational/Itemeditor2';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import json from '../../watches.json';
var writeJson = require('write-json');

class Admin extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      file: "",
      price: "",
      description: "",
      deliverytime: 0
    }
    this.setTheState = this.setTheState.bind(this)
    console.log(json);

  }
  addItemToJsonFile(item) {
    if(item.name != undefined){
    let o = Object.assign({}, json)
    o.Items.push(item);
    writeJson('../../watches.json', o, function(err) {
      console.log(err);
    });
  }

  }
  setTheState(value) {
    this.setState(value);
  }

  render(){
    return(
      <div>
        <AppBar title="Administration Page"/>
        <Grid>
          <Row>
            <Col lg={6}>
              <Itemeditor f={ this.setTheState }/>
            </Col>
            <Col lg={6}>
              <Item object={this.state}/>
              <RaisedButton primary={true} onClick={()=>{
                this.addItemToJsonFile(this.state)
              } }label="add Item to the list" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Admin;
