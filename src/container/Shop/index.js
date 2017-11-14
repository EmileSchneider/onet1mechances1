import React, { Component } from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';

import Item from '../../presentational/Item';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

import TextField from 'material-ui/TextField';


class Shop extends Component {
  constructor(props){
    super(props);

    this.b = {
      name: "new Watch",
      file: "https://ae01.alicdn.com/kf/HTB1d6ypRVXXXXcXXFXXq6xXFXXXW/Xiaomi-Amazfit-Smart-Sportuhr-1-34-inchTouch-screen-GPS-Rekord-Zirkonia-Keramik-Pulsmesser-Speichern-musik-GlobalVersion.jpg_640x640.jpg_.webp",
      price: "25333333$",
      description: "new watch was added to the list",
      deliverytime: 21
    }
  }
  render() {
    return(
      <div>
      <AppBar
        title="WatchShopPro24"
      />
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
              <TextField
                hintText="Insert Watch Name"
              />
              <TextField
                hintText="Insert link to image (rightclick => open image in new tag => copy url)"
              />
              <TextField
                hintText="Price of watch with $"
              />
              <TextField
                hintText="description of watch"
              />
              <input type="btn" onClick={ () => this.props.addItem(this.b) } />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
export default Shop;
