import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPosts } from '../actions'

class PostsList extends Component {

	componentDidMount() {
    	this.props.fetchPosts();
	}

	render() {
  		return (
			<div className="postList">
				<h1>This is PostsList</h1>

        		<ul className='postsList'>
					{this.props.posts.map((post) => (
						<li key={post.id} className='postTitle'>
							{post.title}
						</li>
					))}
				</ul>
			</div>
		);
  	}
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = { fetchPosts };

export default PostsList = connect(mapStateToProps, mapDispatchToProps)(PostsList);