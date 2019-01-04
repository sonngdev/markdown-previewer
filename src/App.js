import React, { Component } from 'react';
import marked from 'marked';
import Header from './Header.js';
import Editor from './Editor.js';
import Previewer from './Previewer.js';

marked.setOptions({
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  headerIds: false
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: null
    }
    this.inputChange = this.inputChange.bind(this);
    this.changeOutput = this.changeOutput.bind(this);
  }

  inputChange(event) {
    this.setState({ input: event.target.value }, this.changeOutput)
  }

  changeOutput() {
    this.setState({ output: marked(this.state.input) })
  }

  render() {
    return (
      <div className="App" style={{ height: "100vh" }}>
        <Header />
        <div className="container mt-5">
          <div className="row h-100">
            <Editor inputChange={this.inputChange} />
            <Previewer output={this.state.output} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
