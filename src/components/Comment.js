import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import EditPanel from './EditPanel';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.itemId = props.comment.id;
  }

  formatDate(timestamp){
    const postCreatedDate = new Date(timestamp);
    return (postCreatedDate.getMonth() + 1) + '/' + postCreatedDate.getDate() + '/' +  postCreatedDate.getFullYear();
  }

  render() {
    return (
      <div className="comment">
        <p>Commented on {this.formatDate(this.props.comment.timestamp)}</p>
        <p>{this.props.comment.body}</p>
        <p>Commented by {this.props.comment.author}</p>
        <p>Votes: {this.props.comment.voteScore}</p>
        <EditPanel item={this.props.comment}/>
        <hr/>
      </div>  
    );
  }
}

function mapStateToProps (props) {
  return props;
}

export default Comment = connect(mapStateToProps)(Comment);

/*

    POST /comments/:id
      USAGE:
        Used for voting on a comment.
      PARAMS:
        option - String: Either "upVote" or "downVote"

*/