import React, { Component } from 'react';
import TitleBar from './TitleBar.js';
import PreviewArea from './PreviewArea.js';

class Previewer extends Component {
  render() {
    return (
      <div className="col border-dark border h-75 p-0 bg-light m-2" style={{boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)"}}>
        <TitleBar name="Previewer" />
        <PreviewArea output={this.props.output} />
      </div>
    )
  }
}

export default Previewer;
