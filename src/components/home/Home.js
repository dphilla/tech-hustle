import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to TechHustle.io</h1>
        <section >
          <img src="https://www.jobscan.co/blog/wp-content/uploads/2014/12/networking.jpg" className="background-image"/>
        </section>
      </div>
    )
  }
}

export default Home;

