
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventForm from '../forms/Eventform'
//const request = require('../../actions/Requests');
const API = 'https://powerful-stream-11261.herokuapp.com/api/v1'




class Events extends Component {

   constructor(props) {
     super(props)
     this.state = {
     }
    }

  componentDidMount() {
  let userId = this.props.current_user
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
  }

  render() {
    if (document.cookie === "") {
      return (
        <h1> Please Sign in to see and add events! </h1>
      )
    }
    if (this.state.events) {
      let events = this.state.events
      if (this.state.events.length == 0) {
        return (
          <div>
          Add some events (and then refresh the page)!
          <div>
            <footer>
             <EventForm current_user={this.props.current_user} />
            </footer>
        </div>
        </div>
        )
      }
      return (
        <div>
        <div>
          <h1>Your Events</h1>
          {events.map(function (event) {   // I'd rather map data over child components, but... react ughhh
            return (
              <div className="card">
                <p className="date">{event.title}</p>
                <p className="date">{event.location}</p>
                <h3 className="title">{Date(event.start_time)}</h3>
              </div>
              )
          })}
        </div>
        <div>
          <footer>
           <EventForm current_user={this.props.current_user} />
          </footer>
        </div>
        </div>
      )
    }
      return <div>Add some events (and then refresh the page)!</div>
  }
}

export default Events;

