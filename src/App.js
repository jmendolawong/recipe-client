import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import config from './config'

import HomePage from './routes/HomePage'
import FavoritesList from './routes/FavoritesPage'
import Recipe from './routes/RecipePage'
import AddRecipe from './routes/AddRecipe'
import NotFound from './routes/NotFoundPage'

import NavBar from './components/NavBar'
import RecipeContext from './RecipeContext'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      search: '',
      error: null,
    }
  }

  handleDeleteRecipe = recipeId => {
    const newRecipes = this.state.recipes.filter(recipe =>
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

    fetch(`${config.API_ENDPOINT}/catalog`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(err => Promise.reject(err))
          : res.json()
      )
      .then(recipes => {
        this.setState({ recipes })
      })
      .catch(error => {
        console.log({ error })
      })
  }

  render() {
    const contextValue = {
      recipes: this.state.recipes,
      search: this.state.search,
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
            <Link to='/'>
              <h1>Recipe Catalog</h1>
            </Link>
            <h2>Bookmark your favorite recipes</h2>
          </header>

          <main className='main_section'>
            <Switch>
              <Route
                exact path='/'
                component={HomePage} />
              <Route
                exact path='/catalog'
                component={FavoritesList} />
              <Route
                path='/catalog/:id'
                component={Recipe} />
              <Route
                path='/addRecipe'
                component={AddRecipe} />
              <Route component={NotFound} />
            </Switch>

          </main>
          <footer className='footer'>Footer Placeholder</footer>
        </div>
      </RecipeContext.Provider>
    );
  }
}

