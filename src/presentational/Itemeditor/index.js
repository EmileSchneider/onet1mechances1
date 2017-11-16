import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import store from '../../store';

import { setFile } from '../../store/actions.js';

class Itemeditor extends Component {
  handleChange(e){
    console.log(e);
    store.dispatch(setFile(e))
    console.log(store.getState().newItem);
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

        <CardTitle title={<input onClick={ this.handleChange("http://via.placeholder.com/350x550") }/>} subtitle={"soone" } />
        <CardText>
        </CardText>
        <CardActions>
          <FlatButton label="Instant Buy" />
        </CardActions>
      </Card>
      <FloatingActionButton onClick={this.props.f}>
        { "Add Item" }
      </FloatingActionButton>
      </div>
    );
  }
}
export default Itemeditor;
