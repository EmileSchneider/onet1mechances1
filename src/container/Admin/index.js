import React, { Component } from 'react';

import Item from '../../presentational/Item';
import Itemeditor from '../../presentational/Itemeditor';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import AppBar from 'material-ui/AppBar';

import store from '../../store';

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
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Admin;
