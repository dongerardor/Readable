import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Redirect } from 'react-router';
import { fetchComment, fetchCreateComment, fetchEditComment  } from '../actions';
import { default as UUID } from "node-uuid";
import { find } from 'lodash';

class CommentCreateEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      body: '',
      id: '',
      parentId: '',
      timestamp: '',
      formValid: false,
      errMsg: '',
      redirect: false,
    };

    this.showErrMsg = '';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitAction = this.props.fetchCreateComment;
  }

  componentDidMount() {
    this.setState({
      ...this.state,
        parentId: this.props.match.params.postId,
        id: this.props.match.params.commentId,
      });

    if (this.props.match.params.commentId) {
      this.submitAction = this.props.fetchEditComment;
      this.props.fetchComment(this.props.match.params.commentId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comments.length) {
      const thisComment = find(nextProps.comments, { 'id': this.state.id });
      this.setState({...this.state, ...thisComment});
    }
  }

  handleChange(event) {
    this.setState(
      {[event.target.name]: event.target.value}
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    const commentId = this.state.id ? this.state.id : UUID.v4(),
      commentTimestamp = this.state.timestamp ? this.state.timestamp : Date.now(),
      newComment = {
        ...this.state,
        id: commentId,
        timestamp: commentTimestamp,
      }

    if(this.validateForm(newComment)){
      this.submitAction(newComment)
      .then((post) => this.setState({
        ...this.state,
        ...newComment,
        errMsg: '',
        redirect: true 
      }));
    } else {
      this.setState({ errMsg: 'showErrMsg' });    
    }
  }

  validateForm(newComment) {
    if (newComment.author   !== '' &&
        newComment.body     !== ''){
      return true;
    }
    return;
  }

  render() {

    if (this.state.redirect && this.state.id) {
       return <Redirect to={`/post/${this.state.parentId}`}/>;
    }

    const authorDisabled = this.state.id ? 'disabled' : '';

    return (
      <form onSubmit={this.handleSubmit}>
        <p className={`errMsg ${this.state.errMsg}`}>All fields are mandatory</p>
        <label>Author:  <input name="author"    value={this.state.author}   onChange={this.handleChange} className='form-control' disabled={authorDisabled}/></label><br />
        <label>Body:    <textarea name="body"   value={this.state.body}     onChange={this.handleChange} className='form-control' /></label><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = { fetchComment, fetchCreateComment, fetchEditComment };

export default CommentCreateEdit = connect(mapStateToProps, mapDispatchToProps)(CommentCreateEdit);


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

    PUT /posts/:id
      USAGE:
        Edit the details of an existing post
      PARAMS:
        title - String
        body - String
*/