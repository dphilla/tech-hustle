
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginWithLinkedin from '../authentication/Linkedin';


class Nav extends Component {
  render() {
    return (
      <div
       >
         <nav id="navigationBar">
          <ul>
            <li>
              <div className="link">
                <LoginWithLinkedin />
              </div>
            </li>
            <li>
              <a href="/home" className="link">Home</a>
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
              <a href="/users" className="link">Users</a>
            </li>
          </ul>
        </nav>

      </div>
    )
  }
}

export default Nav;
