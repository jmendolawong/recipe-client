import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import NavBar from './components/NavBar';

import HomePage from './routes/HomePage';
import ExplorePage from './routes/ExplorePage';
import FavoritesList from './routes/FavoritesPage';
import Recipe from './routes/RecipePage';
import NotFoundPage from './routes/NotFoundPage';

import SearchBar from './components/SearchBar';
import FavoriteItem from './components/FavoriteItem';
import Registration from './components/Registration';

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


describe('Components mount without crashing', () => {
  it('App component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('NavBar component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Home page', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <HomePage />, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Explore page', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ExplorePage />, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Favorites List page', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FavoritesList recipes={RECIPES} />
      </BrowserRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Not Found page', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <NotFoundPage />, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Recipe component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Recipe match={{ params: { recipeId: "1" } }} />
      </BrowserRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('FavoriteItem component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FavoriteItem />
      </BrowserRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('SearchBar component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SearchBar />, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Registration component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Registration />, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
})