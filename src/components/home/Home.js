import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginWithLinkedin from '../authentication/Linkedin';



class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is your Home Page</h1>
        <LoginWithLinkedin />
      </div>
    )
  }
}

export default Home;

