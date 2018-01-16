import * as ReadableApi from '../utils/ReadableAPI';

export const GET_POSTS = "GET_POSTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_POSTS = "GET_CATEGORY_POSTS";
export const GET_POST_COMMENTS = "GET_POST_COMMENTS";
export const POST_POST_VOTE = "POST_POST_VOTE";

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

export const getPostComments = comments => ({
	type: GET_POST_COMMENTS,
	comments
});

export const postPostVote = vote => ({
	type: POST_POST_VOTE,
	vote
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

export const fetchPostComments = (postId) => async dispatch => {
	try {
		const url = `posts/${postId}/comments`;
		const response = await fetch(url, {headers});
		const responseBody = await response.json();
		dispatch(getPostComments(responseBody));
	} catch (error) {
		console.error(error);
	}
};

//vote is a string ('upVote' or 'downVote')
export const fetchPostPostVote = (postId, vote) => async dispatch => {
	try {
		const url = `posts/${postId}`;
		const response = await fetch(url, 
			{
				method: 'POST',
				headers: {
  				'Authorization': 'local_user',
					'Accept': 'application/json, text/plain, */*',
	        'Content-Type': 'application/json'
				},
				body: JSON.stringify({'vote': vote })
			})
  		.then((resp) => resp.json()) // Transform the data into json
  		.then(function(data) {
    	// Create and append the li's to the ul
    		dispatch(postPostVote(data));
    	})		
	} catch (error) {
		console.error(error);
	}
};

/*
POST /posts/:id
      USAGE:
        Used for voting on a post
      PARAMS:
        option - String: Either "upVote" or "downVote"


return fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson.success;
      })
      .catch((error) => {
        console.error(error);
      });





fetch('http://localhost/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        LoginActions.loginSuccess(response);
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        LoginActions.loginError();
        throw error;
      }
    })
    .catch(error => { console.log('request failed', error); });
  },
  */