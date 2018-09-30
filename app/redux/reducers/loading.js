import { Map as map } from 'immutable';
import { LOADING } from '../action-types/index';

const initialState = map({
  active: false
})

const loading = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return state.set('active', action.payload.value)
    default:
      return state
  }
}

export default loading