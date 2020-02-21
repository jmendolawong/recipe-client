import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-links'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/register'>
          Sign Up
        </Link>
        <Link to='/catalog'>
          Catalog
        </Link>
      </div>
    );
  }
}