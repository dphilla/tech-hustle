import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to TechHustle.io</h1>
            <h3>
              Tech Hustle is a being built as a social networking tool that
              allows users to track leads for jobs, and analyze and catalogue
              leads and engagements to improve their prospects of finding
              gainful employment in the tech industry.

              *WIP*
            </h3>
        <section >
          <img src="https://www.jobscan.co/blog/wp-content/uploads/2014/12/networking.jpg" className="background-image"/>
        </section>
          <div>
          </div>
      </div>
    )
  }
}

export default Home;

