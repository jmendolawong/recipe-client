import React, { Component } from 'react'
import SearchBar from '../components/SearchBar';
import Registration from '../components/Registration';

import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <main role="main">

        <div className="description">
          <header>
            <h2>RSC Logo </h2>
          </header>
          <p>Search for recipes, save your favorites, adjust serving sizes, make custom tweaks. Cooking is already difficult. Why not make it easier?</p>
        </div>

        <div className="explore">
          <header>
            <h2>E X P L O R E</h2>
          </header>
          <SearchBar />
        </div>

        <div className='registration'>
          <Registration />
        </div>

      </main>
    )
  }
}

