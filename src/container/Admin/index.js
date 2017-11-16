import React, { Component } from 'react';

import Item from '../../presentational/Item';
import Itemeditor from '../../presentational/Itemeditor';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import AppBar from 'material-ui/AppBar';

import store from '../../store';

class Admin extends Component {

  render(){
    return(
      <div>
        <AppBar title="Administration Page"/>
        <Grid>
          <Row>
            <Col lg={6}>
              <Itemeditor f={ this.addSrc }/>
            </Col>
            <Col lg={6}>
              <Item src={ store.getState().newItem.src } title={ store.getState().newItem.title } subtitle={ store.getState().newItem.subtitle } description={ store.getState().newItem.description }/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Admin;
