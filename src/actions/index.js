import * as ReadableApi from '../utils/ReadableAPI';

export const GET_POSTS = "GET_POSTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_POSTS = "GET_CATEGORY_POSTS";

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const getCategories = categories => ({
	type: GET_CATEGORIES,
	categories
});

export const getCategoryPosts = category => ({
	type: GET_CATEGORY_POSTS,
	category
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

export const fetchCategories = () => async dispatch => {
  try {
  	const response = await fetch('/categories', { headers });
    const responseBody = await response.json();
    dispatch(getCategories(responseBody));
  } catch (error) {
    console.error(error);
  }
};

export const fetchCategoryPosts = (category) => async dispatch => {
	try {
		const url = `/${category}/posts`;
		const response = await fetch(url, {headers});
		const responseBody = await response.json();
		dispatch(getCategoryPosts(responseBody));
	} catch (error) {
		console.error(error);
	}
};