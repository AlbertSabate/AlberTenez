import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading-bounce"></div>
        <div className="loading-bounce"></div>
      </div>
    );
  }
}

export default Loading;
