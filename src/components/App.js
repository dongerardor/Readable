import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import PostsList from './PostsList'
import Categories from './Categories'
import Header from './Header'
import Post from './Post'

class App extends Component {

  render() {
    return (
	  	<div className="App">

	      <Header/>

    
			  <Switch>

			  	<Route
						exact path="/post/:id"
						render={(props) => (
							<div>
								<Categories/>
								<Post {...props}/>
							</div>
						)}
					/>

					<Route 
						exact path="/"
						render={(props) => (
							<div>
								<Categories/>
								<PostsList {...props}/>
							</div>
						)}
					/>

		      <Route 
						path="/:category" 
						render={(props) => (
							<div>
								<Categories {...props}/>
								<PostsList  {...props}/>
							</div>
						)}
					/>
				</Switch>
		    
		</div>
    );
  }
}

export default App;