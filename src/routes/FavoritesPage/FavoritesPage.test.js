import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import FavoritesList from './FavoritesPage';

const RECIPES = [
  {
    "id": "1", "name": "Recipe 1", "Ingredients": ["apple", "pear", "banana"],
    "Instructions": ["Step 1", "Step 2", "Step 3"]
  },
  {
    "id": "2", "name": "Recipe 2", "Ingredients": ["granola", "milk", "flour"],
    "Instructions": ["Step 2.1", "Step 2.2", "Step 2.3"]
  },
  {
    "id": "3", "name": "Recipe 3", "Ingredients": ["tea", "coffee", "sugar"],
    "Instructions": ["Step 3.1", "Step 3.2", "Step 3.3"]
  },
  {
    "id": "4", "name": "Recipe 4", "Ingredients": ["honey", "almond", "butter"],
    "Instructions": ["Step 4.1", "Step 4.2", "Step 4.3"]
  },
  {
    "id": "5", "name": "Recipe 5", "Ingredients": ["peas", "carrots", "broccoli"],
    "Instructions": ["Step 5.1", "Step 5.2", "Step 5.3"]
  },
]

it('Favorites List page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <FavoritesList recipes={RECIPES} />
    </BrowserRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});
