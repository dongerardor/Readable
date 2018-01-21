import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchCategories } from '../actions'
import { Link } from 'react-router-dom';


class Categories extends Component {

	constructor(props) {
		super(props);
    	this.state = { currentCategory: '' };
  	}

	componentDidMount() {
		this.props.fetchCategories();
	}

	componentWillReceiveProps(nextProps){
		const categorySelected = 	(nextProps.match && 
															nextProps.match.params && 
															nextProps.match.params.category) || '';
		this.setState({'currentCategory': categorySelected});
	}

	render() {		
		return (
			<div className='container'>
				<ul className='categories'>
					{this.props.categories.map((category) => (
					<li 
						key={category.name}
						className={'categoryButton ' + (this.state.currentCategory === category.name ? ' selected' : '')}
					>

						<Link to={`/${category.name}`}>{category.name}</Link>
					</li>
				  ))}
				  <li
				  		className={'categoryButton ' + (this.state.currentCategory === "" ? ' selected' : '')}
				  >
						<Link to="/">All posts</Link>
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
	};
}

export default Categories = connect(mapStateToProps, mapDispatchToProps)(Categories);