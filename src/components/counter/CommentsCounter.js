import { Component } from "react";
import HOCCounter from "./HOCCounter";

class CommentsCounter extends Component {
  render() {
    return (
      <div>
        Total comments: {this.props.countNumber} <br />
        <button onClick={this.props.handleClick}>Add comment 💬</button>
      </div>
    );
  }
}

const EnhancedComments = HOCCounter(CommentsCounter, 10);

export default EnhancedComments;
