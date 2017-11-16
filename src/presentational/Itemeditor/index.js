import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import store from '../../store';

import { setName } from '../../store/actions.js';


class Itemeditor extends Component {
  constructor(props){
    super(props);

    this.handleClick = () => {
      store.dispatch(setName("namme"))
      console.log(store.getState());
    }
  }
  render(){
    return(
      <div>
      <Card className="ItemCard">
      <CardHeader>
      </CardHeader>
        <CardMedia
          overlay={"soone"}
        >
          <img src="http://via.placeholder.com/350x350" alt='we are working on putting an here'/>
        </CardMedia>

        <CardTitle title={<input />} subtitle={"soone" } />
        <CardText>
        </CardText>
        <CardActions>
          <FlatButton label="Instant Buy" />
        </CardActions>
      </Card>
      <FloatingActionButton onClick={ this.handleClick } >
        { "Add Item" }
      </FloatingActionButton>
      </div>
    );
  }
}
export default Itemeditor;
