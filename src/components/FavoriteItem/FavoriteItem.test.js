
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import FavoriteItem from './FavoriteItem';

it('FavoriteItem component', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <FavoriteItem />
    </BrowserRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});

