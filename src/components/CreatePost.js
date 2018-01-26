import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Redirect } from 'react-router';
import { fetchCreatePost } from '../actions';
import {default as UUID} from "node-uuid";

class CreatePost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      body: '',
      category: '',
      id: '',
      timestamp: '',
      title: '',
      formValid: false,
      errMsg: '',
      redirect: false,
    };

    this.showErrMsg = '';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const fieldName = event.target.name,
      fieldValue = event.target.value;

    this.setState(
      {[fieldName]: fieldValue}
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const id = UUID.v4();
    const timestamp = Date.now();
    let newPost = {};

    if(this.validateForm()){
      

      newPost = {
        author: this.state.author,
        body: this.state.body,
        title: this.state.title,
        category: this.state.category,
        id: id,
        timestamp: timestamp,
      }

      this.setState({
        ...this.state,
        ...newPost,
        errMsg: '',
      });

      this.props.fetchCreatePost(newPost).then((post) => this.setState({ redirect: true }));
  
    } else {
      this.setState({errMsg: 'showErrMsg'});    
    }
  }

  validateForm() {
    if (this.state.author   !== '' ||
        this.state.body     !== '' ||
        this.state.category !== '' ||
        this.state.title    !== ''){
      return true;
    }
    return;
  }

  render() {

    if (this.state.redirect && this.state.id) {
       return <Redirect to={`posts/${this.state.id}`}/>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <p className={`errMsg ${this.state.errMsg}`}>All the fields are mandatory</p>
        <label>
          Create new post:
          <select value={this.state.category} name='category' onChange={this.handleChange} className='form-control'>
              <option key='no-category' value='None'>Select category</option>
            {this.props.categories.map((category) => 
              <option key={category.name} value={category.name}>{category.name}</option>
            )}
          </select>
        </label>

        <br />

        <label>Author:  <input name="author"    value={this.state.author}   onChange={this.handleChange} className='form-control' /></label><br />
        <label>Title:   <input name="title"     value={this.state.title}    onChange={this.handleChange} className='form-control' /></label><br />
        <label>Body:    <textarea name="body"   value={this.state.body}     onChange={this.handleChange} className='form-control' /></label><br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = { fetchCreatePost };

export default CreatePost = connect(mapStateToProps, mapDispatchToProps)(CreatePost);


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