import React, { Component } from 'react'
import SearchBar from './SearchBar';
import Registration from './Registration';

export default class HomePage extends Component {
  render() {
    return (
      <main role="main">

        <div className="description">
          <header>
            <h3>RSC Logo </h3>
          </header>
          <p>Search for recipes, save your favorites, adjust serving sizes, make custom tweaks. Cooking is already difficult. Why not make it easier?</p>
        </div>

        <div className="explore">
          <h3>E X P L O R E</h3>
          <SearchBar />
        </div>

        <div className='registration'>
          <Registration />
        </div>

      </main>
    )
  }
}