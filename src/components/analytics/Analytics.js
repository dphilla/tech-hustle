
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const API = 'https://powerful-stream-11261.herokuapp.com/api/v1'

class Analytics extends Component {

constructor(props) {
  super(props)
  this.state = {
    current_user: this.props.current_user
  }
}

  componentDidMount() {
  let userId = this.props.current_user
    //fetch(`http://localhost:3000/api/v1/events?current_user=${userId}`, {
    fetch(`${API}/events?current_user=${userId}`, {
        mode: 'cors',
        headers: {'Allow-Access-Control-Origin':'*'}
      })
      .then(function(response) {
         return response.json()})
           .then(function(data) {
             let events = data
             this.setState({events: events})
           }.bind(this))
      .catch(error => {
        console.log(error)
    })

    //fetch(`http://localhost:3000/api/v1/contacts?current_user=${userId}`, {
    fetch(`${API}/contacts?current_user=${userId}`, {
        mode: 'cors',
        headers: {'Allow-Access-Control-Origin':'*'}
      })
      .then(function(response) {
         return response.json()})
           .then(function(data) {
             let contacts = data
             this.setState({contacts: contacts})
           }.bind(this))
      .catch(error => {
        console.log(error)
    })
  }


  render() {
    if (document.cookie === "") {
      return (
        <h1> Please Sign in to see your analytics! </h1>
      )
    }
    if (this.state.events && this.state.contacts) {
      let contacts = this.state.contacts
      let events = this.state.events
    return (
      <div>
        <h1>Analytics Page </h1>
        <h2>You have {contacts.length} total contacts.</h2>
        <h2>You have {events.length} events.</h2>
      </div>
    )
    }
    return (
      <h1> Add some contacts and events to see your analytics! </h1>
    )
  }
}

export default Analytics;

