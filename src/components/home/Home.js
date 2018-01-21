import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is your Home Page {this.props.current_user} </h1>
      </div>
    )
  }
}

export default Home;

