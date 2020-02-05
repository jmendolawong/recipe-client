import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './routes/HomePage';
import ExplorePage from './routes/ExplorePage'
import FavoritesList from './routes/FavoritesPage';
import Recipe from './routes/RecipePage';
import NotFound from './routes/NotFoundPage';

import NavBar from './components/NavBar';

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>

        <nav className='navbar'>
          <NavBar />
        </nav>

        <header role="banner">
          <h1>Recipe Sous-chef</h1>
          <h2>Catalog your favorite recipes</h2>
        </header>

        <main className='main_section'>
          <Switch>
            <Route
              exact path='/'
              component={HomePage} />
            <Route
              path='/explore'
              component={ExplorePage} />
            <Route
              path='/favorites'
              render={() =>
                <FavoritesList recipes={this.props.recipes} />}
            />
            <Route
              path='/recipes/:recipeId'
              render={routeProps =>
                <Recipe {...routeProps} />
              }
            />
            <Route component={NotFound} />
          </Switch>

        </main>
        <footer className='footer'>Footer Placeholder</footer>
      </div>
    );
  }
}

