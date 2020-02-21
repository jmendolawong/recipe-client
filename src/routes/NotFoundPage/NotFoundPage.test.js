import React from 'react';
import ReactDOM from 'react-dom';

import NotFoundPage from './NotFoundPage';

it('Not Found page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <NotFoundPage />, div
  );
  ReactDOM.unmountComponentAtNode(div);
});

