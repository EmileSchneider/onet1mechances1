import React, { Component } from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';

import Item from '../../presentational/Item';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import store from '../../store';

import data from '../../watches.json';

class Shop extends Component {
  render() {
    const state = data.Items
    return(
      <div>
      <AppBar
        title="WatchShopPro24"
      />
        <Tabs>
          <Tab label="Buy Watches">
            <Grid fluid={true}>
              <Row>
                <h1>
                  {
                    state.map( (item) => {
                      return(
                      <Col lg={3}>
                        <Item object={item}/>
                      </Col>
                      );
                    })
                  }
                </h1>
              </Row>
            </Grid>
          </Tab>
          <Tab label="Other Stuff">
            <Grid>
              <Row>
              </Row>
            </Grid>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
export default Shop;
