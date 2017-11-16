import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Itemeditor extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <Card className="ItemCard">
        <CardMedia
          overlay={<input/>}
        >
          <img src={ this.props.src } />
          <input/>
        </CardMedia>
        <CardTitle title={ this.props.title } subtitle={ this.props.price } />
        <input/>
        <input/>
        <CardText>
          <input width="48" height="48"/>
        </CardText>
        <CardActions>
          <FlatButton label="Instant Buy" />
        </CardActions>
        {
          this.props.f("nope", "a edited watch", "25%", "das")
        }
      </Card>
    );
  }
}
export default Itemeditor;
