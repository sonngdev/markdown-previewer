import React, { Component } from 'react';
import TitleBar from './TitleBar.js';
import TextArea from './TextArea.js';

class Editor extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col border-dark border h-75 p-0 bg-light m-2" style={{boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)"}}>
        <TitleBar name="Editor" />
        <TextArea />
      </div>
    )
  }
}

export default Editor;
