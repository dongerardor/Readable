import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchCategories, fetchPosts, fetchCategoryPosts } from '../actions'
import { Link } from 'react-router-dom';

class Categories extends Component {
	
/*	selectCategory = function(category){
		console.log('selectCategory');
	}*/

	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		return (
			<div className="categories">
				<h4>Categories</h4>
				<ul className='categories'>
					{this.props.categories.map((category) => (
					<li 
						key={category.name}
						className='categoryName'
					>
						<button onClick={() => this.props.selectCategory(category.name)}>
							{category.name}
						</button>
					</li>
				  ))}
				  <li 
						className='categoryName'
					>
						<button onClick={() => this.props.selectAllCategories()}>
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
    	selectCategory: (category) => dispatch(fetchCategoryPosts(category)),
    	selectAllCategories: () => dispatch(fetchPosts()),
	};
}

export default Categories = connect(mapStateToProps, mapDispatchToProps)(Categories);




















































/*
function mapDispatchToProps(dispatch) {
    return ({
    	fetchCategories: () => {dispatch(fetchCategories)},
    	selectCategory: function(category) {
    						console.log('category: ', category)
    					}
    })
}
*/

/*
function mapDispatchToProps(dispatch) {
    return({
        sendTheAlert: () => {dispatch(ALERT_ACTION)}
    })
}
*/




//return dispatch(setCategory(category)


/*
const mapDispatchToProps = {
    fetchCategories
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories
  }
}
*/






//this.props.setCategory(category)

/*const mapDispatchToProps = dispatch => ({
  boundUpdateName: (name) => dispatch(updateName(name))
});*/

/*onClick={() => this.props.selectCategory(category.name)}*/