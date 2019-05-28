import React, { Component } from 'react';

export default class extends Component {
  static getInitialProps({ query: { id } }) {
    return { postId: id };
  }

  render() {
    return (
      <div>
        <h1>My blog post #{this.props.postId}</h1>
        <p>New image</p>
      </div>
    );
  }
}
