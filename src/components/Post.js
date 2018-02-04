import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPost } from '../actions'
import Comments from './Comments'
import EditPanel from './EditPanel'
import { find } from 'lodash';
import { Link } from 'react-router-dom';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.postId = this.props.match.params.id;
    this.props.fetchPost(this.postId);
  }

  componentWillReceiveProps(nextProps){
    const thisPost = find(nextProps.posts, {'id': this.postId});
    if (thisPost){
      this.setState({...thisPost});
    }
  }

  formatDate(timestamp){
    const postCreatedDate = new Date(timestamp);
    return (postCreatedDate.getMonth() + 1) + '/' + postCreatedDate.getDate() + '/' +  postCreatedDate.getFullYear();
  }

  render() {
    return (
      <div>
      {this.state.id &&
        <div className="post">
          <p>Created on {this.formatDate(this.state.timestamp)}</p>
          <h6>By {this.state.author}</h6>
          <h3>{this.state.title}</h3>
          <p>{this.state.body}</p>
          <p>Votes: {this.state.voteScore}</p>
          <p>Comments: {this.state.commentCount}</p>
          <EditPanel item={this.state}/>
          <Link to={`/${this.state.category}/${this.state.id}/comment/new`}>Add new comment</Link>
          <Comments postId={this.state.id}/>
        </div>
      }
      </div>
    );
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = { fetchPost };

export default Post = connect(mapStateToProps, mapDispatchToProps)(Post);