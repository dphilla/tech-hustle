import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Events from './components/events/Events'
import Contacts from './components/contacts/Contacts'
import Analytics from './components/analytics/Analytics'
const user = require('./actions/User')

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      current_user: user.getCurrentUserFromCookie()
    }
  }


  render() {
    return (
      <div className="App">
        <Nav current_user={this.state.current_user} />
      </div>
    );
  }
}

export default App;
