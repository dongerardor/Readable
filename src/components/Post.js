import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Post extends Component {

  render() {
    return (
      <div className="post">
        <h1>Post</h1>
        <p>Id</p>
        <p>Timestamp</p>
        <h3>Title</h3>
        <p>Body</p>
        <p>Author</p>
        <p>Category</p>
        <p>Vote score (1, 2, 3, -1, etc.)</p>
        <p>deleted (true or false)</p>

        <br/>

        <Link to='/post/33'>
          Editar post 33
        </Link>
      </div>
    );
  }
}


export default Post;
