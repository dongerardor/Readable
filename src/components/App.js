import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addPost } from '../actions'

class App extends Component {


  render() {
    
    console.log('Props', this.props);

    return (
      <div className="App">
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder='Input placeholder'

        />
        <button onClick={this.submitAction}>Submit action</button>
        <pre>
          Rastaman vibration yeah
        </pre>
      </div>
    );
  }
}

function mapStateToProps (post) {
  return post;
}

function mapDispatchToProps(dispatch){
  return {
    addPost: (post) => dispatch(addPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
