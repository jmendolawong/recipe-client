import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './fonts/NotoSansHK-Regular.otf'
import './fonts/Cabin-Regular.ttf'
import './fonts/Damion-Regular.ttf'

import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
