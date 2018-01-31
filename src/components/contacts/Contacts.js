
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './cards/Card';
//const request = require('../../actions/Requests');
import { getContacts, aThing } from '../../actions/Requests';




class Contacts extends Component {

   constructor(props) {
     super(props)
     this.state = {
       cards: ""
     }
    }


  componentWillMount() {

  let userId = this.props.current_user
    fetch(`http://localhost:3000/api/v1/contacts?current_user=${userId}`, {
        mode: 'cors',
        headers: {'Allow-Access-Control-Origin':'*'}
      })
      .then(function(response) {
         return response.json()})
           .then(function(data) {
             let contacts = data[0]
             this.setState({contacts: contacts})
           }.bind(this))
        //.catch(error => {
          //console.log(error)
      //})
  }

  render() {
    return (
      <div>
       <Card />
         <h1>
          your contacts: {JSON.stringify(this.state.contacts)}
         </h1>
         do it {aThing()}
      </div>
    )
  }
}

export default Contacts;

