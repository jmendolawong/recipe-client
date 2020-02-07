import React, { Component } from 'react'
import FavoriteItem from '../components/FavoriteItem'
import RecipeContext from '../RecipeContext'

export default class FavoritesList extends Component {
  static contextType = RecipeContext

  render() {

    const { recipes = [] } = this.context

    return (
      <div className='FavoriteList'>
        <ul className='favorite_list'>
          {recipes.map(recipe =>
            <FavoriteItem {...recipe} key={recipe.id} />
          )}
        </ul>
      </div>
    );
  }
}


