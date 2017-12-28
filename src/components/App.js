import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import {  addPost } from '../actions'

class App extends Component {

  state = {
    post: null
  }

  componentDidMount(){

    const { store } = this.props;

    store.subscribe(() => {
      this.setState(() => ({
        post: store.getState()
      }))
    })

  }

  submitAction = () => {
    this.props.store.dispatch(addPost({
      author: 'author1',
      title: 'title1',
      content: this.input.value,
    }))

    this.input.value = '';
  }

  render() {
    return (
      <div className="App">
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder='Input placeholder'

        />
        <button onClick={this.submitAction}>Submit action</button>
        <pre>
          Rastaman vibration yeah: {this.state.post}
        </pre>
      </div>
    );
  }
}

export default App;
