
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Analytics extends Component {

constructor(props) {
  super(props)
  this.state = {
    current_user: this.props.current_user
  }
}

  render() {
    return (
      <h1>Analytics Page </h1>
    )
  }
}

export default Analytics;

