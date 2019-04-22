import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './screens/Home'
import Dashboard from "./screens/Dashboard"
import Profile from './screens/Profile'

import './styles/main.css'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userLoggedIn: false,
      user: {},
    }
  }

  logOut = () => {
    this.setState({
      userLoggedIn: false,
      user: {},
    })
  }

  render() {

    return (
      <div className='app-container'>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact render={() => (
              <Dashboard userLoggedIn={this.state.userLoggedIn} user={this.state.user}/>
          )}/>
          <Route path="/user/:userID" render={() => (
              <Profile logOut={this.logOut}/>
          )}/>
        </Router>
      </div>
    );
  }
}

export default App;
