import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RecipeContext from '../../RecipeContext'
import PropTypes from 'prop-types'
import { deleteRecipe } from '../../recipeHelper'

import './FavoriteItem.css'

export default class FavoriteItem extends Component {
  static contextType = RecipeContext;

  render() {

    return (
      <div className='favoriteItem'>
        <li key={this.props.id}>
          <div className='list-content'>
            <i className='fas fa-chevron-right'></i>
            <Link to={`/catalog/${this.props.id}`}>
              <h3 className='item-names'>
                {this.props.name}
              </h3>
            </Link>
            <button
              className='deleteRecipe btn'
              onClick={() => {
                deleteRecipe(this.props.id, this.context.deleteRecipe)
              }}>
              Delete
            </button>
          </div>
        </li>
      </div>
    );
  }
}

FavoriteItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
}