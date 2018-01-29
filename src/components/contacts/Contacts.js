
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './cards/Card';
//const request = require('../../actions/Requests');
import { getContacts, aThing } from '../../actions/Requests';




class Contacts extends Component {

   constructor(props) {
      super(props)
    }

//TODO probably set up a obj constructor and bind(?) the methods to this instance
   getEm (userId) {
     return getContacts(userId)
   }

  render() {

  let userId = this.props.current_user


    return (
      <div>
       <Card />
         <h1>
          your contacts: {this.getEm(userId)}

         </h1>
         do it {aThing()}
      </div>
    )
  }
}

export default Contacts;

