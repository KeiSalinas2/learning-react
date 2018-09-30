import schema from '../../schemas/index.js';

const initialState = {
  entities: schema.entities,
  categories: schema.result.categories,
  search: [],
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      const list = state.data.categories
      const query = action.payload.query.toLowerCase()
      let results = []
      if(query)
        list.map(item => item.playlist.filter(item => item.author.toLowerCase().includes(query) && results.push(item)))

      return {
        ...state,
        search: results
      }
    }
    default:
      return state
  }
}

export default data;
