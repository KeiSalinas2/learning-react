import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SEARCH_ENTITIES,
  SEARCH_ASYNC_ENTITIES,
  LOADING
} from '../action-types/index';

export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

export function searchEntities(query) {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query,
    }
  }
}

export function loading(value) {
  return {
    type: LOADING,
    payload: {
      value
    }
  }
}

export function searchAsyncEntities(query) {
  return (dispatch) => {
    dispatch(loading(true))

    setTimeout(()=> {

      dispatch(loading(false))
      dispatch(searchEntities(query))

    }, 5000)  }

}