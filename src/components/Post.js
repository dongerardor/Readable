import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPost } from '../actions'
import Comments from './Comments'

class Post extends Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  formatDate(timestamp){
    const postCreatedDate = new Date(timestamp);
    return (postCreatedDate.getMonth() + 1) + '/' + postCreatedDate.getDate() + '/' +  postCreatedDate.getFullYear();
  }

  render() {
    return (
      <div className="post">
        <p>Created on {this.formatDate(this.props.post.timestamp)}</p>
        <h6>By {this.props.post.author}</h6>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        <p>Voted: {this.props.post.voteScore}</p>
        <p>Comments: {this.props.post.commentCount}</p>
        <Comments postId={this.props.post.id}/>
        <EditPanel/>
      </div>
    );
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = { fetchPost };

export default Post = connect(mapStateToProps, mapDispatchToProps)(Post);


/*
`GET /posts/:id` un post
`GET /posts/:id/comments` comments del post 
*/