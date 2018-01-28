export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_POSTS = "GET_CATEGORY_POSTS";
export const POST_POST_VOTE = "POST_POST_VOTE";
export const CREATE_POST = "CREATE_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

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

export const createPost = post => ({
  type: CREATE_POST,
  post
})

export const editPost = post => ({
  type: EDIT_POST,
  post
})

export const deletePost = post => ({
  type: DELETE_POST,
  post
})




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

export const fetchCreatePost = (newPost) => async dispatch => {
  try {
    const url = '../posts';
    await fetch(url, 
      {
        method: 'POST',
        headers: {
          'Authorization': 'local_user',
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'id': newPost.id,
          'timestamp': newPost.timestamp,
          'title': newPost.title,
          'body': newPost.body,
          'author': newPost.author,
          'category': newPost.category,
        })
      })
      .then((resp) => resp.json())
      .then(function(data) {
        dispatch(createPost(data));
      })    
  } catch (error) {
      console.error(error);
  }
};

export const fetchEditPost = (editedPost) => async dispatch => {
  try {
    const url = `../../posts/${editedPost.id}`;
    await fetch(url, 
    {
      method: 'PUT',
      headers: {
        'Authorization': 'local_user',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'id': editedPost.id,
        'timestamp': editedPost.timestamp,
        'title': editedPost.title,
        'body': editedPost.body,
        'author': editedPost.author,
        'category': editedPost.category,
      })
    })
    .then((resp) => resp.json())
    .then(function(data) {
      dispatch(editPost(data));
    })    
  } catch (error) {
      console.error(error);
  }
};

export const fetchDeletePost = (deletedPostId) => async dispatch => {
  try {
    const url = `../../posts/${deletedPostId}`;
    await fetch(url, 
    {
      method: 'DELETE',
      headers: {
        'Authorization': 'local_user',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then((resp) => resp.json())
    .then(function(data) {
      dispatch(deletePost(data));
    })    
  } catch (error) {
      console.error(error);
  }
};

/*

PUT /posts/:id
      USAGE:
        Edit the details of an existing post
      PARAMS:
        title - String
        body - String

        */