import React from 'react'

const RecipeContext = React.createContext({
  recipes: [],
  deleteRecipe: () => {},
  addRecipe: () => {},

})

export default RecipeContext