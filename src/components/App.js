import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import PostsList from './PostsList'
import Categories from './Categories'
import Header from './Header'
import Post from './Post'
import PostCreateEdit from './PostCreateEdit'
import PostDelete from './PostDelete'

class App extends Component {

  render() {
    return (
	  	<div className="App">
				<Header/>
				<Categories/>
				<Switch>
			  	<Route exact path="/post/new" component={PostCreateEdit} />
			  	<Route path="/post/:postId/edit" component={PostCreateEdit} />
			  	<Route path="/post/:postId/delete" component={PostDelete} />
			  	<Route exact path="/post/:id"
						render={(props) => (
							<div>
								<Post {...props}/>
							</div>
						)}
					/>

					<Route 
						exact path="/"
						render={(props) => (
							<div>
								<PostsList {...props}/>
							</div>
						)}
					/>

		      <Route 
						path="/:category" 
						render={(props) => (
							<div>
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