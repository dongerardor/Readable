import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { fetchPost } from '../actions'
import Comments from './Comments'

class Post extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    return (
      <div className="post">
        <h6>By {this.props.post.author}</h6>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        <p>Voted: {this.props.post.voteScore}</p>
        <p>Comments: {this.props.post.commentCount}</p>
        <Comments postId={this.props.post.id}/>
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