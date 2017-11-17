import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import EnterTextField from 'material-ui-submit-field';

// import store from '../../store';
// import { setName } from '../../store/actions.js';
import './index.css'

var fs = require('fs');


class Itemeditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      price: '',
      file: '',
      name: '',
    };

    this.descriptionHandleChange = this.descriptionHandleChange.bind(this);
    this.priceHandleChange = this.priceHandleChange.bind(this);
    this.fileHandleChange = this.fileHandleChange.bind(this);
    this.nameHandleChange = this.nameHandleChange.bind(this);


  }

  descriptionHandleChange(event) {
    console.log(event.target.value);
    this.setState({description: event.target.value});
    console.log(this.state);
    this.props.f({description: this.state.description})
  }


  priceHandleChange(event) {
    this.setState({price: event.target.value});
    this.props.f(event, {price: this.state.price})
    event.preventDefault();
  }


  fileHandleChange(event) {
    this.setState({file: event.target.value});
    this.props.f(event, {file: this.state.file})
    event.preventDefault();
  }


  nameHandleChange(event) {
    this.setState({name: event.target.value});
    this.props.f(event, {name: this.state.name})
    event.preventDefault();

  }

  render(){
    return(
      <div className="cardDiv">
      <Card>
        <EnterTextField className="ETF" id="name" hintText="name"
            onEnterKeyPress={(event) => this.nameHandleChange(event)} />
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="http://via.placeholder.com/350x350" alt="" />
        </CardMedia>
        <EnterTextField className="ETF" id="file" hintText="file"
            onEnterKeyPress={(event) => this.fileHandleChange(event)} />
            <br/>
        <EnterTextField className="ETF" hintText="Price" id="price"
            onEnterKeyPress={(event) => this.priceHandleChange(event)} />
            <br/>
        <EnterTextField className="ETF" id="text" hintText="description"
          onEnterKeyPress={(event) => this.descriptionHandleChange(event)}
        />
        <CardActions>
          <FlatButton label="Instant Buy No Regrets Orgasmic Afterlife" />
        </CardActions>
      </Card>
      </div>
    );
  }
}
export default Itemeditor;
