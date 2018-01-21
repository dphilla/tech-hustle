
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css'


class Card extends Component {
  render() {
    return (
      <div className="card">
      <p className="date">Name</p>
        <h3 className="title">Job Title</h3>
        <h3 className="title">Image Icon</h3>
        <a className="btn-link" href="#">Link to person</a>
      </div>
      )
    }
  }

export default Card;

