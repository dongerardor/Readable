import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Redirect } from 'react-router';
import { fetchDeletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostDelete extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    if(this.props.match.params.postId){
      this.props.fetchDeletePost(this.props.match.params.postId);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps.post
    });
  }

  render() {
    return (
      <div>
        <h3>{this.props.post.title}</h3>
        <p>This post has been deleted</p>
        <Link to="/">OK</Link>
      </div>
    );
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = { fetchDeletePost };

export default PostDelete = connect(mapStateToProps, mapDispatchToProps)(PostDelete);


/*

POST /posts
      USAGE:
        Add a new post

      PARAMS:
        id - UUID should be fine, but any unique id will work
        timestamp - timestamp in whatever format you like, you can use Date.now() if you like
        title - String
        body - String
        author - String
        category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.


*/