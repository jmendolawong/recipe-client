import React, { Component } from 'react'
import ValidationError from '../../components/ValidationError/ValidationError'

import RecipeContext from '../../RecipeContext'
import { addRecipe } from '../../recipeHelper'
import './AddRecipe.css'

const REGEX_URL = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/


export default class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false
      },
      url: {
        value: '',
        touched: false
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, url } = this.state
    const note = e.target.note.value
    addRecipe(this.context.addRecipe, name.value, note, url.value);
    this.props.history.goBack()
  }

  updateName(name) {
    this.setState({
      name: { value: name, touched: true }
    })
  }

  updateUrl(url) {
    this.setState({
      url: { value: url, touched: true }
    })
  }

  validateName() {
    const name = this.state.name.value.trim()
    if (name.length === 0)
      return 'Name is required'
  }

  validateUrl() {
    const url = this.state.url.value.trim()
    if (url.length === 0) {
      return 'A url is required'
    } else if (!url.match(REGEX_URL))
      return 'Please enter a valid url (www.example.com)'
  }

  static contextType = RecipeContext;

  render() {
    const nameError = this.validateName()
    const urlError = this.validateUrl()

    return (
      <div className='addRecipe-container'>
        <div className='addRecipe-content'>
          <h2>Add a new favorite!</h2>
          <div className='recipe-form'>
            <form className='addNewRecipe' onSubmit={e => this.handleSubmit(e)}>
              <div className='form-group name-input'>
                <label htmlFor='name'>Recipe name</label>
                <input type='text' name='name' id='name'
                  onChange={e => this.updateName(e.target.value)} required/>
                {this.state.name.touched && (
                  <ValidationError message={nameError} />
                )}
              </div>
              <div className='form-group url-input'>
                <label htmlFor='url'>Recipe URL</label>
                <input name='url' id='url'
                  onChange={e => this.updateUrl(e.target.value)} required/>
                {this.state.url.touched && (
                  <ValidationError message={urlError} />
                )}

              </div>
              <div className='form-group note-input'>
                <label htmlFor='note'>Notes/why I love this recipe</label>
                <textarea name='note' id='note' />
              </div>
              <button className='btn' onClick={e => this.props.history.push('/catalog')}>
                Cancel
                </button>
              {' '}
              <button
                type='submit'
                className='noteBtn btn'
                disabled={
                  this.validateName() ||
                  this.validateUrl()
                }
              >
                Save
                  </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
