import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Categories from './Categories'


class Header extends Component {

  render() {
    return (
      <div className="header">
        <h1>Readable</h1>
        <hr/>
        <Categories/>
      </div>
    );
  }
}


export default Header;