import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPosts } from '../actions'
import { Link, Route } from 'react-router-dom';

class PostsList extends Component {
	
	constructor(props) {
    super(props);
    const { posts } = props;
    this.state = {
      posts
    };
  }

	componentDidMount() {
		//this.props.fetchPosts();
  }
/*
  componentWillReceiveProps(nextProps) {
    this.setState({ posts: nextProps });
  }
*/

		//let posts = fetchPosts();
		


		/*
		posts().then((response) => {
			console.log('response: ', response);
			return response
		});
		
		console.log('posts', posts);

		//posts.then((response) => response);

			.then((response) => response.json())
      .then((posts) => dispatch(postsFetchDataSuccess(posts));

	}
*/



  render() {

  	debugger;

		return (
		  <div className="postList">
		  	<h1>This is PostsList</h1>
				<p>Props: { this.props.posts }</p>
		  </div>
		);
  }
}

//const mapStateToProps = (state, ownProps) => { posts: state.posts };

//const mapDispatchToProps = { fetchPosts };

export default PostsList;

/*


const mapStateToProps = (state, ownProps) => ({
	debugger;
	return { posts: state.posts }
});
const mapDispatchToProps = { getRepos, clearRepos };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;*/