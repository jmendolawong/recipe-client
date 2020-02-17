import React, { Component } from 'react'

import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <header className='title-container' role="banner">
        <div className='background'></div>
        <div className='titles'>
          <h1>Recipe Catalog</h1>
          <h2>Bookmark your favorite recipes</h2>
        </div>
      </header>
    )
  }
}