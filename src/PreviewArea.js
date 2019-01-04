import React, { Component } from 'react';

class PreviewArea extends Component {
  render() {
    return (
      <div id="preview" className="m-0 p-2">
        <code dangerouslySetInnerHTML={{__html: this.props.output}} />
      </div>
    )
  }
}

export default PreviewArea;
