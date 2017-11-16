import React, { Component } from 'react';

import './index.css';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { shadow: 1 }
  }

  onMouseOver = () => this.setState({ shadow: 5 });
  onMouseOut = () => this.setState({ shadow: 1 });

  render() {
    return(
        <Card className="ItemCard"
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
            zDepth={this.state.shadow}
        >
          <CardHeader>
            {this.props.title}
          </CardHeader>
          <CardMedia>
            <img src={ this.props.src } alt="well its missing..." />
          </CardMedia>
          <CardTitle title={ this.props.price } />
          <CardText>
            {
              this.props.description
            }
          </CardText>
          <CardActions>
            <FlatButton label={"Instant Buy and get it in " + this.props.deliverytime + " days" }/>
          </CardActions>
        </Card>
    );
  }
}
export default Item;
