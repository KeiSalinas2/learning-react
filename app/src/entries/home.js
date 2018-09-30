import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map as map } from 'immutable';

import reducer from '../../redux/reducers/';
import data from '../../schemas/';


const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>
, app);