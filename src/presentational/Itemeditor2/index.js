import React, { Component } from 'react';

import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import TextField from 'material-ui/TextField';

import './index.css'
class Itemeditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      file: '',
      description: ''
    }
    this.nameInState = this.nameInState.bind(this)
    this.priceInState = this.priceInState.bind(this)
    this.fileInState = this.fileInState.bind(this)
    this.descriptionInState = this.descriptionInState.bind(this)
  }

  nameInState(name) {
    this.setState({name: name})
  }
  priceInState(price){
    this.setState({price: price})
  }
  fileInState(file) {
    this.setState({file: file})
  }
  descriptionInState(description) {
    this.setState({description: description})
  }

  render(){
    return(
      <Card>
        <TextField id="name" hintText="Name"
          onChange={(event,value) => {
              this.nameInState(value);
          }} />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src="http://via.placeholder.com/350x350" alt="" />
      </CardMedia>
      <TextField id="file" hintText="file"
        onChange={(event,value) => {
            this.fileInState(value);
        }} />
      <br/>
      <TextField id="name" hintText="Price"
        onChange={(event,value) => {
            this.priceInState(value);
        }} />
      <br/>
      <TextField id="name" hintText="description"
        onChange={(event,value) => {
            this.descriptionInState(value);
        }} />
      <br/>
        <CardActions>
          <FlatButton label="Instant Buy No Regrets Orgasmic Afterlife" />
        </CardActions>
        <FloatingActionButton className="button" onClick={(event)=>{
          this.props.f(this.state)
        }} secondary={true} className="button">
          <p>Update Card</p>
        </FloatingActionButton>
      </Card>
    );
  }
}

export default Itemeditor;
