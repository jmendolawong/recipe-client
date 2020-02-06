import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './routes/HomePage'
import ExplorePage from './routes/ExplorePage'
import FavoritesList from './routes/FavoritesPage'
import Recipe from './routes/RecipePage'
import NotFound from './routes/NotFoundPage'

import NavBar from './components/NavBar'
import RecipeContext from './RecipeContext'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      error: null,
    }
  }

  handleDeleteRecipe = recipeId => {
    const newRecipes = this.state.notes.filter(recipe =>
      recipe.id !== recipeId
    )
    this.setState({ recipes: newRecipes })
  }

  handleAddRecipe = recipe => {
    this.setState({
      recipes: [...this.state.recipes, recipe],
    })
  }

  componentDidMount() {
    this.setState({
      recipes: this.props.recipes
    });
    console.log(this.props.recipes)
    console.log(this.state.recipes)
    console.log(this.context.recipes)
  }

  render() {
    const contextValue = {
      recipes: this.state.recipes,
      deleteRecipe: this.handleDeleteRecipe,
      addRecipe: this.handleAddRecipe,
    }
    
    return (
      <RecipeContext.Provider value={contextValue}>
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
                comoponent={FavoritesList} />
              <Route
                path='/favorites/:recipeId'
                component={Recipe} />
              <Route component={NotFound} />
            </Switch>

          </main>
          <footer className='footer'>Footer Placeholder</footer>
        </div>
      </RecipeContext.Provider>
    );
  }
}

