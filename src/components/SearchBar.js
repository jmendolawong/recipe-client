import React from 'react'

export default function SearchBar() {
  return (
    <form className="search-form">
      <div>
        <label htmlFor="search-bar">
          <h2>Search for your next recipe</h2>
        </label>
        <input placeholder="Chicken Parm" type="text" name="search-bar" id="search-bar" />
      </div>
      <button type="submit">Find good food!</button>
    </form>
  )
}