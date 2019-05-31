import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import Profile from './screens/profile/Profile';

class Controller extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' render={({ history }, props) => <Login {...props} history={history} />} />
          <Route exact path='/home' render={({ history }, props) => <Home {...props} history={history} />} />
          <Route exact path='/profile' render={({ history }, props) => <Profile {...props} history={history} />} />
        </Router>
      </div>
    )
  }
}

export default Controller;