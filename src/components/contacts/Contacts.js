
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './cards/Card';
const request = require('../../actions/Requests')





class Contacts extends Component {
  render() {

let userId = this.props.current_user

    return (
      <div>
       <Card />
       <h1>
       {request.getContacts(userId)}
       </h1>

      </div>
    )
  }
}

export default Contacts;

