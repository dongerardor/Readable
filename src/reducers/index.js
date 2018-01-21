import { combineReducers } from 'redux';

function posts(state = [], action) {
	switch (action.type) {
		case 'GET_POSTS':
			return action.posts;
		case 'GET_CATEGORY_POSTS':
			return action.category;
		case 'POST_POST_VOTE':
			const newState = state.map((post) => {
				return post.id === action.vote.id ? action.vote : post
			});
			return newState;
		default:
			return state;
	}
}

function post(state = [], action) {
	switch (action.type) {
		case 'GET_POST':
			return action.post;
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