import React, { Component } from 'react';

import './index.css';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadow: 1,
      name: "",
      file: "",
      price: "",
      description: "",
      deliverytime: "X"
     }
  }

  onMouseOver = () => {
    this.setState(this.props.object)
    this.setState({ shadow: 5 });
  }
  onMouseOut = () => this.setState({ shadow: 1 });

  render() {
    return(
        <Card className="ItemCard"
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
            zDepth={this.state.shadow}
        >
          <CardHeader>
            {this.state.name}
          </CardHeader>
          <CardMedia>
            <img src={ this.state.file } alt="1Time Chance! Hover me!" />
          </CardMedia>
          <CardTitle title={ this.state.price } />
          <CardText>
            {
              this.state.description
            }
          </CardText>
          <CardActions>
            <FlatButton label={"Instant Buy and get it in " + this.state.deliverytime + " days" }/>
          </CardActions>
        </Card>
    );
  }
}
export default Item;
