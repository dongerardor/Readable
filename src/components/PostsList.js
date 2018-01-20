import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPosts, fetchCategoryPosts } from '../actions'
import PostListItem from './PostListItem'

class PostsList extends Component {

	constructor(props) {
		super(props);
  	}

	componentWillReceiveProps(nextProps) {
    	if (nextProps.match && nextProps.match.params && nextProps.match.params.category){
    		this.props.fetchCategoryPosts(nextProps.match.params.category);
    	} else {
    		this.props.fetchPosts();
    	}
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

const mapDispatchToProps = { fetchPosts, fetchCategoryPosts };

export default PostsList = connect(mapStateToProps, mapDispatchToProps)(PostsList);