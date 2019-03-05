import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />}/>
        </Switch>
      </BrowserRouter>
  
    );
  }
}

export default App;
