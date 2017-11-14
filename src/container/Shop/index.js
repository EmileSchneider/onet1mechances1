import React, { Component } from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';

import Item from '../../presentational/Item';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

class Shop extends Component {
  render() {
    return(
      <div>
        <Tabs>
          <Tab label="Buy Watches">
            <Grid fluid={true}>
              <Row>
                {
                  this.props.items.map( (item, index) => {
                    return(
                      <Col lg={3}>
                        <Item title={ item.name } description={ item.description } src={ item.file } price={ item.price }/>
                      </Col>
                    );
                  })
                }
              </Row>
            </Grid>
          </Tab>
          <Tab label="Other Stuff">
            <div>

            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
export default Shop;
