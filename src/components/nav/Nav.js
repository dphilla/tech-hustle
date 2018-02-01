
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginWithLinkedin from '../authentication/Linkedin';
import Logout from '../authentication/Logout';


class Nav extends Component {
  render() {
    if (document.cookie === "") {
      return (
        <div
         >
           <nav id="navigationBar">
            <ul>
              <li>
                <div className="link">
                  <LoginWithLinkedin current_user={this.props.current_user}/>
                </div>
              </li>
              <li>
                <a href="/" className="link">Home</a>
              </li>
              <li>
                <a href="/analytics" className="link">Analytics</a>
              </li>
              <li>
                <a href="/contacts" className="link">Contacts</a>
              </li>
              <li>
                <a href="/events" className="link">Events</a>
              </li>
              <li>
                <a href="/users" className="link">Your Info</a>
              </li>
            </ul>
          </nav>

        </div>
      )
    }
    else {
      return (
        <div
         >
           <nav id="navigationBar">
            <ul>
              <li>
                <div className="link">
                  <Logout current_user={this.props.current_user}/>
                </div>
              </li>
              <li>
                <a href="/" className="link">Home</a>
              </li>
              <li>
                <a href="/analytics" className="link">Analytics</a>
              </li>
              <li>
                <a href="/contacts" className="link">Contacts</a>
              </li>
              <li>
                <a href="/events" className="link">Events</a>
              </li>
              <li>
                <a href="/users" className="link">Your Info</a>
              </li>
            </ul>
          </nav>

        </div>
      )
    }
  }
}

export default Nav;
