import React, { Component } from "react";

const HOCCounter = (Component, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: data
      };
    }

    handleClick = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      return (
        <Component
          countNumber={this.state.count}
          handleClick={this.handleClick}
        />
      );
    }
  };
};

export default HOCCounter;
