import React, { Component } from 'react'

import RecipeContext from '../RecipeContext'
import { deleteRecipe } from '../recipeHelper'
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
      <div className='Recipe'>
          <h1>
            {thisRecipe.name}
          </h1>
        <div className='why'>
          <h2>Why I love this recipe</h2>
          <ul>
            {thisRecipe.note}
          </ul>
        </div>
        <div className="url">
          <h2>Link to the Recipe</h2>
          <ol>
            {thisRecipe.url}
          </ol>
        </div>
        <button
          className='backButton'
          onClick={() => {
            this.props.history.push('/catalog')
          }}>
            Back to the catalog
          </button>
        <button
          className='deleteRecipe'
          onClick={() => {
            deleteRecipe(thisRecipe.id, this.context.deleteRecipe)
            this.props.history.push(`/catalog`);
          }}>
          Delete Recipe
        </button>
      </div >
    );
  }
}

