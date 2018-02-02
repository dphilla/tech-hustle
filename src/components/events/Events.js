
//import React, { Component } from 'react';
//import { Link } from 'react-router-dom';


//class Events extends Component {




  //render() {
    //return (
      //<h1>Events Page</h1>
    //)
  //}
//}

//export default Events;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventForm from '../forms/Eventform'
//const request = require('../../actions/Requests');




class Events extends Component {

   constructor(props) {
     super(props)
     this.state = {
     }
    }

  componentDidMount() {
  let userId = this.props.current_user
    fetch(`http://localhost:3000/api/v1/events?current_user=${userId}`, {
        mode: 'cors',
        headers: {'Allow-Access-Control-Origin':'*'}
      })
      .then(function(response) {
         return response.json()})
           .then(function(data) {
             let events = data
             this.setState({events: events})
           }.bind(this))
  }

  render() {
    if (this.state.events) {
      let events = this.state.events
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
      return <div>Loading...</div>
  }
}

export default Events;

