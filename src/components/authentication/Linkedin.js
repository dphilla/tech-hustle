
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const requests = require('../../actions/Requests')



class LoginWithLinkedin extends Component {
  render() {
    return (
            <button
              className="linkedin-button"
              onClick={() =>
               requests.oauthRequest()
              }>
              Sign in with Linkedin
            </button>

    )
  }
}

export default LoginWithLinkedin;

