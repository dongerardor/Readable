import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Link, Route, BrowserRouter } from 'react-router-dom';
import { withRouter, Router} from 'react-router'

import PostsList from './PostsList'
import Categories from './Categories'
import Header from './Header'

class App extends Component {

  render() {
  	const ppp = Math.random();
    return (

      	<div className="App">

	        <Header/>
	        
			<Route 
				exact path="/"
				render={(props) => (
					<div>
						<Categories {...props}/>
						<PostsList {...props} />
					</div>
					)}
			/>

			<Route 
				path="/:category" 
				render={(props) => (
					<div>
						<Categories {...props}/>
						<PostsList {...props} />
					</div>
					)}
			/>

		</div>
    );
  }
}

export default App;