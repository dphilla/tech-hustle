
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Linkedin.css'
const requests = require('../../actions/Requests')
const user = require('../../actions/User')
const API = 'https://powerful-stream-11261.herokuapp.com/api/v1'



class LoginWithLinkedin extends Component {

            //href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=7870b7rz0apmts&redirect_uri=http://localhost:3000/auth/linkedin/callback&state=something"
  render() {
    return (
        <button
          onClick={requests.fetchCurrentUser}
          className="linkedin-signin">
          <a
            href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=7870b7rz0apmts&redirect_uri=https://powerful-stream-11261.herokuapp.com/auth/linkedin/callback&state=something"
          >
            Sign in With Linkedin
          </a>
        </button>

    )
  }
}

export default LoginWithLinkedin;

