import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from '../components/Note'
import Ingredient from '../components/Ingredient';
import Instruction from '../components/Instruction';

import store from '../STORE';

function findRecipe(recipes = [], recipeId) {
  const recipe = recipes.find(recipe => recipe.id === recipeId)
  return recipe
}

export default class Recipe extends Component {
  render() {

    const { recipeId } = this.props.match.params
    const thisRecipe = findRecipe(store, recipeId)

    const ingredients = thisRecipe.ingredients
      .map((ingredient, key) =>
        <Ingredient ingredient={ingredient} key={key} />
      )

    const instructions = thisRecipe.instructions
      .map((step, key) =>
        <Instruction instruction={step} key={key} />
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
      </div >
    );
  }
}

