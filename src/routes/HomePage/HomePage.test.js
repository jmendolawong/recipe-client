import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './HomePage';


it('Home page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HomePage />, div
  );
  ReactDOM.unmountComponentAtNode(div);
});
