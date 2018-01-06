
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const requests = require('../../actions/Requests')



class LoginWithLinkedin extends Component {
  render() {
    return (

  <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=7870b7rz0apmts&redirect_uri=http://localhost:3000/auth/linkedin/callback&state=something">
    Sign in with Linkedin
  </a>

    )
  }
}

export default LoginWithLinkedin;

