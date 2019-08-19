import React, { Component } from "react";

class ErrorBoundary extends Component {
  state: {
    errorMessage: "Oops! Something error occured",
    hasError: false
  };

  componentDidCatch = (error, info) => {
    this.setState({
      errorMessage: error,
      hasError: true
    });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;