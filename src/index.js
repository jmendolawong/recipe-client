import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './fonts/NotoSansHK-Regular.otf'
import './fonts/Cabin-Regular.ttf'

import App from './App';
import store from './STORE'


ReactDOM.render(
  <BrowserRouter>
    <App recipes={store} />
  </BrowserRouter>,
  document.getElementById('root')
);
