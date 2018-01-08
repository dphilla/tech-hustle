
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const nav =  require('./NavHelper')


class Nav extends Component {
  render() {
    return (
      <div
        onLoad={nav.navOperator}
       >
         <div>
        <div id="nav-trigger" className="nav-trigger open">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
        <nav id="nav" className="out">
          <ul>
            <li><span className="nav-label"><a href="/dashboard">dashboard</a></span></li>
            <li><span className="nav-label"><a href="/analytics">analytics</a></span></li>
            <li><span className="nav-label"><a href="/contacts">contacts</a></span></li>
            <li><span className="nav-label"><a href="/users">users</a></span></li>
          </ul>
        </nav>
      </div>
      </div>
    )
  }
}

export default Nav;
