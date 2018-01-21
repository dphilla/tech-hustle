
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const user = require('../../actions/User')


class Logout extends Component {
  render() {
    return (
      <button
        onClick={user.endCurrentUser}
        className="linkedin-signin"
      >
        Logout
      </button>


    )
  }
}

export default Logout;

