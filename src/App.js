import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 50 };
  }
  render() {
    return (
      <>
        <button> - </button>
        <span>{this.state.count}</span>
        <button> + </button>
      </>
    );
  }
}

export default Counter;
