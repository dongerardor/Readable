import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Comment extends Component {

  render() {
    return (
      <div className="comment">
        <h1>Comment</h1>
        <p>Id</p>        <h1>Comment</h1>

        <p>parentId</p>
        <p>Timestamp</p>
        <p>Body</p>
        <p>Author</p>
        <p>Vote score (1, 2, 3, -1, etc.)</p>
        <p>deleted (true or false)</p>
        <p>parentDeleted (true or false)</p>
        <br/>

        <Link to='/post/33'>
          Editar post 33
        </Link>
      </div>
    );
  }
}

export default Comment;