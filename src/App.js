import React, { Component } from 'react';
import './App.css';
import Video from './containers/Video';
import Form from './containers/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Video/>
      </div>
    );
  }
}

export default App;
