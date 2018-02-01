
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css'


class Card extends Component {
  render() {
    return (
      <div className="card">
      <p className="date">{this.props.contact.first_name}</p>
      <p className="date">{this.props.contact.last_name}</p>
        <h3 className="title">{this.props.contact.organization}</h3>
        <h3 className="title">{this.props.contact.relationship}</h3>
        <a className="btn-link" href="#">Link to person</a>
      </div>
      )
    }
  }

export default Card;

