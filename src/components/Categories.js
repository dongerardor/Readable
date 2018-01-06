import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addPost, addUser, fetchCategories, fetchPosts } from '../actions'

import { Link, Route } from 'react-router-dom';

class Categories extends Component {

	state = {
		categories: []
	}

	componentDidMount() {
        this.props.fetchCategories();
    }

  	render(props) {
    	return (
      		<div className="categories">
        		<h1>This is Categories</h1>
        		<p>The id is: {this.props.match.params.id}</p>
     		</div>
    	);
  	}
}



const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);


//export default Categories;