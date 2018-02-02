
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './cards/Card';
import ContactForm from '../forms/Contactform'
//const request = require('../../actions/Requests');
import { getContacts, aThing } from '../../actions/Requests';
import ContactModal from './ContactModal'



class Contacts extends Component {

   constructor(props) {
     super(props)
     this.state = {
     }
    }

  componentDidMount() {
  let userId = this.props.current_user
    fetch(`http://localhost:3000/api/v1/contacts?current_user=${userId}`, {
        mode: 'cors',
        headers: {'Allow-Access-Control-Origin':'*'}
      })
      .then(function(response) {
         return response.json()})
           .then(function(data) {
             let contacts = data
             this.setState({contacts: contacts})
           }.bind(this))
  }

  render() {
    if (this.state.contacts) {
      let contacts = this.state.contacts
      return (
        <div>
        <div>
          <h1>Your Contacts</h1>
          {contacts.map(function (contact) {   // I'd rather map data over child components, but... react ughhh
            return (
              <div className="card">
                <p className="date">{contact.first_name}</p>
                <p className="date">{contact.last_name}</p>
                <h3 className="title">{contact.organization}</h3>
                <h3 className="title">{contact.relationship}</h3>
                <a className="btn-link" href="#">Link to person</a>
              </div>
              )
          })}
        </div>
        <div>
          <footer>
           <ContactForm current_user={this.props.current_user} />
          </footer>
        </div>
        </div>
      )
    }
      return <div>Loading...</div>
  }
}

export default Contacts;

