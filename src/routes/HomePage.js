import React, { Component } from 'react'
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
          <p>Recipe books worked 20+ years ago, whether it was your neighborhood, all the parents contributing a recipe for your 5th grade class,
            or just your mom cutting out recipes in magazines and storing them in one place, they were ubiquitous. As we become an increasingly digital
            society, we need to adapt to digital recipe books. Introducing the Recipe Catalog where you can keep track of the digital recipes you find 
            across the web.
          </p>
          <h3>Features in the future</h3>
          <p>Search for new recipes, adjust serving sizes to fit your needs, make custom tweaks or notes, and more. </p>
        </div>

        <div className='registration'>
          <h2>Registration</h2>
          <p>Recipe Catalog is currently in beta.{"\n"}Sign up below and we'll notify you when we publicly release</p>
          <Registration />
        </div>

      </main>
    )
  }
}