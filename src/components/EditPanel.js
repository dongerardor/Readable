import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class EditPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {itemId: ''}
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.itemId !== nextProps.itemId){
      this.setState({itemId: nextProps.itemId});
    }
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
        <button
          onClick={() => this.props.onEdit()}
        >Edit</button>
        <button
          onClick={() => this.props.onDelete()}
        >Delete</button>
      </div>  
    );
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = {  };

export default EditPanel = connect(mapStateToProps, mapDispatchToProps)(EditPanel);