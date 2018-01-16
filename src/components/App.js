import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router'

import PostsList from './PostsList'
import Categories from './Categories'
import Header from './Header'

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header/>

        <Route exact path='/' component={PostsList}/>

        <Route path='/category/:id' component={Categories}/>

      </div>
    );
  }
}

export default withRouter(App);