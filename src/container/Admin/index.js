import React, { Component } from 'react';

import Item from '../../presentational/Item';
import Itemeditor from '../../presentational/Itemeditor';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import AppBar from 'material-ui/AppBar';

class Admin extends Component {
  constructor(props){
    super(props);

    this.state = {
      src: '',
      title: '',
      subtitle: '',
      description: ''
    }

    this.addSrc = (src) {
      let s = this.getState();
      s.src = src;
      this.setState(s);
    }
  }

  render(){
    return(
      <div>
        <AppBar title="Administration Page"/>
        <Grid>
          <Row>
            <Col lg={6}>
              <Itemeditor/>
            </Col>
            <Col lg={6}>
              <Item/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Admin;
