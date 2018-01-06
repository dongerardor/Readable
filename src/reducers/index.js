import { combineReducers } from 'redux';

import {
  ADD_POST,
  ADD_USER,
  GET_POSTS,
} from '../actions'


const initialPostState = {
  post: {
    author: null,
    title: null,
    content: null,
  },
}

const initialUserState = {
  user: 'xx'
}

function post (state = initialPostState, action) {
  if (action.type === ADD_POST) {
    return {
      ...state,
      'title': 'Titulo 1'
    };
  }

  return state;
}

function user (state = initialUserState, action) {
  if (action.type === ADD_USER) {
    return {
      ...state,
      'user': 'User xxxx 1'
    };
  }

  return state;
}

function posts(state = [], action) {
    switch (action.type) {
        case 'GET_POSTS':
            return action.posts;
        default:
            return state;
    }
}

export default combineReducers({
  post,
  user,
  posts,
});