import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';

import './ExplorePage.css'

export default class ExplorePage extends Component {
  render() {

    return (
      <div className='explore'>
        <h2>E  X  P  L  O  R  E</h2>
        <SearchBar />
      </div>
    )
  }
}


