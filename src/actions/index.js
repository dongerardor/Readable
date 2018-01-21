export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_POSTS = "GET_CATEGORY_POSTS";
export const POST_POST_VOTE = "POST_POST_VOTE";

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const getPost = post => ({
  type: GET_POST,
  post
});

export const getComments = comments => ({
  type: GET_COMMENTS,
  comments
});

export const getCategories = categories => ({
	type: GET_CATEGORIES,
	categories
});

export const getCategoryPosts = category => ({
	type: GET_CATEGORY_POSTS,
	category
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

export const fetchPost = (postId) => async dispatch => {
  try {
    const url = `/posts/${postId}`;
    const response = await fetch(url, { headers });
    const responseBody = await response.json();
    dispatch(getPost(responseBody));
  } catch (error) {
    console.error(error);
  }
};

export const fetchComments = (postId) => async dispatch => {
  try {
    const response = await fetch(`/posts/${postId}/comments`, { headers });
    const responseBody = await response.json();
    dispatch(getComments(responseBody));
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

//vote is a string ('upVote' or 'downVote')
export const fetchPostPostVote = (postId, vote) => async dispatch => {
	try {
		const url = `posts/${postId}`;
		await fetch(url, 
			{
				method: 'POST',
				headers: {
  				'Authorization': 'local_user',
					'Accept': 'application/json, text/plain, */*',
	        'Content-Type': 'application/json'
				},
				body: JSON.stringify({'vote': vote })
			})
  		.then((resp) => resp.json())
  		.then(function(data) {
    		dispatch(postPostVote(data));
    	})		
	} catch (error) {
		console.error(error);
	}
};