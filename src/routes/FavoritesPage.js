import React, { Component } from 'react'
import FavoriteItem from '../components/FavoriteItem'
import RecipeContext from '../RecipeContext'

import './FavoritesPage.css'

export default class FavoritesList extends Component {
  static contextType = RecipeContext

  render() {

    const { recipes = [] } = this.context

    return (
      <div className='favoritesList'>
        <ul className='favorites_list'>
          {recipes.map(recipe =>
            <FavoriteItem {...recipe} key={recipe.id} />
          )}
        </ul>
      </div>
    );
  }
}


