import { combineReducers } from 'redux';

import {
  ADD_POST,
  ADD_USER
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

function addPost (state = initialPostState, action) {
  if (action.type === ADD_POST) {
    return {
      ...state,
      'title': 'Titulo 1'
    };
  }

  return state;
}

function addUser (state = initialUserState, action) {
  if (action.type === ADD_USER) {
    return {
      ...state,
      'user': 'User xxxx 1'
    };
  }

  return state;
}

export default combineReducers({
  addPost,
  addUser,
});