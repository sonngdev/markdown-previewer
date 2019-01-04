import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    return (
      <code>
        <textarea id="editor" className="border-0 bg-light w-100 p-2" rows="20" onChange={this.props.inputChange} />
      </code>
    )
  }
}

export default TextArea;
