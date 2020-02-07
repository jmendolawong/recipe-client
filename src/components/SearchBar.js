import React, { Component } from 'react'




export default class SearchBar extends Component {

  handleSubmit = event => {
    event.preventDefault()
    console.log('Search submitted!')
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
          <input placeholder="Chicken Parm" type="text" name="search-bar" id="search-bar" />
        </div>
        <button type="submit">Find good food!</button>
      </form>
    );
  }
}