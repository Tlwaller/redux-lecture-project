import React, { Component } from 'react';
import './App.css';
import {Route, HashRouter} from 'react-router-dom'
import Profile from './components/Profile'
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route path='/profile' component={Profile} />
          <Route exact path='/' component={Login} /> 
        </HashRouter>
      </div>
    );
  }
}

export default App;
