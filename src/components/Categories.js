import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchCategories, fetchPosts, fetchCategoryPosts } from '../actions'
import { Link } from 'react-router-dom';

class Categories extends Component {

	constructor(props) {
		super(props);
    	this.state = { currentCategory: '' };
  	}

	componentDidMount() {
		this.props.fetchCategories();
	}

	selectCategory(category) {
		this.setState({ currentCategory: category });
		!!category ? this.props.selectCategory(category) : this.props.selectAllCategories();
	}

	render() {
		return (
			<div className='container'>
				<ul className='categories'>
					{this.props.categories.map((category) => (
					<li 
						key={category.name}
					>
						<button 
							className={'categoryButton ' + (this.state.currentCategory === category.name ? ' selected' : '')}
							onClick={() => this.selectCategory(category.name)}>
							{category.name}
						</button>
					</li>
				  ))}
				  <li>
						<button 
							className={'categoryButton ' + (this.state.currentCategory === "" ? ' selected' : '')}
							onClick={() => this.selectCategory()}>
							All posts
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

function mapStateToProps (props) {
  return props;
}

function mapDispatchToProps(dispatch) {
  	return {
    	fetchCategories: () => dispatch(fetchCategories()),
    	selectCategory: (category) => {
    		dispatch(fetchCategoryPosts(category));
    	},
    	selectAllCategories: () => dispatch(fetchPosts()),
	};
}

export default Categories = connect(mapStateToProps, mapDispatchToProps)(Categories);