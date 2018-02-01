
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginWithLinkedin from '../authentication/Linkedin';
import Logout from '../authentication/Logout';
const API = 'https://powerful-stream-11261.herokuapp.com/api/v1'

class Nav extends Component {
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
             this.setState({user: user})
           }.bind(this))
      .catch(error => {
        console.log(error)
    })
  }

  //render() {
    //if (this.state.user) {
      //let user = this.state.user
    //return (
      //<div>
      //<h1>Your Info</h1>
      //<ul>
        //<li> {user.picture_url} </li>
        //<li> {user.title}</li>
        //<li> {user.organization}</li>
        //<li> {user.summary}</li>
      //</ul>
      //</div>

    //)
    //}

      //return <div>Loading...</div>
  //}
  render() {
    if (document.cookie === "") {
      return (
        <div
         >
           <nav id="navigationBar">
            <ul>
              <li>
                <div className="link">
                  <LoginWithLinkedin current_user={this.props.current_user}/>
                </div>
              </li>
              <li>
                <a href="/home" className="link">Home</a>
              </li>
              <li>
                <a href="/analytics" className="link">Analytics</a>
              </li>
              <li>
                <a href="/contacts" className="link">Contacts</a>
              </li>
              <li>
                <a href="/events" className="link">Events</a>
              </li>
              <li>
                <a href="/users" className="link">Your Info</a>
              </li>
            </ul>
          </nav>

        </div>
      )
    }
    else {
    if (this.state.user) {
      let user = this.state.user
      return (
        <div
         >
           <nav id="navigationBar">
            <ul>
              <li>
                <div className="link">
                  <Logout current_user={this.props.current_user}/>
                </div>
              </li>
              <li>
                <a href="/home" className="link">Home</a>
              </li>
              <li>
                <a href="/analytics" className="link">Analytics</a>
              </li>
              <li>
                <a href="/contacts" className="link">Contacts</a>
              </li>
              <li>
                <a href="/events" className="link">Events</a>
              </li>
              <li>
                <a href="/users" className="link">Your Info</a>
              </li>
              <li>
                <img src={this.state.user.picture_url} />
              </li>
            </ul>
          </nav>

        </div>
      )
    }

      return <div>Loading...</div>
    }
  }
}

export default Nav;
