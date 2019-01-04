import React, { Component } from 'react';
import Header from './Header.js';
import Editor from './Editor.js';
import Previewer from './Previewer.js';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100vh" }}>
        <Header />
        <div className="container mt-5">
          <div className="row h-100">
            <Editor />
            <Previewer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
