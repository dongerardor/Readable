import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Link } from 'react-router-dom';
import { fetchPostPostVote } from '../actions';

class EditPanel extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    

  }

  //<BrowserRouter basename="/calendar"/>

  render() {
    const item = this.props.item;//could be a Post or a Comment

    const itemType = item.parentId ? 'comment' : 'post';

    const path = itemType === 'comment' 
      ? `/post/${item.parentId}/comment/${item.id}`
      : `/post/${item.id}`;


    return (
      <div>
      {item && item.id &&
        <div className="editPanel">
          <button onClick={() => this.props.vote(itemType, item.id, 'upVote')}>Vote up</button>
          <button onClick={() => this.props.vote(itemType, item.id, 'downVote')}>Vote down</button>
          &nbsp;
          <Link to={`${path}/edit`}>Edit</Link>
          &nbsp;
          <Link to={`${path}/delete`}>Delete</Link>
        </div>
      }
      </div>
    );
  }
}

function mapStateToProps (props) {
  return props;
}

function mapDispatchToProps(dispatch) {
    return {
      vote: (itemType, itemId, vote) => dispatch(fetchPostPostVote(itemType, itemId, vote)),
  };
}

export default EditPanel = connect(mapStateToProps, mapDispatchToProps)(EditPanel);