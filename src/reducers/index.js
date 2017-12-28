import {
  ADD_POST,
} from '../actions'

const initialPostState = {
  post: {
    author: null,
    title: null,
    content: null,
  },
}

function reducer (state = initialPostState, action) {
  if (action.type === ADD_POST) {
    return {
      ...state,
      'title': 'Titulo 1'
    };
  }

  return state;
}

export default reducer