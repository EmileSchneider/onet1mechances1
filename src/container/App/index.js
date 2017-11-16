import React, { Component } from 'react';
import './App.css';

import UnderConstruction from '../../presentational/UnderConstruction';
import Shop from '../Shop';

class App extends Component {
  constructor(props) {
      super(props); // remember we are inheriting from Component. We still want to call the parent initializer
  }

  render() {
    return (
      <div>
        <Shop/>
      </div>
    );
  }
}

export default App;
