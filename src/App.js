import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import config from './config'

import HomePage from './routes/HomePage/HomePage'
import AboutPage from './routes/AboutPage/AboutPage'
import FavoritesList from './routes/FavoritesPage/FavoritesPage'
import Recipe from './routes/RecipePage/RecipePage'
import RegisterPage from './routes/RegisterPage/RegisterPage'
import AddRecipe from './routes/AddRecipe/AddRecipe'
import NotFound from './routes/NotFoundPage/NotFoundPage'

import NavBar from './components/NavBar/NavBar'
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
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err))
        } return res.json()
      })
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
          <div className='full-page'>
            <main className='main-section'>
              <Switch>
                <Route
                  exact path='/'
                  component={HomePage} />
                <Route
                  path='/about'
                  component={AboutPage} />
                <Route
                  path='/register'
                  component={RegisterPage} />
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
          </div>
        </div>
      </RecipeContext.Provider>
    );
  }
}

