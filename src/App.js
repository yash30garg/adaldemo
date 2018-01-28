import React, { Component } from 'react';
import './App.css';
import {Form} from './Form';
import { authContext } from './adalConfig';

class App extends Component {
  render() {
    console.log(authContext._user)
    return (
      <div className="App">
      <Form/>
      </div>
    );
  }
}

export default App;
