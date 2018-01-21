import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Link } from 'react-router-dom';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {comment: {}};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id && nextProps.id != this.state.id){
      this.setState({comment: nextProps});
    }
  }

  render() {
    return (
      <div className="comment">
        <p>Comment id: {this.props.comment.id}</p>
        <p>Comment date: {this.props.comment.timestamp}</p>
        <p>Comment body: {this.props.comment.bodydate}</p>
        <p>Comment author: {this.props.comment.author}</p>
        <p>Comment votes: {this.props.comment.voteScore}</p>
        <hr/>
      </div>  
    );
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = {  };

export default Comment = connect(mapStateToProps, mapDispatchToProps)(Comment);


/*
`GET /posts/:id` un post
`GET /posts/:id/comments` comments del post 

"{"id":"894tuq4ut84ut8v4t8wun89g",
"parentId":"8xf0y6ziyjabvozdd253nd",
"timestamp":1468166872634,
"body":"Hi there! I am a COMMENT.",
"author":"thingtwo",
"voteScore":6,
"deleted":false,
"parentDeleted":false}"

*/