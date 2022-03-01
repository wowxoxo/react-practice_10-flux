import { Component } from "react";
import HOCCounter from "./HOCCounter";

class LikesCounter extends Component {
  render() {
    return (
      <div>
        {this.props.countNumber} <br />
        <button onClick={this.props.handleClick}>Like ♥ 👍</button>
      </div>
    );
  }
}

const EnhancedLikes = HOCCounter(LikesCounter, 6);

export default EnhancedLikes;
