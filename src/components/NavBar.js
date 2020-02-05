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
        <Link to='/explore'>
          Explore
        </Link>
        <Link to='/favorites'>
          Favorites
        </Link>
      </div>
    );
  }
}