import React, { Component } from 'react'
import RecipeContext from '../../RecipeContext'
// import PropTypes from 'prop-types'
import { addRecipe } from '../../recipeHelper'

import './AddRecipe.css'


export default class AddRecipe extends Component {
  static contextType = RecipeContext;

  handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value
    const note = e.target.why.value
    const url = e.target.url.value
    addRecipe(this.context.addRecipe, name, note, url);
    this.props.history.goBack()
  }

  render() {

    return (
      <div className='addRecipe'>
        <form className='addNewRecipe' onSubmit={e => this.handleSubmit(e)}>
          <h2>Add a new favorite!</h2>
          <div className='add-recipe-form'>
            <div className='form-group name-input'>
              <label htmlFor='name'>Recipe name</label>
              <input type='text' name='name' id='name' required />
            </div>
            <div className='form-group url-input'>
              <label htmlFor='url'>Recipe URL</label>
              <input name='url' id='url'></input>
            </div>
            <div className='form-group why-input'>
              <label htmlFor='why'>Notes/why I love this recipe</label>
              <textarea name='why' id='why' />
            </div>
            <button className='btn' onClick={e => this.props.history.push('/catalog')}>
              Cancel
        </button>
            {' '}
            <button type='submit' className='noteBtn btn'>Save</button>
          </div>
        </form>
      </div>
    );
  }
}
