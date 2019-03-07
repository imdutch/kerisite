import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />}/>
          <Route exact path='/signin' render={props => <h1>Signin</h1>}/>
          <Route exact path='/register' render={props => <h1>Register</h1>}/>
        </Switch>
      </BrowserRouter>
  
    );
  }
}

export default App;
