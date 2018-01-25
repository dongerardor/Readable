import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { createPost } from '../actions';
import {default as UUID} from "node-uuid";

class CreatePost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      body: '',
      category: '',
      commentCount: 0,
      deleted: false,
      id: '',
      timestamp: '',
      title: '',
      votescore: 0,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.id = UUID.v4();
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
    
    if(this.validateForm()){
      this.setState({
        ...this.state,
        commentCount: 0,
        deleted: false,
        id: this.id,
        timestamp: new Date(),
        votescore: 0,
        formValid: false,
      })

      console.log('submission: ', JSON.stringify(this.state));
    
    } else {
     
      console.log('form invalid');
    
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
    return (
      <form onSubmit={this.handleSubmit}>
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

        <label>Author:<input name="author"  value={this.state.author}   onChange={this.handleChange} className='form-control' /></label><br />
        <label>Title:<input name="title"    value={this.state.title}    onChange={this.handleChange} className='form-control' /></label><br />
        <label>Body:<textarea name="body"   value={this.state.body}     onChange={this.handleChange} className='form-control' /></label><br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = { createPost };

export default CreatePost = connect(mapStateToProps, mapDispatchToProps)(CreatePost);


/*
`GET /posts/:id` un post
`GET /posts/:id/comments` comments del post 
*/