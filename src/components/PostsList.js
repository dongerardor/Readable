import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPosts, fetchCategoryPosts } from '../actions'
import PostListItem from './PostListItem'

class PostsList extends Component {

	constructor(props) {
		super(props);
    	this.state = { 
    		'currentCategory': '',
    	};
  	}

  	setCurrentCategory(category){
  		const currentCategory = category || 'All';

		if (currentCategory !== this.state.currentCategory){
			this.setState({'currentCategory': currentCategory})
			if (currentCategory === 'All'){
				this.props.fetchPosts();
			} else {
				this.props.fetchCategoryPosts(currentCategory);
			}
		}
  	}

  	componentDidMount(){
		this.setCurrentCategory();
  	}

	componentWillReceiveProps(nextProps) {
		this.setCurrentCategory(nextProps.match.params.category);
  	}

	render() {
  		return (
			<div>
        		<ul className='postsList'>
					{this.props.posts.map((post) => (
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