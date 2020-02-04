import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ExplorePage from './ExplorePage'
import FavoritesList from './FavoritesPage';
import NotFound from './NotFoundPage';
import Recipe from './Recipe';
import NavBar from './NavBar';


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
                <FavoritesList
                  recipes={this.props.recipes}
                />}
            />
            <Route
              path='recipes/:recipeId'
              component={Recipe}
            />
            <Route component={NotFound} />
          </Switch>

        </main>
      </div>
    );
  }
}

