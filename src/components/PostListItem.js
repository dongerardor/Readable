import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPosts, fetchPostComments, fetchPostPostVote } from '../actions'

class PostsListItem extends Component {

	constructor(props) {
		super(props);
  }

	componentDidMount() {
    //this.props.fetchPostComments(this.props.post.id);
	}

	render() {
  		return (
			<div className="postListItem">
        <h1>{this.props.post.title}</h1>
				<p className="author">{this.props.post.author}</p>
				<p>Comments: {this.props.post.commentCount}</p>
				<p>Score: {this.props.post.voteScore}</p>
				<button
					onClick={() => this.props.vote(this.props.post.id, 'upVote')}>
				>Vote up</button>
				<button
					onClick={() => this.props.vote(this.props.post.id, 'downVote')}>
				>Vote down</button>
				<button>Edit</button>
				<button>Delete</button>
			</div>
		);
  }
}

function mapStateToProps (props) {
  return props;
}

function mapDispatchToProps(dispatch) {
  	return {
    	vote: (post, vote) => dispatch(fetchPostPostVote(post, vote)),
	};
}

export default PostsListItem = connect(mapStateToProps, mapDispatchToProps)(PostsListItem);


/*
    POST /posts/:id
      USAGE:
        Used for voting on a post
      PARAMS:
        option - String: Either "upVote" or "downVote"
*/