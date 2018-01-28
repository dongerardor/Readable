import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Link } from 'react-router-dom';

class EditPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <div className="editPanel">
        <button
          onClick={() => this.props.onUpvote()}>
        >Vote up</button>
        <button
          onClick={() => this.props.onDownvote()}>
        >Vote down</button>
        &nbsp;
        <Link to={`/post/${this.props.itemId}/edit`}>Edit</Link>
        &nbsp;
        <Link to={`/post/${this.props.itemId}/delete`}>Delete</Link>
      </div>  
    );
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = {  };

export default EditPanel = connect(mapStateToProps, mapDispatchToProps)(EditPanel);