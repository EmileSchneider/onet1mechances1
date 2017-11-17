import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// import store from '../../store';
// import { setName } from '../../store/actions.js';

import './index.css'

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
    this.descriptionHandleSubmit = this.descriptionHandleSubmit.bind(this);

    this.priceHandleChange = this.priceHandleChange.bind(this);
    this.priceHandleSubmit = this.priceHandleSubmit.bind(this);

    this.fileHandleChange = this.fileHandleChange.bind(this);
    this.fileHandleSubmit = this.fileHandleSubmit.bind(this);

    this.nameHandleChange = this.nameHandleChange.bind(this);
    this.nameHandleSubmit = this.nameHandleSubmit.bind(this);

  }

  descriptionHandleChange(event) {
    this.setState({description: event.target.value});
  }

  descriptionHandleSubmit(event) {
    this.props.f(event, {description: this.state.description})
    event.preventDefault();
  }


  priceHandleChange(event) {
    this.setState({price: event.target.value});
  }

  priceHandleSubmit(event) {
    this.props.f(event, {price: this.state.price})
    event.preventDefault();
  }


  fileHandleChange(event) {
    this.setState({file: event.target.value});
  }

  fileHandleSubmit(event) {
    this.props.f(event, {file: this.state.file})
    event.preventDefault();
  }


  nameHandleChange(event) {
    this.setState({name: event.target.value});
  }

  nameHandleSubmit(event) {
    this.props.f(event, {name: this.state.name})
    event.preventDefault();
  }


  render(){
    return(
      <div>
      <Card className="ItemCard">

      <CardHeader>
        <form onSubmit={this.nameHandleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.nameHandleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </CardHeader>
        <CardMedia
          overlay={"soone"}
        >

          <img src="http://via.placeholder.com/350x350" alt='we are working on putting an here'/>

        </CardMedia>
        <form onSubmit={this.fileHandleSubmit}>
        <label>
        file:
        <input type="text" onChange={this.fileHandleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        <CardTitle title={"Price"} subtitle={"soone" } />

        <form onSubmit={this.priceHandleSubmit}>
        <label>
          price:
          <input type="text" onChange={this.priceHandleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>

        <CardText>


        <form onSubmit={this.descriptionHandleSubmit}>
        <label>
          description:
          <input type="text" onChange={this.descriptionHandleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>


        </CardText>
        <CardActions>
          <FlatButton label="Instant Buy" />
        </CardActions>
      </Card>

      </div>
    );
  }
}
export default Itemeditor;
