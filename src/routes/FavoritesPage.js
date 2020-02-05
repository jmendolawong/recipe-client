import React, { Component } from 'react';
import FavoriteItem from '../components/FavoriteItem';

export default class FavoritesList extends Component {
  render() {

    const recipes = this.props.recipes;
    return (
      <div className='FavoriteList'>
        <ul className='favorite_list'>
          {recipes.map((recipe, key) =>
            <FavoriteItem {...recipe} key={key} />
          )}
        </ul>
      </div>
    )
  }
}


