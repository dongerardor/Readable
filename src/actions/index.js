import * as ReadableApi from '../utils/ReadableAPI';


export const ADD_POST = 'ADD_POST';
export const ADD_USER = 'ADD_USER';
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_POSTS = "GET_POSTS";


export function addPost({author, title, content}){
	return {
		type: ADD_POST,
		author,
		title,
		content,
	}
};


export function addUser({name}){
	return {
		type: ADD_USER,
		name
	}
}

export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  ReadableApi
      .fetchCategories()
      //.then(categories => dispatch(getCategories(categories)))
);


export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});



const headers = {
  'Authorization': 'local_user'
}


export const fetchPosts = () => async dispatch => {
  try {
    const response = await fetch('/posts', { headers });
    const responseBody = await response.json();
    dispatch(getPosts(responseBody));
  } catch (error) {
    console.error(error);
  }
};








/*
export const fetchPosts = () => fetch('/posts', { headers });

export const fetchPosts = () => dispatch => (
  ReadableApi
      .fetchPosts()
      .then(posts => dispatch(getPosts(posts)))
);


export const getCategories = categories => ({
	type: GET_CATEGORIES,
	categories
});

export const fetchCategories = () => dispatch => (
	ReadableApi
			.getCategories()
			.then(categories => dispatch(getCategories(categories)))
);




//////////////////////////////////////////////

EXAMPLE



export function itemsHasErrored(bool) {
		return {
				type: 'ITEMS_HAS_ERRORED',
				hasErrored: bool
		};
}

//thunk
export function errorAfterFiveSeconds() {
		// We return a function instead of an action object
		return (dispatch) => {
				setTimeout(() => {
						// This function is able to dispatch other action creators
						dispatch(itemsHasErrored(true));
				}, 5000);
		};
}

export function itemsIsLoading(bool) {
		return {
				type: 'ITEMS_IS_LOADING',
				isLoading: bool
		};
}
export function itemsFetchDataSuccess(items) {
		return {
				type: 'ITEMS_FETCH_DATA_SUCCESS',
				items
		};
}


export function itemsFetchData(url) {
		return (dispatch) => {
				dispatch(itemsIsLoading(true));
				fetch(url)
						.then((response) => {
								if (!response.ok) {
										throw Error(response.statusText);
								}
								dispatch(itemsIsLoading(false));
								return response;
						})
						.then((response) => response.json())
						.then((items) => dispatch(itemsFetchDataSuccess(items)))
						.catch(() => dispatch(itemsHasErrored(true)));
		};
}


*/