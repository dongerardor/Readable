import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPosts } from '../actions'
import PostListItem from './PostListItem'

class PostsList extends Component {

	componentDidMount() {
    	this.props.fetchPosts();
	}

	render() {
  		return (
			<div>
        		<ul className='postsList'>
					{this.props.posts.map((post) => (
						<li key={post.id}>
							<PostListItem post={post}/>
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