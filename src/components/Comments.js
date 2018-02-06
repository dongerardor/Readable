import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchComments } from '../actions';
import Comment from './Comment';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.props.fetchComments(this.props.postId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ comments: [ ...nextProps.comments ] });
  }

  render() {
    const comments = this.state && this.state.comments;
    return (
      <div className="comments">
        {comments && 
          <div>
            <hr/>
            <ul className='commentsList'>
              {comments
                .filter(comment => !comment.parentDeleted && !comment.deleted)
                .map((comment) => (
                <li key={comment.id}>
                  <Comment comment={comment}/>
                </li>
              ))}
            </ul>
          </div>
        }
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