import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './container/App';
import Admin from './container/Admin';

import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
<Provider store={ store }>
  <MuiThemeProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={ App } />
        <Route exact path="/admin" component={ Admin } />
      </Switch>
    </Router>
  </MuiThemeProvider>
</ Provider>,
  document.getElementById('root'));
registerServiceWorker();
