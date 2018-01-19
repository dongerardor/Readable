import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Link, Route } from 'react-router-dom';


class Categories extends Component {

	constructor(props) {
		super(props);
		this.state = {'pepe': 'papa'};
  	}

	componentDidMount() {
		debugger;
		this.setState({'pepe': this.props.match.params.id});
	}

	render() {		
		return (
			<div className='container'>
				<p>Pepe {this.state.pepe}</p>
			</div>
		);
	}
}

function mapStateToProps (props) {
  return props;
}

function mapDispatchToProps(dispatch) {
  	return {
	};
}

export default Categories = connect(mapStateToProps, mapDispatchToProps)(Categories);