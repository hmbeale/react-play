import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BigArtTable } from './app.js'
import { ARTTHO } from './app.js'
//import { ArtButton } from './app.js'



ReactDOM.render(
  <BigArtTable artElement = {ARTTHO} />,
  document.getElementById('container')
);
