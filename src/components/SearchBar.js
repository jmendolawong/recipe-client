import React, { Component } from 'react'
import RecipeContext from '../RecipeContext'
import config from '../config'

export default class SearchBar extends Component {
  static contextType = RecipeContext

  handleSubmit = event => {
    event.preventDefault()
    const baseUrl = 'https://api.edamam.com/search?q=';
    const appInfo = `app_id=${config.APP_ID}&app_key=${config.APP_KEY}`

    const url = `${baseUrl}${this.context.search}&${appInfo}`

    fetch(url)
      .then(res => {
        if(!res.ok){
          throw new Error(res.statusText)
        } 
        return res.json()
        .then(data => {
          console.log(data)
          // parse through data and link it to search results
        })
        .catch(err => {
          this.setState({
            error: 'Sorry, could not find any recipes at this time'
          })
        })
      })

  }

  setSearch(search){
    this.setState({
      search,
    })
  }

  render() {
    return (
      <form
        className="search-form"
        onSubmit={this.handleSubmit} >
        <div>
          <label htmlFor="search-bar">
            <h3>Search for your next recipe</h3>
          </label>
          <input
            placeholder="Chicken Parm"
            type="text"
            name="search-bar"
            id="search-bar"
            value={this.context.search}
            onChange={e => this.setSearch(e.target.value)} />
        </div>
        <button type="submit">Find good food!</button>
      </form>
    );
  }
}