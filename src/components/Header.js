import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <div className="header">
        <h1>Header</h1>

        <br/>
        
        <Link to='/'>
          Este es un link a /
        </Link>
        
        <br/>

         <Link to='/category/33'>
          Este es un link a category
        </Link>
      </div>
    );
  }
}


export default Header;