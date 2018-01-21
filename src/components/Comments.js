import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Link } from 'react-router-dom';
import { fetchComments } from '../actions';
import Comment from './Comment';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {postId: ''};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.postId && nextProps.postId != this.state.postId){
      this.setState({postId: nextProps.postId});
      this.props.fetchComments(nextProps.postId);
    }
  }

  render() {
    return (
      <div className="post">
        <hr/>
        <h6>Comments</h6>

        <ul className='commentsList'>
          {this.props.comments
            .filter(comment => !comment.parentDeleted && !comment.deleted)
            .map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment}/>
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

const mapDispatchToProps = { fetchComments };

export default Comments = connect(mapStateToProps, mapDispatchToProps)(Comments);


/*
`GET /posts/:id` un post
`GET /posts/:id/comments` comments del post 

"{"id":"894tuq4ut84ut8v4t8wun89g","parentId":"8xf0y6ziyjabvozdd253nd","timestamp":1468166872634,"body":"Hi there! I am a COMMENT.","author":"thingtwo","voteScore":6,"deleted":false,"parentDeleted":false}"

*/