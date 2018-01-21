import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Link } from 'react-router-dom';
import { fetchPostPostVote } from '../actions';
import EditPanel from './EditPanel';

class PostsListItem extends Component {

	constructor(props) {
		super(props);
		this.postItem = props.postItem;
  	}

	onVote(vote){
		this.props.vote(this.props.postItem.id, vote);
	}
	onEditItem(){
		console.log('EditItem');
	}
	onDeleteItem(){
		console.log('DeleteItem');
	}

	render() {
  		return (
			<div className="postListItem">
        		<h1>
        			<Link to={`post/${this.props.postItem.id}`}>{this.props.postItem.title}</Link>
				</h1>

				<p className="author">{this.props.postItem.author}</p>
				<p>Comments: {this.props.postItem.commentCount}</p>
				<p>Score: {this.props.postItem.voteScore}</p>
				<EditPanel 
					itemId={this.props.postItem.id}
					onUpvote={this.onVote.bind(this, 'upVote')}
					onDownvote={this.onVote.bind(this, 'downVote')}
					onEdit={this.onEditItem.bind(this)}
					onDelete={this.onDeleteItem.bind(this)}
				/>
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