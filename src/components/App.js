import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addPost, addUser, fetchPosts } from '../actions'

import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router'

import PostsList from './PostsList'
import Categories from './Categories'
import Header from './Header'
import Footer from './Footer'

class App extends Component {

  state = {
    showing: 'Main'
  }


  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log('Props: ', this.props);
    return (
      <div className="App">

        <Header/>

        <Route exact path='/' component={PostsList}/>

        <Route path='/category/:id' component={Categories}/>

        <p>{this.props.posts.map((post) => {
          post.title
        })}
        </p>

        <ol className="posts-grid">
        {

          this.props.posts.map((post) => 
            <li key={post.id}>
              <p>{post.title}</p>
            </li>
        )}
        </ol>

        <Footer/>

      </div>
    );
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = { fetchPosts };

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));