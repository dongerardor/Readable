import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPosts, fetchCategoryPosts } from '../actions'
import PostListItem from './PostListItem'
import { Link } from 'react-router-dom';

class PostsList extends Component {

	constructor(props) {
		super(props);
  	
  	this.state = { 
  		'currentCategory': '',
  		'orderBy': 'timestamp',
  	};
	}

	setCurrentCategory(category){
		const currentCategory = category || 'All';

		if (currentCategory !== this.state.currentCategory){
			this.setState({
				'currentCategory': currentCategory
			});
			
			if (currentCategory === 'All'){
				this.props.fetchPosts();
			} else {
				this.props.fetchCategoryPosts(currentCategory);
			}
		}
	}

	setPostsOrder(e){
		if (e.target.value !== this.state.orderBy){
			this.setState({'orderBy': e.target.value});
		}
	}

	componentDidMount(){
		this.setCurrentCategory();
	}

	componentWillReceiveProps(nextProps) {
		this.setCurrentCategory(nextProps.match.params.category);
  }

	render() {

		const posts = this.props.posts.sort((a, b) => a[this.state.orderBy] > b[this.state.orderBy]);
  	return (
			<div>
				{this.props.posts.length > 1 &&
				<form>
			    <label>
	        	<input 
	        		type="radio"
	        		value="timestamp"
							checked={this.state.orderBy === 'timestamp'}
							onChange={this.setPostsOrder.bind(this)}
	        	/>
						Order by date
						<br/>
					</label>
			      <label>
	           	<input 
	           		type="radio"
	           		value="voteScore"
								checked={this.state.orderBy === 'voteScore'}
								onChange={this.setPostsOrder.bind(this)}
	           	/>
						Order by score
			    </label>
			  </form>
				}
				<hr/>
				<Link to={'post/new'}>Create new post</Link>

        <ul className='postsList'>
					{posts.map((post) => (
						<li key={post.id}>
							<PostListItem postItem={post}/>
						</li>
					))}
				</ul>
			</div>
		);
  }
}

function mapStateToProps (props) {
  return props;
}

const mapDispatchToProps = { fetchPosts, fetchCategoryPosts };

export default PostsList = connect(mapStateToProps, mapDispatchToProps)(PostsList);