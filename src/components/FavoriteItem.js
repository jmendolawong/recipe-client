import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../RecipeContext'

function deleteRecipe(recipeId, callback) {

}

export default class FavoriteItem extends Component {
  static contextType = RecipeContext;

  render() {
    const { recipeId } = this.props.id

    return (
      <div className='favoriteItem'>
        <li>
          <Link to={`/favorites/${recipeId}`}>
            <h2>{this.props.name}</h2>
          </Link>
          <button className='editRecipe'>
            Edit
            </button>
          <button
            className='deleteRecipe'
            onClick={() => {
              deleteRecipe(recipeId, this.context.deleteRecipe)
              this.props.history.push('/')
            }}>
            Delete Recipe
          </button>

        </li>
      </div>
    );
  }
}

