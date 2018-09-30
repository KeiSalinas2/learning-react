import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../../redux/reducers/';
import data from '../../schemas/';

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger
    )
  )
);

const app = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>
, app);