
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Linkedin.css'
const requests = require('../../actions/Requests')
const user = require('../../actions/User')



class LoginWithLinkedin extends Component {

  render() {
    return (
        <button
          onClick={requests.fetchCurrentUser}
          className="linkedin-signin">
          <a
            href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=7870b7rz0apmts&redirect_uri=http://localhost:3000/auth/linkedin/callback&state=something"
          >
            Sign in With Linkedin
          </a>
        </button>

    )
  }
}

export default LoginWithLinkedin;

