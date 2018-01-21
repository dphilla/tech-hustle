import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Analytics from '../components/analytics/Analytics';
import Contacts from '../components/contacts/Contacts';
import Events from '../components/events/Events';
import Users from '../components/users/Users';
const user = require('../actions/User')




class Routes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      current_user: user.getCurrentUserFromCookie()
    }
  }

  render() {
    return (
      <div className="routes">
        <Route exact path="/" render={(routeProps) => ( <Home current_user={this.state.current_user} />)} />
        <Route path="/analytics" render={(routeProps) => ( <Analytics current_user={this.state.current_user} />)} />
        <Route path="/contacts" render={(routeProps) => ( <Contacts current_user={this.state.current_user} />)} />
        <Route path="/events" render={(routeProps) => ( <Events current_user={this.state.current_user} />)} />
        <Route path="/users" render={(routeProps) => ( <Users current_user={this.state.current_user} />)} />
      </div>
    );
  }
}

export default Routes;

