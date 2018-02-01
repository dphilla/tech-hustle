
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const API = 'https://powerful-stream-11261.herokuapp.com/api/v1'



class Users extends Component {
   constructor(props) {
     super(props)
     this.state = {
     }
    }

  componentDidMount() {
  let userId = this.props.current_user
    fetch(`${API}/users/${userId}`, {
        mode: 'cors',
        headers: {'Allow-Access-Control-Origin':'*'}
      })
      .then(function(response) {
         return response.json()})
           .then(function(data) {
             let user = data
             console.log(user)
             this.setState({user: user})
           }.bind(this))
      .catch(error => {
        console.log(error)
    })
  }

  render() {
    if (document.cookie === "") {
      return (
        <h1> Please Sign in to see your info! </h1>
      )
    }
    if (this.state.user) {
      let user = this.state.user
    return (
      <div>
      <h1>Your Info</h1>
      <ul>
        <li> <img src={user.picture_url} /> </li>
        <li> {user.title}</li>
        <li> {user.organization}</li>
        <li> {user.summary}</li>
      </ul>
      </div>

    )
    }

      return <div>Loading...</div>
  }
}

export default Users;

