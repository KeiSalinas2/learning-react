import data from './data';
import modal from './modal';
import loading from './loading';

import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
  data,
  modal,
  loading
})

export default rootReducer