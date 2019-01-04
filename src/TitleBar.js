import React, { Component } from 'react';

class TitleBar extends Component {
  render() {
    return (
      <div className="bg-dark p-1">
        <h3 className="text-light text-center">{this.props.name}</h3>
      </div>
    )
  }
}

export default TitleBar;
