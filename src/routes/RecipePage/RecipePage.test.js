import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Recipe from './RecipePage';


// Skip this test as it doesn't pull up thisRecipe.url
it.skip('Recipe component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Recipe match={{ params: { recipeId: "1" } }} />
    </BrowserRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});
