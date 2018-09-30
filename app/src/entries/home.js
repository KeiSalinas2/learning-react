import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import data from '../api.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../../redux/reducers/';
import data from '../../schemas/';

// const initialState = {
//   data: {
//     // ...data,
//     entities: data.entities,
//     categories: data.result.categories,
//     search: [],
//   },
//   modal: {
//     visibility: false,
//     mediaId: null,
//   }
// }

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>
, app);