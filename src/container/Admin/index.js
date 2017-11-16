import React, { Component } from 'react';

import Item from '../../presentational/Item';
import Itemeditor from '../../presentational/Itemeditor';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import AppBar from 'material-ui/AppBar';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      title: '',
      price: '',
      description: ''
    }
    this.makeEdit = (isrc, ititle, iprice, idescription) => {
      this.setState({
        src: isrc,
        title: ititle,
        price: iprice,
        description: idescription
      })
    }
  }
  render(){
    return(
      <div>
        <AppBar title="Administration Page"/>
        <Grid>
          <Row>
            <Col lg={6}>
              <Itemeditor f={ this.makeEdit }/>
            </Col>
            <Col lg={6}>
              <Item src={ this.state.src } title={ this.state.title } price={ this.state.price } description={ this.state.description  }/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Admin;
