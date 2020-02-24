import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Recipe from './RecipePage';
import RecipeContext from '../../RecipeContext'

it('Recipe component', () => {
  const div = document.createElement('div');

  const contextValue = {
    recipes: [
      {
        id: 1,
        name: "Apple Pie",
        note: "Apple pie is deliciousssss",
        url: "https://www.bbcgoodfood.com/recipes/collection/apple"
      },
      {
        id: 2,
        name: "Fruit Medley",
        note: "I love this recipe because it has peaches, oranges and grapes",
        url: "https://www.bbcgoodfood.com/recipes/collection/apple"
      }]
  }

  ReactDOM.render(
    < BrowserRouter >
      <RecipeContext.Provider value={contextValue}>
        <Recipe match={{ params: { recipeId: "1" } }} />
      </RecipeContext.Provider>
    </BrowserRouter >, div
  );
  ReactDOM.unmountComponentAtNode(div);
});
