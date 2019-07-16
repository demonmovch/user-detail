import React, { Component } from 'react';

export default class ErrorCatcher extends Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return (
        <section>
          <p>A mysterious error occured!</p>
          <p>Our space engineers are fixing that already.</p>
        </section>
      );
    }

    return this.props.children;
  }
}
