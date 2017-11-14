import React, { Component } from 'react';

import './index.css';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Item extends Component {
  render() {
    return(
        <Card className="ItemCard">
          <CardMedia
            overlay={<CardTitle title={ this.props.description }/>}
          >
            <img src={ this.props.src } />
          </CardMedia>
          <CardTitle title={ this.props.title } subtitle={ this.props.price } />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Instant Buy" />
          </CardActions>
        </Card>
    );
  }
}
export default Item;
