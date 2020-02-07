import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Note from '../components/Note'
// import Ingredient from '../components/Ingredient'
// import Instruction from '../components/Instruction'
import RecipeContext from '../RecipeContext'
import './RecipePage.css'
import { deleteRecipe } from '../recipeHelper'

// import store from '../STORE';

function findRecipe(recipes = [], recipeId) {
  const recipe = recipes.find(recipe => recipe.id === parseInt(recipeId))
  return recipe
}

// Possibly need to take out the notes. 
// Might be unnecessary and could just store the recipes from the API in the database

export default class Recipe extends Component {
  static contextType = RecipeContext

  render() {
    const { recipes } = this.context
    const recipeId = this.props.match.params.id
    const thisRecipe = findRecipe(recipes, recipeId)

    const ingredients = thisRecipe.ingredients
      .map((ingredient, key) =>
        <li key={key}>
          {ingredient}
        </li>
        // <Ingredient ingredient={ingredient} key={key} />
      )

    const instructions = thisRecipe.instructions
      .map((step, key) =>
        <li key={key}>
          {step}
        </li>
        // <Instruction instruction={step} key={key} />
      )

    return (
      <div className='Recipe'>
        <Link to={`/favorites/${thisRecipe.id}`}>
          <h1>
            {thisRecipe.name}
          </h1>
        </ Link>
        <div className='ingredients'>
          <h2>Ingredients</h2>
          <ul>
            {ingredients}
          </ul>
        </div>
        <div className="instructions">
          <h2>Instructions</h2>
          <ol>
            {instructions}
          </ol>
        </div>
        <div className="notes">
          <h2>Notes</h2>
          <Note />
        </div>
        <button type="submit">Save</button>
        <button
          className='deleteRecipe'
          onClick={() => {
            deleteRecipe(this.props.id, this.context.deleteRecipe)
          }}>
          Delete Recipe
        </button>
      </div >
    );
  }
}

