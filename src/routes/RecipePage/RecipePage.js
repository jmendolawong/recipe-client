import React, { Component } from 'react'

import RecipeContext from '../../RecipeContext'
import { deleteRecipe } from '../../recipeHelper'
import './RecipePage.css'


function findRecipe(recipes = [], recipeId) {
  const recipe = recipes.find(recipe => recipe.id === parseInt(recipeId))
  return recipe
}



export default class Recipe extends Component {
  static contextType = RecipeContext

  render() {
    const { recipes } = this.context
    const recipeId = this.props.match.params.id
    const thisRecipe = findRecipe(recipes, recipeId)

    return (
      <div className='recipe-container'>
        <div className='recipe-content'>
          <h1>
            <a href={thisRecipe.url} target="_blank" rel="noopener noreferrer">
              {thisRecipe.name}
            </a>
          </h1>
          <div className='why'>
            <h2>Why I love this recipe</h2>
            <p>
              {thisRecipe.note}
            </p>
          </div>
          <button
            className='btn backBtn'
            onClick={() => {
              this.props.history.push('/catalog')
            }}>
            Back to the catalog
        </button>
          <button
            className='btn deleteBtn'
            onClick={() => {
              deleteRecipe(thisRecipe.id, this.context.deleteRecipe)
              this.props.history.push(`/catalog`);
            }}>
            Delete Recipe
        </button>
        </div >
      </div>
    );
  }
}

