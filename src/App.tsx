import React, { Component } from "react";

interface IState {
  counter: number;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <button onClick={this.minus}>Minus</button> {counter}{" "}
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
  add = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1
      };
    });
  };
  minus = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter - 1
      };
    });
  };
}

export default App;
