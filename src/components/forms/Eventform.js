
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contactform.css'

const reactFormContainer = document.querySelector('.react-form-container');

class ReactFormLabel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}

class EventForm extends React.Component {
  constructor() {
    super();

    this.state = {
      first_name: '',
      last_name: '',
      initial_meet: '',
      organization: '',
      relationship: ''
    }
  }

  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  handleSubmit = (e, message) => {
    e.preventDefault();

    let formData = {
      title: this.state.location,
      location: this.state.location,
      start_time: this.state.start_time,
    }

    //if (formData.formFirstName.length < 1 || formData.formLastName.length < 1 || formData.formInitialMeet.length < 1 || formData.formOrganization.length < 1 || formData.formRelationship.length) {
      //return false;
    //}

    let userId = this.props.current_user

    return fetch(`http://localhost:3000/api/v1/events?current_user=${userId}`, {
      method: 'POST',
      body: JSON.stringify(formData),
      mode: 'cors',
      headers: {'Allow-Access-Control-Origin':'*',
                'Content-Type':'application/json',
                'Accept': 'application/json'}
      })
      .then(function(response) {
            console.log(response)})
          .then(function(data) {
            console.log(data)
            document.getElementById('form1').value = " ";
            document.getElementById('form2').value = " ";
          })
          .catch(error => {
            console.log(error)
          })

    this.setState({
      title: '',
      location: '',
      start_time: '',
    });
  window.location = ""; // TO REFRESH THE PAGE
  };

  render() {
    return(
      <form className='react-form' onSubmit={this.handleSubmit}>
        <h1>Add a New Event</h1>
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formFirstName' title='Event Title:' />

          <input id='form1' className='form-input' name='title' type='text' ref='formName' required onChange={this.handleChange} value={this.state.title} />
        </fieldset>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formLastName' title='Location:' />

          <input id='form2' className='form-input' name='location' type='text' ref='formName' required onChange={this.handleChange} value={this.state.location} />
        </fieldset>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formInitialMeet' title='Date/Time:' />

          <input id='form3' className='form-input' name='start_time' type='datetime-local' required onChange={this.handleChange} value={this.state.start_time} />
        </fieldset>

        <div className='form-group'>
          <input id='form' className='btn' type='submit' placeholder='Send message' />
        </div>
      </form>
    )
  }
};

export default EventForm;
//ReactDOM.render(<ContactForm />, reactFormContainer);
