import React from 'react'
import ReactDOM from 'react-dom';

import Recipe from './RecipePage';

it('Recipe component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Recipe match={{ params: { recipeId: "1" } }} />, div
  );
  ReactDOM.unmountComponentAtNode(div);
});

