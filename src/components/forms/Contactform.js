
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contactform.css'
const API = 'https://powerful-stream-11261.herokuapp.com/api/v1'

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

class ContactForm extends React.Component {
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
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      initial_meet: this.state.initial_meet,
      organization: this.state.organization,
      relationship: this.state.relationship,
    }

    //if (formData.formFirstName.length < 1 || formData.formLastName.length < 1 || formData.formInitialMeet.length < 1 || formData.formOrganization.length < 1 || formData.formRelationship.length) {
      //return false;
    //}

    let userId = this.props.current_user

    return fetch(`${API}/contacts?current_user=${userId}`, {
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
            document.getElementById('form4').value = " ";
            document.getElementById('form5').value = " ";
          })
          .catch(error => {
            console.log(error)
          })

    this.setState({
      first_name: '',
      last_name: '',
      initial_meet: '',
      organization: '',
      relationship: ''
    });
  };

  render() {
    return(
      <form className='react-form' onSubmit={this.handleSubmit}>
        <h1>Add a New Contact</h1>
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formFirstName' title='First Name:' />

          <input id='form1' className='form-input' name='first_name' type='text' ref='formName' required onChange={this.handleChange} value={this.state.first_name} />
        </fieldset>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formLastName' title='Last Name:' />

          <input id='form2' className='form-input' name='last_name' type='text' ref='formName' required onChange={this.handleChange} value={this.state.last_name} />
        </fieldset>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formInitialMeet' title='initial meeting:' />

          <input id='form3' className='form-input' name='initial_meet' type='date' required onChange={this.handleChange} value={this.state.initial_meet} />
        </fieldset>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formOrganization' title='Organization:'/>

          <input id='form4' className='form-input' name='organization' type='text' required onChange={this.handleChange} value={this.state.organization} />
        </fieldset>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formRelationship' title='Relationship:'/>

          <input id='form5' className='form-input' name='relationship' type='text' required onChange={this.handleChange} value={this.state.relationship} />
        </fieldset>

        <div className='form-group'>
          <input id='form' className='btn' type='submit' placeholder='Send message' />
        </div>
      </form>
    )
  }
};

export default ContactForm;
//ReactDOM.render(<ContactForm />, reactFormContainer);
