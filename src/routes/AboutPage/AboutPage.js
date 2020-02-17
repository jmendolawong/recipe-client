import React, { Component } from 'react'

import './AboutPage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className='description-container'>
        <div className="description-content">
          <div className='why'>
            <h3>Why use Recipe Catalog?</h3>
            <p>Recipe books worked 20+ years ago. Whether it was your neighborhood, all the parents contributing a recipe for your 5th grade class,
            or just your mom cutting out recipes in magazines and storing them in one place, they were ubiquitous.<br /><br />As we become an increasingly digital
                society, we need to adapt to digital recipe books. Introducing the Recipe Catalog where you can keep track of the digital recipes you find
                across the web.
          </p>
          </div>
          <div className='future-features'>
            <h3>Features in the future</h3>
            <p>Search for new recipes, adjust serving sizes to fit your needs, make custom tweaks or notes, and more. </p>
          </div>
        </div>
      </div>
    )
  }
}