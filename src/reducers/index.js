import { combineReducers } from 'redux';

import {
	GET_POSTS,
	GET_POST,
	GET_COMMENTS,
	GET_CATEGORIES,
	GET_CATEGORY_POSTS,
	POST_POST_VOTE,
} from '../actions'

function posts(state = [], action) {
	switch (action.type) {
		case 'GET_POSTS':
			return action.posts;
			break;
		case 'GET_CATEGORY_POSTS':
			return action.category;
			break;
		case 'POST_POST_VOTE':
			const newState = state.map((post) => {
				return post.id === action.vote.id ? action.vote : post
			});
			return newState;
			break;
		default:
			return state;
	}
}

function post(state = [], action) {
	switch (action.type) {
		case 'GET_POST':
			return action.post;
			break;
		default:
			return state;
	}
}

function categories(state = [], action) {
	switch (action.type) {
		case 'GET_CATEGORIES':
			return action.categories.categories;
		default:
			return state;
	}
}

function comments(state = [], action) {
	switch (action.type) {
		case 'GET_COMMENTS':
			return action.comments;
			break;
		default:
			return state;
	}
}



export default combineReducers({
	categories,
	posts,
	post,
	comments,
});


/*
function getCategoryPosts(state = [], action) {
		switch (action.type) {
				case 'GET_CATEGORY_POSTS':
					//return action.category;
					return {
		        ...state,
		        'posts': action.category
		    	}
				default:
					return state;
		}
}


function calendar (state = initialCalendarState, action) {
  const { day, recipe, meal } = action

  switch (action.type) {
    case ADD_RECIPE :
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      }
    case REMOVE_FROM_CALENDAR :
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null,
        }
      }
    default :
      return state
  }
}

*/