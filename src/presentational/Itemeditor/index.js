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
          <img/>
        </CardMedia>
        <CardTitle title={ <input/> } subtitle={ <input/> } />
        <CardText>
          <input width="48" height="48"/>
        </CardText>
        <CardActions>
          <FlatButton label="Instant Buy" />
        </CardActions>
      </Card>
    );
  }
}
export default Itemeditor;
