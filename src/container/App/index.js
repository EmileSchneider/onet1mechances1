import React, { Component } from 'react';
import './App.css';

import UnderConstruction from '../../presentational/UnderConstruction';
import Shop from '../Shop';

class App extends Component {
  constructor(props) {
      super(props); // remember we are inheriting from Component. We still want to call the parent initializer

      this.state = {
        Items: [
          {
            name: "cool watch",
            file: "https://ae01.alicdn.com/kf/HTB1d6ypRVXXXXcXXFXXq6xXFXXXW/Xiaomi-Amazfit-Smart-Sportuhr-1-34-inchTouch-screen-GPS-Rekord-Zirkonia-Keramik-Pulsmesser-Speichern-musik-GlobalVersion.jpg_640x640.jpg_.webp",
            price: "25$",
            description: "Hello World this is a watch, wanna buy?",
            deliverytime: 21
          },
          {
            name: "good watch",
            file: "https://ae01.alicdn.com/kf/HTB1Ya2.QFXXXXbOXXXXq6xXFXXX0/SmartWatch-New-SKMEI-Marke-Bluetooth-Kalorien-Schrittz-hler-Mode-Uhren-M-nner-50-Mt-Wasserdichte-Digital.jpg_640x640.jpg_.webp",
            price: "22$",
            description: "Hello World this is a good watch, buy!",
            deliverytime: 12
          },
          {
            name: "really good watch",
            file: "https://ae01.alicdn.com/kf/HTB1KAMjSpXXXXaDXpXXq6xXFXXXv/Bluetooth-GPS-frauen-uhr-herrenuhr-Smart-Armband-Pulsmesser-IP68-Sport-Fitness-Braccialetto-Inseguitore-Smartband.jpg_640x640.jpg_.webp",
            price: "75$",
            description: "YOU NEED THIS WATCH IN YOUR LIFE!",
            deliverytime: 13
          }
        ]
      }; // that's it :)
    }

  render() {
    return (
      <div>
        <Shop items={ this.state.Items } />
      </div>
    );
  }
}

export default App;
