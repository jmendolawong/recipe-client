import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FavoriteItem extends Component {
  render() {
    return (
      <div className='favoriteItem'>
        <li>
          <Link to={`/recipes/${this.props.id}`}>
            <h2>{this.props.name}</h2>
          </Link>
          <button className='editRecipe'>
            Edit
            </button>
          <button className='deleteRecipe'>
            Delete
          </button>

        </li>
      </div>
    );
  }
}

