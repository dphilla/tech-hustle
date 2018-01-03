import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Analytics from '../components/analytics/Analytics';
import Contacts from '../components/contacts/Contacts';
import Events from '../components/events/Events';
import Users from '../components/users/Users';
//import AuthenticationContainer from '../containers/AuthenticationContainer';
//import ManageContactsContainer from '../containers/ManageContactsContainer';
//import MobileNav from '../components/mobileNav/MobileNav';


        //<Route exact path="/" component={ AuthenticationContainer } />
        //<Route path="/contacts" component={ ManageContactsContainer } />
        //<Route path="/nav" component={ MobileNav } />

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Route exact path="/" component={ Home }/>
        <Route path="/analytics" component={ Analytics }/>
        <Route path="/contacts" component={ Contacts }/>
        <Route path="/events" component={ Events }/>
        <Route path="/users" component={ Users }/>
      </div>
    );
  }
}

export default Routes;

