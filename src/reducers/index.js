import { combineReducers } from 'redux';

import {
	GET_POSTS,
	GET_CATEGORIES,
	GET_CATEGORY_POSTS,
	GET_POST_COMMENTS,
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

		default:
			return state;
	}
}


/*{
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      }
*/

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
		case 'GET_POST_COMMENTS':
			return action.comments;
		default:
			return state;
	}
}



export default combineReducers({
	categories,
	posts,
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