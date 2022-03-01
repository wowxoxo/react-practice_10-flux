import { Component } from "react";

class LikesCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        {this.state.count} <br />
        <button onClick={this.handleClick}>Like ♥ 👍</button>
      </div>
    );
  }
}

export default LikesCounter;
